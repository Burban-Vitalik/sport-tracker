/*
  Warnings:

  - The values [muscleGain,fat_loss,maintenance,strength_development,cardio] on the enum `WorkoutGoal` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `BodyInfo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `sex` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `WorkoutExercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `WorkoutProgram` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `BodyInfo` will be added. If there are existing duplicate values, this will fail.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "FavoriteType" AS ENUM ('EXERCISE', 'WORKOUT_PROGRAM');

-- CreateEnum
CREATE TYPE "DrinkType" AS ENUM ('WATER', 'COFFEE', 'TEA');

-- AlterEnum
BEGIN;
CREATE TYPE "WorkoutGoal_new" AS ENUM ('MUSCLE_GAIN', 'FAT_LOSS', 'MAINTENANCE', 'STRENGTH_DEVELOPMENT', 'CARDIO');
ALTER TABLE "WorkoutProgram" ALTER COLUMN "workoutGoal" TYPE "WorkoutGoal_new" USING ("workoutGoal"::text::"WorkoutGoal_new");
ALTER TYPE "WorkoutGoal" RENAME TO "WorkoutGoal_old";
ALTER TYPE "WorkoutGoal_new" RENAME TO "WorkoutGoal";
DROP TYPE "WorkoutGoal_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "BodyInfo" DROP CONSTRAINT "BodyInfo_userId_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_workoutProgramId_fkey";

-- DropForeignKey
ALTER TABLE "WorkoutProgram" DROP CONSTRAINT "WorkoutProgram_userId_fkey";

-- AlterTable
ALTER TABLE "BodyInfo" DROP CONSTRAINT "BodyInfo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT;
DROP SEQUENCE "BodyInfo_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
DROP COLUMN "sex",
ADD COLUMN     "sex" "Gender",
ALTER COLUMN "role" SET NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "WorkoutExercise" DROP CONSTRAINT "WorkoutExercise_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "workoutProgramId" SET DATA TYPE TEXT,
ADD CONSTRAINT "WorkoutExercise_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "WorkoutExercise_id_seq";

-- AlterTable
ALTER TABLE "WorkoutProgram" DROP CONSTRAINT "WorkoutProgram_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "WorkoutProgram_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "WorkoutProgram_id_seq";

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "type" "FavoriteType" NOT NULL,

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DrinkRecord" (
    "id" TEXT NOT NULL,
    "bodyInfoId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amountMl" DOUBLE PRECISION NOT NULL,
    "drinkType" "DrinkType" NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DrinkRecord_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chat" (
    "id" TEXT NOT NULL,
    "isPrivate" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatParticipant" (
    "id" TEXT NOT NULL,
    "chatId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ChatParticipant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DrinkRecord_bodyInfoId_date_key" ON "DrinkRecord"("bodyInfoId", "date");

-- CreateIndex
CREATE INDEX "Chat_isPrivate_idx" ON "Chat"("isPrivate");

-- CreateIndex
CREATE UNIQUE INDEX "ChatParticipant_chatId_userId_key" ON "ChatParticipant"("chatId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "BodyInfo_id_key" ON "BodyInfo"("id");

-- CreateIndex
CREATE INDEX "WorkoutExercise_workoutProgramId_exerciseId_idx" ON "WorkoutExercise"("workoutProgramId", "exerciseId");

-- CreateIndex
CREATE INDEX "WorkoutProgram_userId_idx" ON "WorkoutProgram"("userId");

-- AddForeignKey
ALTER TABLE "BodyInfo" ADD CONSTRAINT "BodyInfo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutProgram" ADD CONSTRAINT "WorkoutProgram_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_workoutProgramId_fkey" FOREIGN KEY ("workoutProgramId") REFERENCES "WorkoutProgram"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DrinkRecord" ADD CONSTRAINT "DrinkRecord_bodyInfoId_fkey" FOREIGN KEY ("bodyInfoId") REFERENCES "BodyInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatParticipant" ADD CONSTRAINT "ChatParticipant_chatId_fkey" FOREIGN KEY ("chatId") REFERENCES "Chat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatParticipant" ADD CONSTRAINT "ChatParticipant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
