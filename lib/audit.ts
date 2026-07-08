import { prisma } from "@/lib/db";
import type { SessionUser } from "@/lib/auth/session";

type AuditArgs = {
  session: SessionUser | null;
  action: string; // e.g. "create"
  entity: string; // e.g. "NozzleReading"
  entityId?: string;
  branchId?: string;
  after?: unknown;
  before?: unknown;
};

/** Append-only audit trail: who did what, when, to which record. */
export async function writeAudit(args: AuditArgs): Promise<void> {
  await prisma.auditLog.create({
    data: {
      userId: args.session?.userId,
      userName: args.session?.name,
      action: args.action,
      entity: args.entity,
      entityId: args.entityId,
      branchId: args.branchId,
      before: args.before === undefined ? undefined : JSON.stringify(args.before),
      after: args.after === undefined ? undefined : JSON.stringify(args.after),
    },
  });
}
