import { NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/require-user";
import { db } from "@/lib/db";

interface RouteContext {
  params: Promise<{
    projectId: string;
  }>;
}

const PROJECT_STATUSES = [
  "DRAFT",
  "ACTIVE",
  "ARCHIVED",
] as const;

const PROJECT_VISIBILITIES = [
  "PRIVATE",
  "PUBLIC",
] as const;

type ProjectStatus =
  (typeof PROJECT_STATUSES)[number];

type ProjectVisibility =
  (typeof PROJECT_VISIBILITIES)[number];

function isProjectStatus(
  value: unknown,
): value is ProjectStatus {
  return (
    typeof value === "string" &&
    PROJECT_STATUSES.includes(
      value as ProjectStatus,
    )
  );
}

function isProjectVisibility(
  value: unknown,
): value is ProjectVisibility {
  return (
    typeof value === "string" &&
    PROJECT_VISIBILITIES.includes(
      value as ProjectVisibility,
    )
  );
}

export async function GET(
  _request: Request,
  context: RouteContext,
) {
  const user = await requireUser();
  const { projectId } = await context.params;

  const project = await db.project.findFirst({
    where: {
      id: projectId,
      ownerId: user.id,
    },
  });

  if (!project) {
    return NextResponse.json(
      {
        error: "Project not found.",
      },
      {
        status: 404,
      },
    );
  }

  return NextResponse.json({
    project,
  });
}

export async function PATCH(
  request: Request,
  context: RouteContext,
) {
  const user = await requireUser();
  const { projectId } = await context.params;

  const existingProject = await db.project.findFirst({
    where: {
      id: projectId,
      ownerId: user.id,
    },
  });

  if (!existingProject) {
    return NextResponse.json(
      {
        error: "Project not found.",
      },
      {
        status: 404,
      },
    );
  }

  try {
    const body = await request.json();

    const data: {
      name?: string;
      description?: string | null;
      status?: ProjectStatus;
      visibility?: ProjectVisibility;
    } = {};

    if (body.name !== undefined) {
      if (typeof body.name !== "string") {
        return NextResponse.json(
          {
            error: "Project name must be a string.",
          },
          {
            status: 400,
          },
        );
      }

      const name = body.name.trim();

      if (!name) {
        return NextResponse.json(
          {
            error: "Project name cannot be empty.",
          },
          {
            status: 400,
          },
        );
      }

      if (name.length > 100) {
        return NextResponse.json(
          {
            error:
              "Project name must be 100 characters or less.",
          },
          {
            status: 400,
          },
        );
      }

      data.name = name;
    }

    if (body.description !== undefined) {
      if (body.description === null) {
        data.description = null;
      } else if (
        typeof body.description === "string"
      ) {
        data.description =
          body.description.trim() || null;
      } else {
        return NextResponse.json(
          {
            error:
              "Project description must be a string.",
          },
          {
            status: 400,
          },
        );
      }
    }

    if (body.status !== undefined) {
      if (!isProjectStatus(body.status)) {
        return NextResponse.json(
          {
            error:
              "Invalid project status. Use DRAFT, ACTIVE, or ARCHIVED.",
          },
          {
            status: 400,
          },
        );
      }

      data.status = body.status;
    }

    if (body.visibility !== undefined) {
      if (!isProjectVisibility(body.visibility)) {
        return NextResponse.json(
          {
            error:
              "Invalid project visibility. Use PRIVATE or PUBLIC.",
          },
          {
            status: 400,
          },
        );
      }

      data.visibility = body.visibility;
    }

    const project = await db.project.update({
      where: {
        id: projectId,
      },
      data,
    });

    return NextResponse.json({
      project,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Unable to update project.",
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
  const { projectId } = await context.params;

  const existingProject = await db.project.findFirst({
    where: {
      id: projectId,
      ownerId: user.id,
    },
  });

  if (!existingProject) {
    return NextResponse.json(
      {
        error: "Project not found.",
      },
      {
        status: 404,
      },
    );
  }

  await db.project.delete({
    where: {
      id: projectId,
    },
  });

  return NextResponse.json({
    success: true,
  });
}