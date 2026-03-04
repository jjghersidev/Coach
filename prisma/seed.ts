import { PrismaClient } from '@prisma/client';
import { addDays, startOfWeek } from 'date-fns';

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: 'demo@fitcoach.ai' },
    update: {},
    create: { email: 'demo@fitcoach.ai', profile: { create: { age: 38, heightCm: 172, weightKg: 80, goalWeightKg: 74, activityLevel: 1.55, preferences: { objective: 'fat-loss-performance' } } } }
  });

  const exerciseData = [
    ['Back Squat', 'legs'],
    ['Bench Press', 'chest'],
    ['Romanian Deadlift', 'posterior chain'],
    ['Pull-Up', 'back']
  ] as const;

  const exercises = await Promise.all(
    exerciseData.map(([name, muscleGroup]) => prisma.exercise.upsert({ where: { id: name }, update: { muscleGroup }, create: { id: name, name, muscleGroup } }))
  );

  const chicken = await prisma.ingredient.upsert({ where: { name: 'Chicken breast' }, update: {}, create: { name: 'Chicken breast', unit: 'g' } });
  const rice = await prisma.ingredient.upsert({ where: { name: 'Rice' }, update: {}, create: { name: 'Rice', unit: 'g' } });
  const oats = await prisma.ingredient.upsert({ where: { name: 'Oats' }, update: {}, create: { name: 'Oats', unit: 'g' } });

  const recipe1 = await prisma.recipe.create({ data: { name: 'Chicken Rice Bowl', servings: 2, instructions: 'Cook rice. Grill chicken. Add vegetables and sauce.', tags: ['meal-prep', 'high-protein'], macrosJson: { calories: 520, protein: 42, carbs: 56, fat: 12 }, recipeIngredients: { create: [{ ingredientId: chicken.id, qty: 300 }, { ingredientId: rice.id, qty: 220 }] } } });
  const recipe2 = await prisma.recipe.create({ data: { name: 'Protein Overnight Oats', servings: 1, instructions: 'Mix oats, yogurt and protein powder. Refrigerate overnight.', tags: ['breakfast', 'prep'], macrosJson: { calories: 420, protein: 35, carbs: 48, fat: 9 }, recipeIngredients: { create: [{ ingredientId: oats.id, qty: 80 }] } } });

  const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 });
  const plan = await prisma.nutritionPlan.upsert({ where: { userId_weekStartDate: { userId: user.id, weekStartDate: weekStart } }, update: {}, create: { userId: user.id, weekStartDate: weekStart } });

  await prisma.meal.createMany({ data: [
    { nutritionPlanId: plan.id, date: weekStart, mealType: 'breakfast', recipeId: recipe2.id, servings: 1 },
    { nutritionPlanId: plan.id, date: weekStart, mealType: 'lunch', recipeId: recipe1.id, servings: 1 },
    { nutritionPlanId: plan.id, date: addDays(weekStart, 1), mealType: 'lunch', recipeId: recipe1.id, servings: 1 }
  ] });

  await prisma.runningSession.createMany({ data: [
    { userId: user.id, date: addDays(new Date(), -5), type: 'easy', durationMin: 45, distanceKm: 8.2, rpe1to10: 4 },
    { userId: user.id, date: addDays(new Date(), -3), type: 'tempo', durationMin: 50, distanceKm: 9.5, rpe1to10: 7 },
    { userId: user.id, date: addDays(new Date(), -1), type: 'long_run', durationMin: 80, distanceKm: 14, rpe1to10: 6 }
  ] });

  const strength = await prisma.strengthSession.create({ data: { userId: user.id, date: addDays(new Date(), -2), templateName: 'Upper / Lower A' } });
  await prisma.setEntry.createMany({ data: [
    { strengthSessionId: strength.id, exerciseId: exercises[0].id, setNumber: 1, reps: 5, weight: 100, rir: 2, rpe: 8 },
    { strengthSessionId: strength.id, exerciseId: exercises[1].id, setNumber: 1, reps: 6, weight: 75, rir: 2, rpe: 8 }
  ] });
}

main().finally(async () => prisma.$disconnect());
