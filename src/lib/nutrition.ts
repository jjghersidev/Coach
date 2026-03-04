type RecipeLike = { id: string; name: string };
type MealLike = {
  servings: number;
  recipe: {
    recipeIngredients: {
      ingredientId: string;
      qty: number;
      ingredient: { name: string; unit: string };
    }[];
  };
};

export function buildRepeatingMeals(recipes: RecipeLike[], days = 7) {
  const plan: { day: number; recipeName: string }[] = [];
  for (let i = 0; i < days; i++) {
    plan.push({ day: i + 1, recipeName: recipes[i % Math.min(3, recipes.length)].name });
  }
  return plan;
}

export function consolidateGrocery(meals: MealLike[]) {
  const map = new Map<string, { ingredient: string; qty: number; unit: string }>();
  meals.forEach((meal) => {
    meal.recipe.recipeIngredients.forEach((ri) => {
      const prev = map.get(ri.ingredientId);
      const qty = ri.qty * meal.servings;
      map.set(ri.ingredientId, { ingredient: ri.ingredient.name, qty: (prev?.qty ?? 0) + qty, unit: ri.ingredient.unit });
    });
  });
  return [...map.values()];
}
