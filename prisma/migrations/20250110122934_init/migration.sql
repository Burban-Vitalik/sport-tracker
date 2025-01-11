-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "BodyType" AS ENUM ('ectomorph', 'mesomorph', 'endomorph');

-- CreateEnum
CREATE TYPE "WorkoutGoal" AS ENUM ('muscleGain', 'fat_loss', 'maintenance', 'strength_development', 'cardio');

-- CreateTable
CREATE TABLE "WorkoutProgram" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "weekSessions" INTEGER NOT NULL,
    "currentAge" INTEGER NOT NULL,
    "currenHeight" INTEGER NOT NULL,
    "currentWeight" INTEGER NOT NULL,
    "goalWeight" INTEGER NOT NULL,
    "fatPercentage" INTEGER NOT NULL,
    "goalFatPercentage" INTEGER NOT NULL,
    "gender" "Gender" NOT NULL,
    "goalHeight" INTEGER NOT NULL,
    "isPublic" BOOLEAN NOT NULL,
    "programStart" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "programEnd" TIMESTAMP(3),
    "workoutGoal" "WorkoutGoal" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WorkoutProgram_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutProgram_userId_key" ON "WorkoutProgram"("userId");

-- AddForeignKey
ALTER TABLE "WorkoutProgram" ADD CONSTRAINT "WorkoutProgram_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
