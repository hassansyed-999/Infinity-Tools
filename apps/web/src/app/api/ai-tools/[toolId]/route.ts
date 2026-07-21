import { NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/require-user";
import { db } from "@/lib/db";

interface RouteContext {
  params: Promise<{
    toolId: string;
  }>;
}

export async function GET(
  _request: Request,
  context: RouteContext,
) {
  const { toolId } = await context.params;

  const tool = await db.tool.findUnique({
    where: {
      id: toolId,
    },
  });

  if (!tool) {
    return NextResponse.json(
      {
        error: "Tool not found.",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({
    tool,
  });
}

export async function PATCH(
  request: Request,
  context: RouteContext,
) {
  const user = await requireUser();
  const { toolId } = await context.params;

  const existingTool = await db.tool.findFirst({
    where: {
      id: toolId,
      ownerId: user.id,
    },
  });

  if (!existingTool) {
    return NextResponse.json(
      {
        error: "Tool not found.",
      },
      {
        status: 404,
      },
    );
  }

  try {
    const body = await request.json();

    const tool = await db.tool.update({
      where: {
        id: toolId,
      },
      data: {
        name:
          typeof body.name === "string"
            ? body.name.trim()
            : existingTool.name,

        description:
          typeof body.description === "string"
            ? body.description.trim()
            : existingTool.description,

        category:
          typeof body.category === "string"
            ? body.category.trim()
            : existingTool.category,

        website:
          typeof body.website === "string"
            ? body.website.trim()
            : existingTool.website,

        pricing:
          typeof body.pricing === "string"
            ? body.pricing.trim()
            : existingTool.pricing,

        icon:
          typeof body.icon === "string"
            ? body.icon.trim()
            : existingTool.icon,
      },
    });

    return NextResponse.json({
      tool,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to update tool.",
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(
  _request: Request,
  context: RouteContext,
) {
  const user = await requireUser();
  const { toolId } = await context.params;

  const existingTool = await db.tool.findFirst({
    where: {
      id: toolId,
      ownerId: user.id,
    },
  });

  if (!existingTool) {
    return NextResponse.json(
      {
        error: "Tool not found.",
      },
      {
        status: 404,
      },
    );
  }

  await db.tool.delete({
    where: {
      id: toolId,
    },
  });

  return NextResponse.json({
    success: true,
  });
}