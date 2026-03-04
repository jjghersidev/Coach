import { recipes, meals, demoUser } from '@/lib/demo-data';
import { buildRepeatingMeals, consolidateGrocery } from '@/lib/nutrition';
import { calculateCalorieTarget, calculateMaintenanceCalories, macroTargets } from '@/lib/fitness';

export default function NutritionPage() {
  const maintenance = calculateMaintenanceCalories(demoUser.profile.weightKg, demoUser.profile.heightCm, demoUser.profile.age, demoUser.profile.activityLevel);
  const calories = calculateCalorieTarget(maintenance);
  const macros = macroTargets(demoUser.profile.weightKg, calories, true);
  const grocery = consolidateGrocery(meals);

  return (
    <div className="space-y-4">
      <div className="card"><h2 className="font-semibold">Weekly Nutrition Plan Builder</h2><p className="text-sm">Target: {calories} kcal (maintenance {maintenance}). Macros: P {macros.protein}g / C {macros.carbs}g / F {macros.fat}g.</p><p className="mt-2 text-xs text-slate-300">Carb periodization: high carb on tempo/interval/long run days, moderate otherwise.</p></div>
      <div className="card text-sm"><h3 className="font-medium">Smart Repetition (2–3 base meals)</h3>{buildRepeatingMeals(recipes).map((item) => <p key={item.day}>Day {item.day}: {item.recipeName}</p>)}</div>
      <div className="card text-sm"><h3 className="font-medium">Consolidated Grocery List</h3>{grocery.map((item) => <label key={item.ingredient} className="flex items-center gap-2"><input type="checkbox" /> {item.ingredient}: {item.qty}{item.unit}</label>)}</div>
    </div>
  );
}
