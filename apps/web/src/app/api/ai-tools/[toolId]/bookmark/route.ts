import { NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/require-user";
import { db } from "@/lib/db";

interface RouteContext {
  params: Promise<{
    toolId: string;
  }>;
}

export async function POST(
  _request: Request,
  context: RouteContext,
) {
  const user = await requireUser();
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

  const existingBookmark =
    await db.toolBookmark.findUnique({
      where: {
        userId_toolId: {
          userId: user.id,
          toolId,
        },
      },
    });

  if (existingBookmark) {
    return NextResponse.json({
      bookmarked: true,
    });
  }

  await db.$transaction([
    db.toolBookmark.create({
      data: {
        userId: user.id,
        toolId,
      },
    }),

    db.tool.update({
      where: {
        id: toolId,
      },
      data: {
        bookmarkCount: {
          increment: 1,
        },
      },
    }),
  ]);

  return NextResponse.json({
    bookmarked: true,
  });
}

export async function DELETE(
  _request: Request,
  context: RouteContext,
) {
  const user = await requireUser();
  const { toolId } = await context.params;

  const bookmark =
    await db.toolBookmark.findUnique({
      where: {
        userId_toolId: {
          userId: user.id,
          toolId,
        },
      },
    });

  if (!bookmark) {
    return NextResponse.json({
      bookmarked: false,
    });
  }

  await db.$transaction([
    db.toolBookmark.delete({
      where: {
        id: bookmark.id,
      },
    }),

    db.tool.update({
      where: {
        id: toolId,
      },
      data: {
        bookmarkCount: {
          decrement: 1,
        },
      },
    }),
  ]);

  return NextResponse.json({
    bookmarked: false,
  });
}