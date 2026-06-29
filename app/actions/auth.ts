"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { verifyPassword } from "@/lib/auth/password";
import { createSession, destroySession, getSession, setActiveBranchId } from "@/lib/auth/session";
import type { Role } from "@/lib/constants";
import { loginInput } from "@/lib/validation/schemas";
import { type ActionState, parseForm } from "@/lib/actions/helpers";
import { writeAudit } from "@/lib/audit";

export async function login(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const parsed = parseForm(loginInput, formData);
  if (!parsed.success) return { ok: false, errors: parsed.errors };

  const user = await prisma.user.findUnique({
    where: { email: parsed.data.email.toLowerCase() },
    include: { branches: true },
  });
  if (!user || !user.active) {
    return { ok: false, message: "Invalid email or password." };
  }
  const valid = await verifyPassword(parsed.data.password, user.passwordHash);
  if (!valid) {
    return { ok: false, message: "Invalid email or password." };
  }

  await createSession({
    userId: user.id,
    email: user.email,
    name: user.name,
    role: user.role as Role,
    branchIds: user.branches.map((b) => b.branchId),
  });
  await writeAudit({
    session: { userId: user.id, email: user.email, name: user.name, role: user.role as Role, branchIds: [] },
    action: "login",
    entity: "User",
    entityId: user.id,
  });
  redirect("/");
}

export async function logout(): Promise<void> {
  await destroySession();
  redirect("/login");
}

export async function switchBranch(formData: FormData): Promise<void> {
  const session = await getSession();
  const branchId = String(formData.get("branchId") ?? "");
  if (session && session.branchIds.includes(branchId)) {
    await setActiveBranchId(branchId);
  }
  revalidatePath("/", "layout");
}
