import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: {
      email: "admin@infinity.tools",
    },
    update: {},
    create: {
      email: "admin@infinity.tools",
      name: "Infinity Admin",
      username: "infinity-admin",
      role: "ADMIN",
    },
  });

  const tools = [
    {
      name: "AI Text Generator",
      slug: "ai-text-generator",
      description: "Generate and improve text with AI.",
      category: "AI",
    },
    {
      name: "Background Remover",
      slug: "background-remover",
      description: "Remove image backgrounds quickly.",
      category: "Image",
    },
    {
      name: "PDF Tools",
      slug: "pdf-tools",
      description: "Manage and transform PDF documents.",
      category: "Documents",
    },
  ];

  for (const tool of tools) {
    await prisma.tool.upsert({
      where: {
        slug: tool.slug,
      },
      update: {
        name: tool.name,
        description: tool.description,
        category: tool.category,
      },
      create: tool,
    });
  }

  console.log(`Seeded admin user: ${admin.email}`);
  console.log(`Seeded ${tools.length} tools`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });