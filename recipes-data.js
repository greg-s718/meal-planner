// Greg & Reyna's COMPLETE Recipe Database
// All ~100 Recipes - Full Interactive Cookbook
// Created January 2026 for Honduras Living
// Easy to Edit: Just modify this file!

const RECIPES_DATABASE = {
    
    // ============================================
    // BREAKFAST RECIPES (~17 total)
    // ============================================
    breakfast: [
        // ============================================
        // DRESSINGS & SAUCES (3 items)
        // ============================================
        {
            // === DRESSINGS & MARINADES ===
        {
            id: "E018",
            name: "Homemade Ranch Dressing",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: "Makes 1 cup",
            cuisine: "American",
            ingredients: [
                "½ cup mayonnaise",
                "½ cup sour cream (or Greek yogurt)",
                "2 tbsp fresh dill, chopped (or 1 tbsp dried)",
                "2 tbsp fresh parsley, chopped",
                "1 tbsp fresh chives, chopped",
                "2 cloves garlic, minced",
                "1 tsp onion powder",
                "½ tsp salt",
                "¼ tsp black pepper",
                "1-2 tbsp almond milk (to thin if needed)"
            ],
            instructions: [
                "Mix all ingredients in bowl",
                "Whisk until smooth",
                "Add almond milk if you want thinner consistency",
                "Taste and adjust seasonings",
                "Refrigerate at least 30 minutes for flavors to meld",
                "Store in fridge up to 1 week",
                "Use on salads, as veggie dip, or drizzle on bowls"
            ]
        },
        
        {
            id: "E019",
            name: "Basil Pesto",
            spicy: false,
            prepTime: "10 min",
            cookTime: "0 min",
            servings: "Makes 1 cup",
            cuisine: "Italian",
            ingredients: [
                "2 cups fresh basil leaves, packed",
                "½ cup Parmesan cheese, grated",
                "½ cup olive oil",
                "⅓ cup pine nuts (or walnuts)",
                "3 cloves garlic",
                "½ tsp salt",
                "¼ tsp black pepper",
                "1 tbsp lemon juice"
            ],
            instructions: [
                "Add basil, Parmesan, pine nuts, and garlic to food processor",
                "Pulse until coarsely chopped",
                "With processor running, slowly drizzle in olive oil",
                "Process until smooth but still slightly textured",
                "Add lemon juice, salt, and pepper",
                "Pulse to combine",
                "Store in fridge up to 1 week with thin layer of olive oil on top",
                "Or freeze in ice cube trays for longer storage",
                "Use on zucchini noodles, chicken, or as spread"
            ]
        },
        
        {
            id: "E020",
            name: "Tahini Lemon Dressing",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: "Makes ¾ cup",
            cuisine: "Mediterranean",
            ingredients: [
                "½ cup tahini",
                "¼ cup lemon juice",
                "2 cloves garlic, minced",
                "3-4 tbsp water (to thin)",
                "½ tsp cumin",
                "½ tsp salt",
                "¼ tsp black pepper"
            ],
            instructions: [
                "Whisk tahini and lemon juice in bowl (it will seize up at first)",
                "Add water 1 tbsp at a time, whisking until smooth and pourable",
                "Add garlic, cumin, salt, and pepper",
                "Whisk until combined",
                "Adjust consistency with more water if needed",
                "Taste and adjust seasonings",
                "Store in fridge up to 2 weeks",
                "Perfect for Buddha bowls, roasted vegetables, falafel"
            ]
        },
        
        // ============================================
        // MARINADES & COMPOTE (3 items)
        // ============================================
        {
            id: "E021",
            name: "Fajita Marinade",
            spicy: true,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: "Enough for 2 lbs meat",
            cuisine: "Mexican",
            ingredients: [
                "¼ cup lime juice",
                "¼ cup olive oil",
                "3 cloves garlic, minced",
                "2 tsp chili powder",
                "2 tsp cumin",
                "1 tsp paprika",
                "½ tsp cayenne [MILD: omit]",
                "1 tsp salt",
                "½ tsp black pepper"
            ],
            instructions: [
                "Whisk all ingredients together",
                "Pour over chicken, beef, or shrimp",
                "Marinate 2-4 hours (or up to overnight)",
                "Grill or sauté as desired",
                "Discard marinade after use"
            ]
        },
        
        {
            id: "E022",
            name: "Teriyaki-Style Marinade (Low-Carb)",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: "Enough for 2 lbs meat",
            cuisine: "Asian",
            ingredients: [
                "½ cup coconut aminos (or soy sauce)",
                "2 tbsp sesame oil",
                "2 tbsp rice vinegar",
                "2 cloves garlic, minced",
                "1 tbsp ginger, grated",
                "1 tbsp sugar-free sweetener",
                "1 tsp sesame seeds"
            ],
            instructions: [
                "Whisk all ingredients together",
                "Pour over chicken, salmon, or beef",
                "Marinate 1-4 hours",
                "Cook as desired",
                "For glaze: simmer reserved marinade 5 minutes until thickened"
            ]
        },
        
        {
            id: "E023",
            name: "Berry Compote (Sugar-Free)",
            spicy: false,
            prepTime: "5 min",
            cookTime: "15 min",
            servings: "Makes 2 cups",
            cuisine: "International",
            ingredients: [
                "3 cups mixed berries (fresh or frozen)",
                "¼ cup water",
                "¼ cup sugar-free sweetener",
                "1 tbsp lemon juice",
                "1 tsp vanilla extract",
                "Optional: 1 tsp chia seeds to thicken"
            ],
            instructions: [
                "Combine berries, water, and sweetener in saucepan",
                "Bring to boil over medium heat",
                "Reduce heat, simmer 10-15 minutes until berries break down and mixture thickens",
                "Stir in lemon juice and vanilla",
                "Add chia seeds if you want thicker consistency",
                "Let cool (will thicken more as it cools)",
                "Store in fridge up to 2 weeks",
                "Use on yogurt, protein pancakes, or as dessert topping"
            ]
        },
        
        {
            // === HOMEMADE STAPLES ===
        {
            id: "E024",
            name: "Homemade Gluten-Free Flour Tortillas",
            spicy: false,
            prepTime: "15 min",
            cookTime: "20 min",
            servings: "Makes 12 tortillas (8-inch)",
            cuisine: "Mexican/Honduran",
            hondurasNotes: "Perfect for Baleadas! Make these fresh in Honduras. Almond flour and tapioca starch store well. These taste MUCH better than store-bought GF tortillas and are softer, more pliable.",
            ingredients: [
                "2 cups almond flour (blanched, finely ground)",
                "1 cup tapioca starch (also called tapioca flour)",
                "1 tsp xanthan gum (helps bind without gluten)",
                "1 tsp salt",
                "1 tsp baking powder",
                "2 tbsp olive oil or coconut oil",
                "1 cup warm water (plus more if needed)",
                "Optional: 1 tbsp psyllium husk powder (makes them more flexible)"
            ],
            instructions: [
                "In large bowl, whisk together almond flour, tapioca starch, xanthan gum, salt, and baking powder",
                "Add oil and mix until crumbly",
                "Gradually add warm water, mixing with hands or spoon until dough forms",
                "Dough should be soft and pliable, not sticky. Add more water 1 tbsp at a time if too dry, or more tapioca starch if too sticky",
                "Knead gently for 1-2 minutes until smooth",
                "Divide into 12 equal balls (about 2 inches diameter)",
                "Let dough rest 10 minutes covered with damp towel (this helps with rolling)",
                "Heat a dry cast iron skillet or griddle over medium-high heat",
                "Place one dough ball between two sheets of parchment paper",
                "Use rolling pin to roll into 8-inch circle, about 1/8 inch thick",
                "Carefully peel off top parchment, flip tortilla onto hand, peel off bottom parchment",
                "Place tortilla on hot skillet",
                "Cook 30-45 seconds until bottom has light brown spots and edges start to lift",
                "Flip and cook another 30-45 seconds",
                "Remove to plate and cover with clean towel to keep warm and pliable",
                "Repeat with remaining dough balls",
                "Store cooled tortillas in airtight container or ziplock bag",
                "Refrigerate up to 5 days, or freeze up to 3 months (separate with parchment)"
            ],
            gregMacros: { protein: "3g", carbs: "8g", fat: "6g", calories: 95 },
            reynaMacros: { protein: "3g", carbs: "8g", fat: "6g", calories: 95 }
        },
        
        {
            id: "E025",
            name: "Quick Coconut Flour Tortillas (Grain-Free)",
            spicy: false,
            prepTime: "10 min",
            cookTime: "15 min",
            servings: "Makes 8 tortillas (6-inch)",
            cuisine: "Mexican/Honduran",
            hondurasNotes: "Even easier than almond flour version! Coconut flour is very shelf-stable and available at most stores. These are thicker, more like pupusas, but work great for Baleadas or wraps.",
            ingredients: [
                "½ cup coconut flour",
                "¼ tsp salt",
                "½ tsp baking powder",
                "4 large eggs",
                "¼ cup water",
                "2 tbsp coconut oil or olive oil (melted)",
                "Optional: ½ tsp garlic powder or cumin for flavor"
            ],
            instructions: [
                "In medium bowl, whisk together coconut flour, salt, and baking powder",
                "In another bowl, whisk eggs, water, and melted oil until well combined",
                "Pour wet ingredients into dry ingredients",
                "Stir until smooth batter forms (it will be thicker than regular tortilla dough)",
                "Let batter rest 5 minutes (coconut flour absorbs liquid)",
                "If too thick, add water 1 tbsp at a time. If too thin, add coconut flour 1 tsp at a time",
                "Heat non-stick skillet or griddle over medium heat, lightly grease with oil",
                "Pour about ¼ cup batter onto skillet",
                "Use back of spoon to spread into 6-inch circle (these don't spread like regular tortillas)",
                "Cook 2-3 minutes until edges are set and bottom is golden",
                "Flip carefully and cook another 2 minutes",
                "Remove to plate and cover with towel to keep warm",
                "Repeat with remaining batter",
                "These are best served fresh and warm",
                "Store leftovers in fridge up to 3 days (reheat in dry skillet to soften)"
            ],
            gregMacros: { protein: "4g", carbs: "6g", fat: "7g", calories: 100 },
            reynaMacros: { protein: "4g", carbs: "6g", fat: "7g", calories: 100 }
        }
    ]
};

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RECIPES_DATABASE;
}
