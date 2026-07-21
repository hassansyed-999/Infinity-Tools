import "server-only";

import { db } from "./index";

export async function getActiveTools() {
  return db.tool.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}

export type ActiveTool = Awaited<
  ReturnType<typeof getActiveTools>
>[number];

export async function getUserByEmail(email: string) {
  return db.user.findUnique({
    where: {
      email,
    },
  });
}

export async function getUserById(id: string) {
  return db.user.findUnique({
    where: {
      id,
    },
  });
}

export async function getProjects() {
  return db.project.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
}

export type UserProject = Awaited<
  ReturnType<typeof getProjects>
>[number];

export async function getProjectById(id: string) {
  return db.project.findUnique({
    where: {
      id,
    },
  });
}

export async function getToolBySlug(slug: string) {
  return db.tool.findFirst({
    where: {
      slug,
      isActive: true,
    },
  });
}

export type ActiveToolBySlug = Awaited<
  ReturnType<typeof getToolBySlug>
>;