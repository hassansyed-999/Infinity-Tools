-- AlterTable
ALTER TABLE "Tool" ADD COLUMN     "apiAvailable" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "banner" TEXT,
ADD COLUMN     "bookmarkCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "developer" TEXT,
ADD COLUMN     "downloads" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "featuredAt" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ADD COLUMN     "license" TEXT,
ADD COLUMN     "openSource" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "platform" TEXT,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "reviewCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "shortDescription" TEXT,
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "verifiedAt" TIMESTAMP(3),
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "ToolBookmark" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ToolBookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ToolReview" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "userId" TEXT NOT NULL,
    "toolId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ToolReview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ToolBookmark_userId_idx" ON "ToolBookmark"("userId");

-- CreateIndex
CREATE INDEX "ToolBookmark_toolId_idx" ON "ToolBookmark"("toolId");

-- CreateIndex
CREATE UNIQUE INDEX "ToolBookmark_userId_toolId_key" ON "ToolBookmark"("userId", "toolId");

-- CreateIndex
CREATE INDEX "ToolReview_toolId_idx" ON "ToolReview"("toolId");

-- CreateIndex
CREATE INDEX "ToolReview_userId_idx" ON "ToolReview"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ToolReview_userId_toolId_key" ON "ToolReview"("userId", "toolId");

-- AddForeignKey
ALTER TABLE "ToolBookmark" ADD CONSTRAINT "ToolBookmark_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolBookmark" ADD CONSTRAINT "ToolBookmark_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolReview" ADD CONSTRAINT "ToolReview_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToolReview" ADD CONSTRAINT "ToolReview_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES "Tool"("id") ON DELETE CASCADE ON UPDATE CASCADE;
