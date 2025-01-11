/*
  Warnings:

  - You are about to drop the column `currenHeight` on the `WorkoutProgram` table. All the data in the column will be lost.
  - You are about to drop the column `isPublic` on the `WorkoutProgram` table. All the data in the column will be lost.
  - Added the required column `currentHeight` to the `WorkoutProgram` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isPrivate` to the `WorkoutProgram` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkoutProgram" DROP COLUMN "currenHeight",
DROP COLUMN "isPublic",
ADD COLUMN     "currentHeight" INTEGER NOT NULL,
ADD COLUMN     "isPrivate" BOOLEAN NOT NULL;
