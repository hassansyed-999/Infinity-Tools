import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    tools: [],
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json(
    {
      success: true,
      tool: body,
    },
    {
      status: 201,
    },
  );
}