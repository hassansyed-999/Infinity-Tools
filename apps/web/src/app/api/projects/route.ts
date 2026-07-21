import { NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/require-user";
import { db } from "@/lib/db";

export async function GET() {
  const user = await requireUser();

  const projects = await db.project.findMany({
    where: {
      ownerId: user.id,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });

  return NextResponse.json({
    projects,
  });
}

export async function POST(request: Request) {
  const user = await requireUser();

  try {
    const body = await request.json();

    const name =
      typeof body.name === "string"
        ? body.name.trim()
        : "";

    const description =
      typeof body.description === "string"
        ? body.description.trim()
        : "";

    if (!name) {
      return NextResponse.json(
        {
          error: "Project name is required.",
        },
        {
          status: 400,
        },
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        {
          error: "Project name must be 100 characters or less.",
        },
        {
          status: 400,
        },
      );
    }

    const project = await db.project.create({
      data: {
        name,
        description: description || null,
        ownerId: user.id,
      },
    });

    return NextResponse.json(
      {
        project,
      },
      {
        status: 201,
      },
    );
  } catch {
    return NextResponse.json(
      {
        error: "Unable to create project.",
      },
      {
        status: 500,
      },
    );
  }
}