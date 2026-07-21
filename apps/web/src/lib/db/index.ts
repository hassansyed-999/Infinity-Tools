import "server-only";

import { db } from "@infinity/db";

export { db };

export async function checkDatabaseConnection() {
  await db.$queryRaw`SELECT 1`;

  return {
    connected: true,
  };
}