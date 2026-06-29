import type { ZodType } from "zod";
import { AuthError, ForbiddenError } from "@/lib/auth/errors";

export type FieldErrors = Record<string, string>;

export type ActionState = {
  ok: boolean;
  message?: string;
  errors?: FieldErrors;
};

export const idleState: ActionState = { ok: false };

/** Parse FormData against a Zod schema into either field errors or typed data. */
export function parseForm<T>(schema: ZodType<T>, formData: FormData):
  | { success: true; data: T }
  | { success: false; errors: FieldErrors } {
  const raw: Record<string, unknown> = {};
  for (const [key, value] of formData.entries()) {
    raw[key] = value;
  }
  const result = schema.safeParse(raw);
  if (result.success) return { success: true, data: result.data };

  const errors: FieldErrors = {};
  for (const issue of result.error.issues) {
    const path = issue.path.join(".") || "form";
    if (!errors[path]) errors[path] = issue.message;
  }
  return { success: false, errors };
}

/** Map auth/forbidden errors to friendly form messages; rethrow the rest. */
export function toActionError(err: unknown): ActionState {
  if (err instanceof AuthError) {
    return { ok: false, message: "Your session has expired. Please sign in again." };
  }
  if (err instanceof ForbiddenError) {
    return { ok: false, message: "You do not have permission to perform this action." };
  }
  throw err;
}
