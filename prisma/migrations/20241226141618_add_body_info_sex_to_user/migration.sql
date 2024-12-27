-- AlterTable
ALTER TABLE "User" ADD COLUMN     "sex" TEXT;

-- CreateTable
CREATE TABLE "BodyInfo" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BodyInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BodyInfo_userId_key" ON "BodyInfo"("userId");

-- CreateIndex
CREATE INDEX "BodyInfo_userId_idx" ON "BodyInfo"("userId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "BodyInfo" ADD CONSTRAINT "BodyInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
