-- Initial schema for FitCoach AI MVP.
-- Apply with prisma migrate once Prisma engine binaries are available.
CREATE TYPE "RunType" AS ENUM ('easy','tempo','intervals','long_run');
CREATE TYPE "MealType" AS ENUM ('breakfast','lunch','dinner','snack');
-- Full table DDL is modeled in prisma/schema.prisma.
