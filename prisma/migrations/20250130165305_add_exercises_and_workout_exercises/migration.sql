/*
  Warnings:

  - You are about to drop the column `createdAt` on the `WorkoutProgram` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `WorkoutProgram` table. All the data in the column will be lost.
  - Made the column `programStart` on table `WorkoutProgram` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('client', 'admin', 'coach');

-- CreateEnum
CREATE TYPE "MuscleGroup" AS ENUM ('CHEST', 'BACK', 'LEGS', 'ARMS', 'SHOULDERS', 'CORE', 'CARDIO');

-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- DropIndex
DROP INDEX "WorkoutProgram_userId_key";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" DEFAULT 'client';

-- AlterTable
ALTER TABLE "WorkoutProgram" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ALTER COLUMN "currentWeight" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "goalWeight" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "fatPercentage" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "goalFatPercentage" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "goalHeight" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "programStart" SET NOT NULL,
ALTER COLUMN "currentHeight" SET DATA TYPE DOUBLE PRECISION;

-- DropEnum
DROP TYPE "BodyType";

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,
    "muscleGroup" "MuscleGroup" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkoutExercise" (
    "id" SERIAL NOT NULL,
    "workoutProgramId" INTEGER NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "sets" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,
    "restTime" INTEGER NOT NULL,

    CONSTRAINT "WorkoutExercise_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_workoutProgramId_fkey" FOREIGN KEY ("workoutProgramId") REFERENCES "WorkoutProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkoutExercise" ADD CONSTRAINT "WorkoutExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
