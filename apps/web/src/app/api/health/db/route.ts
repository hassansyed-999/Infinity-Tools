import { NextResponse } from "next/server";

import { checkDatabaseConnection } from "@/lib/db";

export async function GET() {
  try {
    const result = await checkDatabaseConnection();

    return NextResponse.json({
      status: "ok",
      database: result.connected ? "connected" : "disconnected",
    });
  } catch {
    return NextResponse.json(
      {
        status: "error",
        database: "disconnected",
      },
      {
        status: 503,
      },
    );
  }
}