// Greg & Reyna's COMPLETE Recipe Database
// All ~100 Recipes - Full Interactive Cookbook
// Created January 2026 for Honduras Living
// Easy to Edit: Just modify this file!

const RECIPES_DATABASE = {
    
    // ============================================
    // BREAKFAST RECIPES (~17 total)
    // ============================================
    breakfast: [
        {
            id: "B001",
            name: "High-Protein Veggie Scramble",
            spicy: false,
            prepTime: "5 min",
            cookTime: "10 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "10 large eggs (Greg: 6 / Reyna: 4)",
                "1 cup bell peppers, diced (mixed colors)",
                "½ cup mushrooms, sliced",
                "¼ cup red onion, diced",
                "2 tbsp olive oil",
                "½ cup shredded cheddar cheese",
                "1 avocado (Greg: ¾ / Reyna: ¼)",
                "½ tsp salt",
                "¼ tsp black pepper",
                "¼ tsp garlic powder"
            ],
            instructions: [
                "Heat 1 tbsp olive oil in large non-stick skillet over medium heat",
                "Add bell peppers, mushrooms, and onion. Sauté 5-7 minutes until tender and lightly browned",
                "In a bowl, whisk all 10 eggs with salt, pepper, and garlic powder until well combined",
                "Add remaining 1 tbsp olive oil to skillet with vegetables",
                "Pour whisked eggs over vegetables",
                "Using a spatula, gently scramble eggs, stirring frequently for 3-4 minutes until just set but still slightly creamy",
                "Remove from heat immediately (eggs will continue cooking)",
                "Sprinkle cheese over top and let melt",
                "Divide into portions: Greg gets larger portion (6 eggs worth), Reyna gets smaller (4 eggs worth)",
                "Top each portion with sliced avocado",
                "Serve immediately while hot"
            ],
            gregMacros: { protein: "38g", carbs: "12g", fat: "24g", calories: 400 },
            reynaMacros: { protein: "25g", carbs: "8g", fat: "14g", calories: 245 }
        },
        
        {
            id: "B002",
            name: "Cajun Scrambled Eggs",
            spicy: true,
            prepTime: "5 min",
            cookTime: "8 min",
            servings: 2,
            cuisine: "Cajun",
            ingredients: [
                "10 large eggs (Greg: 6 / Reyna: 4)",
                "½ cup bell peppers, diced",
                "⅓ cup pepper jack cheese, shredded",
                "2 tbsp olive oil",
                "1 tsp Cajun seasoning",
                "½ tsp cayenne pepper [MILD: use ⅛ tsp]",
                "¼ tsp black pepper",
                "¼ tsp salt"
            ],
            instructions: [
                "Mix Cajun seasoning and cayenne pepper in small bowl (or use MILD amount)",
                "Heat 1 tbsp olive oil in large skillet over medium heat",
                "Add diced bell peppers and sauté 3-4 minutes until softened",
                "In a bowl, whisk all 10 eggs with spice mixture, salt, and black pepper",
                "Add remaining 1 tbsp olive oil to skillet with peppers",
                "Pour eggs over peppers and scramble gently for 3-4 minutes until cooked but still creamy",
                "Remove from heat",
                "Top with pepper jack cheese and let melt",
                "Divide into portions: Greg (6 eggs worth), Reyna (4 eggs worth)",
                "Serve immediately"
            ],
            mildVersion: "Use only ⅛ tsp cayenne instead of ½ tsp. Still flavorful with the Cajun seasoning but much gentler!",
            gregMacros: { protein: "36g", carbs: "10g", fat: "24g", calories: 400 },
            reynaMacros: { protein: "24g", carbs: "8g", fat: "16g", calories: 262 }
        },
        
        {
            id: "B003",
            name: "Mexican Breakfast Bowl",
            spicy: true,
            prepTime: "5 min",
            cookTime: "10 min",
            servings: 2,
            cuisine: "Mexican",
            ingredients: [
                "10 scrambled eggs (Greg: 6 / Reyna: 4)",
                "½ cup black beans, rinsed and drained",
                "¼ cup salsa [MILD: use mild salsa]",
                "½ avocado, diced",
                "2 tbsp fresh cilantro, chopped",
                "1 tsp chili powder [MILD: use ¼ tsp]",
                "½ tsp cumin",
                "2 tbsp olive oil",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Heat olive oil in skillet over medium heat",
                "Add black beans, cumin, and chili powder (or MILD amount). Warm for 2-3 minutes",
                "Scramble eggs in separate pan with salt and pepper",
                "Divide eggs between two bowls (Greg gets larger portion)",
                "Top with warmed black beans",
                "Add salsa (mild or regular), diced avocado, and fresh cilantro",
                "Serve immediately"
            ],
            mildVersion: "Use mild salsa and reduce chili powder to ¼ tsp. The cumin still provides great flavor!",
            gregMacros: { protein: "40g", carbs: "16g", fat: "21g", calories: 400 },
            reynaMacros: { protein: "26g", carbs: "11g", fat: "12g", calories: 262 }
        },
        
        {
            id: "B004",
            name: "Spinach & Feta Egg Cups",
            spicy: false,
            prepTime: "10 min",
            cookTime: "20 min",
            servings: "6 cups (3 per person)",
            cuisine: "Mediterranean",
            ingredients: [
                "12 large eggs",
                "2 cups fresh spinach, chopped",
                "¾ cup feta cheese, crumbled",
                "1 cup cherry tomatoes, halved",
                "¼ cup onion, diced",
                "½ tsp garlic powder",
                "Salt and pepper to taste",
                "Cooking spray"
            ],
            instructions: [
                "Preheat oven to 375°F",
                "Spray 6-cup muffin tin with cooking spray",
                "In large bowl, whisk all 12 eggs",
                "Add spinach, feta, tomatoes, onion, garlic powder, salt, and pepper",
                "Mix well",
                "Divide mixture evenly among 6 muffin cups",
                "Bake 18-20 minutes until set and lightly golden",
                "Let cool 5 minutes before removing from tin",
                "Serve 3 per person (make-ahead option: refrigerate up to 5 days, reheat 30 seconds)"
            ],
            gregMacros: { protein: "36g", carbs: "8g", fat: "23g", calories: 400 },
            reynaMacros: { protein: "36g", carbs: "6g", fat: "18g", calories: 311 }
        },
        
        {
            id: "B005",
            name: "Keto Breakfast Burrito Bowl",
            spicy: true,
            prepTime: "10 min",
            cookTime: "15 min",
            servings: 2,
            cuisine: "Mexican",
            ingredients: [
                "1 cup cauliflower rice",
                "½ lb chorizo (or ground beef) [MILD: use mild ground beef]",
                "10 scrambled eggs (Greg: 6 / Reyna: 4)",
                "½ cup guacamole",
                "¼ cup sour cream",
                "¼ cup shredded cheese",
                "2 tbsp fresh cilantro",
                "1 tbsp olive oil"
            ],
            instructions: [
                "Heat olive oil in skillet, cook chorizo (or ground beef) until browned, about 8 minutes",
                "In separate pan, sauté cauliflower rice for 5 minutes",
                "Scramble eggs in another pan",
                "Divide cauliflower rice between two bowls",
                "Top with cooked meat, scrambled eggs (Greg gets larger portion)",
                "Add guacamole, sour cream, cheese, and cilantro",
                "Serve immediately"
            ],
            mildVersion: "Use mild ground beef instead of spicy chorizo. Still flavorful with the toppings!",
            gregMacros: { protein: "42g", carbs: "8g", fat: "26g", calories: 400 },
            reynaMacros: { protein: "28g", carbs: "8g", fat: "20g", calories: 295 }
        },
        
        {
            id: "B006",
            name: "Protein Oatmeal Bowl",
            spicy: false,
            prepTime: "5 min",
            cookTime: "10 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "1 cup gluten-free oats (Greg: ⅔ cup / Reyna: ⅓ cup)",
                "2 scoops vanilla protein powder (Greg: 1.5 / Reyna: 0.5)",
                "2 cups unsweetened almond milk",
                "1 cup mixed berries",
                "2 tbsp sliced almonds",
                "1 tsp cinnamon",
                "Stevia to taste (optional)"
            ],
            instructions: [
                "Cook oats in almond milk according to package directions (usually 5-8 minutes)",
                "Remove from heat and stir in protein powder until smooth",
                "Add cinnamon and stevia if desired",
                "Divide between two bowls (Greg gets larger portion)",
                "Top with mixed berries and sliced almonds",
                "Serve warm"
            ],
            gregMacros: { protein: "35g", carbs: "40g", fat: "10g", calories: 400 },
            reynaMacros: { protein: "20g", carbs: "23g", fat: "6g", calories: 229 }
        },
        
        {
            id: "B007",
            name: "Greek Yogurt Power Bowl",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 2,
            cuisine: "Greek",
            ingredients: [
                "2 cups plain Greek yogurt (Greg: 1.5 cups / Reyna: 0.5 cup)",
                "1 cup mixed berries (blueberries, strawberries)",
                "2 tbsp almond butter",
                "¼ cup chopped walnuts",
                "1 tbsp chia seeds",
                "1 tsp honey (optional)",
                "Dash of cinnamon"
            ],
            instructions: [
                "Divide Greek yogurt between two bowls (Greg gets larger portion)",
                "Top with mixed berries",
                "Drizzle with almond butter",
                "Sprinkle with walnuts and chia seeds",
                "Add honey if desired and dust with cinnamon",
                "Serve immediately or refrigerate up to 1 day"
            ],
            gregMacros: { protein: "36g", carbs: "24g", fat: "19g", calories: 400 },
            reynaMacros: { protein: "18g", carbs: "16g", fat: "11g", calories: 229 }
        },
        
        {
            id: "B008",
            name: "Smoked Salmon Plate",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "8 oz smoked salmon (Greg: 5 oz / Reyna: 3 oz)",
                "4 hard-boiled eggs",
                "¼ cup cream cheese",
                "1 avocado, sliced",
                "½ cucumber, sliced",
                "2 tbsp capers",
                "1 lemon, cut into wedges",
                "Fresh dill for garnish"
            ],
            instructions: [
                "Arrange smoked salmon on two plates (Greg gets larger portion)",
                "Add 2 hard-boiled eggs per plate",
                "Add dollops of cream cheese",
                "Arrange avocado and cucumber slices",
                "Sprinkle with capers",
                "Garnish with fresh dill",
                "Serve with lemon wedges for squeezing",
                "Perfect cold breakfast or brunch"
            ],
            gregMacros: { protein: "42g", carbs: "9g", fat: "23g", calories: 400 },
            reynaMacros: { protein: "32g", carbs: "8g", fat: "16g", calories: 295 }
        },
        
        {
            id: "B009",
            name: "Southwest Veggie Scramble",
            spicy: true,
            prepTime: "5 min",
            cookTime: "12 min",
            servings: 2,
            cuisine: "Mexican",
            ingredients: [
                "10 large eggs (Greg: 6 / Reyna: 4)",
                "½ cup black beans, rinsed",
                "½ cup bell peppers, diced",
                "¼ cup salsa verde [MILD: use mild salsa]",
                "2 tbsp olive oil",
                "1 tsp cumin",
                "½ tsp chili powder [MILD: use ¼ tsp]",
                "¼ cup fresh cilantro",
                "Salt and pepper"
            ],
            instructions: [
                "Heat 1 tbsp olive oil in skillet over medium heat",
                "Add bell peppers, sauté 3 minutes",
                "Add black beans, cumin, and chili powder (or MILD amount), cook 2 minutes",
                "In bowl, whisk eggs with salt and pepper",
                "Add remaining 1 tbsp olive oil to skillet",
                "Pour eggs over vegetable mixture",
                "Scramble gently for 3-4 minutes until cooked",
                "Divide between plates (Greg gets larger portion)",
                "Top with salsa verde and fresh cilantro",
                "Serve immediately"
            ],
            mildVersion: "Use mild salsa verde and reduce chili powder to ¼ tsp. The cumin provides great flavor!",
            gregMacros: { protein: "38g", carbs: "14g", fat: "23g", calories: 400 },
            reynaMacros: { protein: "25g", carbs: "9g", fat: "14g", calories: 262 }
        },
        
        {
            id: "B010",
            name: "Shakshuka",
            spicy: true,
            prepTime: "10 min",
            cookTime: "20 min",
            servings: 2,
            cuisine: "Middle Eastern",
            ingredients: [
                "1 can (14 oz) crushed tomatoes",
                "8-10 large eggs",
                "1 bell pepper, sliced",
                "1 onion, diced",
                "3 cloves garlic, minced",
                "2 tsp cumin",
                "1 tsp paprika",
                "½ tsp cayenne pepper [MILD: use ⅛ tsp]",
                "2 tbsp olive oil",
                "¼ cup fresh parsley",
                "Salt and pepper"
            ],
            instructions: [
                "Heat olive oil in large skillet over medium heat",
                "Add onion and bell pepper, sauté 5-7 minutes until softened",
                "Add garlic, cumin, paprika, and cayenne (or MILD amount), cook 1 minute",
                "Pour in crushed tomatoes, simmer 8-10 minutes until thickened",
                "Make wells in sauce for eggs",
                "Crack eggs into wells (Greg gets 5-6 eggs, Reyna gets 3-4)",
                "Cover and cook 5-7 minutes until eggs are cooked to preference",
                "Garnish with fresh parsley",
                "Serve directly from skillet"
            ],
            mildVersion: "Reduce cayenne to ⅛ tsp. The cumin and paprika still provide wonderful flavor!",
            gregMacros: { protein: "40g", carbs: "16g", fat: "23g", calories: 400 },
            reynaMacros: { protein: "26g", carbs: "12g", fat: "14g", calories: 278 }
        },
        
        {
            id: "B011",
            name: "Cottage Cheese Protein Bowl",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "2 cups cottage cheese (Greg: 1.5 cups / Reyna: 0.5 cup)",
                "1 cup mixed berries",
                "2 tbsp pumpkin seeds",
                "2 tbsp hemp hearts",
                "1 tbsp chia seeds",
                "Dash of cinnamon",
                "Stevia to taste (optional)"
            ],
            instructions: [
                "Divide cottage cheese between two bowls (Greg gets larger portion)",
                "Top with mixed berries",
                "Sprinkle with pumpkin seeds, hemp hearts, and chia seeds",
                "Dust with cinnamon",
                "Add stevia if desired for sweetness",
                "Serve immediately or refrigerate covered"
            ],
            gregMacros: { protein: "42g", carbs: "20g", fat: "16g", calories: 400 },
            reynaMacros: { protein: "20g", carbs: "12g", fat: "9g", calories: 213 }
        },
        
        {
            id: "B012",
            name: "Green Power Smoothie",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "2 scoops vanilla protein powder (Greg: 1.5 / Reyna: 0.5)",
                "2 cups unsweetened almond milk",
                "2 cups fresh spinach",
                "1 cup frozen mixed berries",
                "2 tbsp ground flaxseed",
                "½ avocado",
                "1 tsp vanilla extract",
                "Ice cubes",
                "Stevia to taste (optional)"
            ],
            instructions: [
                "Add all ingredients to high-speed blender",
                "Blend on high for 60-90 seconds until completely smooth",
                "Taste and adjust sweetness with stevia if desired",
                "Pour into two glasses (Greg gets larger portion - about ⅔)",
                "Serve immediately",
                "Note: Can prep ingredients in bags and freeze for quick morning smoothies"
            ],
            gregMacros: { protein: "35g", carbs: "24g", fat: "18g", calories: 400 },
            reynaMacros: { protein: "16g", carbs: "9g", fat: "6g", calories: 147 }
        },
        
        {
            id: "B013",
            name: "Baleadas Caseras (Honduran Breakfast)",
            spicy: false,
            prepTime: "15 min",
            cookTime: "10 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "4 gluten-free flour tortillas (8-inch)",
                "1 cup refried red beans (homemade or canned)",
                "10 scrambled eggs (Greg: 6 / Reyna: 4)",
                "½ cup queso fresco, crumbled",
                "1 avocado, sliced",
                "¼ cup Honduran crema (or sour cream)",
                "2 tbsp olive oil",
                "Salt to taste"
            ],
            instructions: [
                "Warm refried beans in small pot over low heat",
                "Scramble eggs with salt in olive oil until just set",
                "Heat tortillas in dry skillet 30 seconds per side until warm and pliable",
                "For each baleada: spread beans on warm tortilla",
                "Top with scrambled eggs (Greg's portions larger)",
                "Add crumbled queso fresco, avocado slices, and drizzle of crema",
                "Fold in half and serve immediately",
                "Honduras note: This is the national breakfast - simple, filling, and delicious!"
            ],
            hondurasNotes: "Queso fresco and crema are available in Valle de Ángeles markets. Can substitute with feta and sour cream.",
            gregMacros: { protein: "42g", carbs: "24g", fat: "21g", calories: 400 },
            reynaMacros: { protein: "28g", carbs: "27g", fat: "18g", calories: 360 }
        },
        
        {
            id: "B014",
            name: "Desayuno Típico Hondureño (Traditional Honduran Breakfast)",
            spicy: false,
            prepTime: "10 min",
            cookTime: "15 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "10 scrambled eggs (Greg: 6 / Reyna: 4)",
                "1 cup refried beans",
                "2 plantains, sliced (½ per person, portion controlled)",
                "½ cup queso fresco, crumbled",
                "¼ cup Honduran crema",
                "2 tbsp coconut oil",
                "Salt to taste",
                "Fresh lime wedges"
            ],
            instructions: [
                "Heat refried beans in small pot",
                "In large skillet, heat 1 tbsp coconut oil over medium heat",
                "Cook plantain slices 2-3 minutes per side until golden (not too crispy)",
                "Remove plantains and set aside",
                "Scramble eggs in remaining coconut oil with salt",
                "Plate eggs (Greg gets larger portion), refried beans, and grilled plantains",
                "Top with crumbled queso fresco and drizzle of crema",
                "Serve with lime wedges",
                "Honduras note: This is what locals eat daily - hearty and satisfying!"
            ],
            hondurasNotes: "All ingredients readily available in Valle de Ángeles. Plantains provide natural sweetness and potassium.",
            gregMacros: { protein: "40g", carbs: "28g", fat: "18g", calories: 400 },
            reynaMacros: { protein: "26g", carbs: "29g", fat: "16g", calories: 344 }
        },
        
        {
            id: "B015",
            name: "Licuado de Plátano (Honduran Banana-Oat Smoothie)",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "1 ripe plantain (not overly sweet)",
                "⅓ cup gluten-free oats",
                "2 scoops vanilla protein powder (Greg: 1.5 / Reyna: 0.5)",
                "2 cups unsweetened almond milk",
                "1 tsp cinnamon",
                "½ tsp vanilla extract",
                "Ice cubes",
                "Stevia to taste (optional)"
            ],
            instructions: [
                "Peel and slice plantain",
                "Add all ingredients to high-speed blender",
                "Blend on high for 90 seconds until completely smooth and creamy",
                "Taste and adjust sweetness with stevia if desired",
                "Pour into two glasses (Greg gets larger portion - about ⅔)",
                "Serve immediately with a straw",
                "Honduras note: Traditional morning drink, adapted with protein for sustained energy"
            ],
            hondurasNotes: "Plantains are everywhere in Honduras. Use slightly ripe (yellow with some brown spots) for natural sweetness without too much sugar.",
            gregMacros: { protein: "35g", carbs: "41g", fat: "10g", calories: 400 },
            reynaMacros: { protein: "18g", carbs: "19g", fat: "4g", calories: 180 }
        },
        
        {
            id: "B016",
            name: "Green Machine Smoothie Bowl",
            spicy: false,
            prepTime: "10 min",
            cookTime: "0 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "2 scoops vanilla protein powder (Greg: 1.5 / Reyna: 0.5)",
                "1 cup unsweetened almond milk",
                "2 cups fresh spinach",
                "1 frozen banana",
                "½ cup frozen mango chunks",
                "1 tbsp almond butter",
                "1 tbsp chia seeds",
                "Toppings: sliced almonds, coconut flakes, hemp hearts, fresh berries"
            ],
            instructions: [
                "Add almond milk, spinach, protein powder, frozen banana, mango, and almond butter to blender",
                "Blend until thick and creamy (should be spoonable, not drinkable)",
                "If too thick, add small amounts of almond milk; if too thin, add ice",
                "Divide between two bowls (Greg gets larger portion)",
                "Top with chia seeds, sliced almonds, coconut flakes, hemp hearts, and fresh berries",
                "Serve immediately with a spoon"
            ],
            gregMacros: { protein: "35g", carbs: "32g", fat: "15g", calories: 400 },
            reynaMacros: { protein: "20g", carbs: "19g", fat: "8g", calories: 229 }
        },
        
        {
            id: "B017",
            name: "Salmon and Veggie Scramble",
            spicy: false,
            prepTime: "5 min",
            cookTime: "12 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "10 large eggs (Greg: 6 / Reyna: 4)",
                "6 oz smoked salmon, chopped (Greg: 4 oz / Reyna: 2 oz)",
                "1 cup baby spinach",
                "½ cup cherry tomatoes, halved",
                "¼ cup red onion, diced",
                "2 tbsp olive oil",
                "2 tbsp fresh dill, chopped",
                "Salt and pepper to taste",
                "Lemon wedges for serving"
            ],
            instructions: [
                "Heat 1 tbsp olive oil in large skillet over medium heat",
                "Add red onion and cherry tomatoes, sauté 3-4 minutes until softened",
                "Add spinach and cook until wilted, about 1 minute",
                "In bowl, whisk eggs with salt, pepper, and fresh dill",
                "Add remaining 1 tbsp olive oil to skillet",
                "Pour eggs over vegetables and add chopped smoked salmon",
                "Scramble gently for 3-4 minutes until eggs are just set but still creamy",
                "Divide between plates (Greg gets larger portion)",
                "Serve immediately with lemon wedges"
            ],
            gregMacros: { protein: "42g", carbs: "8g", fat: "24g", calories: 400 },
            reynaMacros: { protein: "30g", carbs: "4g", fat: "14g", calories: 262 }
        }
    ],
    
    // This is part 1 of the complete database
    // Continuing with lunch, dinner, snacks, and extras in next sections...
    
    // ============================================
    // LUNCH RECIPES (~19 total)
    // ============================================
    lunch: [
        {
            id: "L001",
            name: "Mediterranean Chicken Bowl",
            spicy: false,
            prepTime: "10 min",
            cookTime: "15 min",
            servings: 2,
            cuisine: "Mediterranean",
            ingredients: [
                "12 oz chicken breast (Greg: 8 oz / Reyna: 4 oz)",
                "3 cups mixed greens",
                "½ cup Kalamata olives, pitted",
                "½ cup feta cheese, crumbled",
                "1 cup chickpeas, rinsed",
                "1 cup cucumber, diced",
                "½ cup cherry tomatoes, halved",
                "¼ red onion, sliced thin",
                "3 tbsp olive oil",
                "2 tbsp lemon juice",
                "1 tsp dried oregano",
                "Salt and pepper"
            ],
            instructions: [
                "Season chicken with oregano, salt, and pepper",
                "Heat 1 tbsp olive oil in skillet over medium-high heat",
                "Cook chicken 6-7 minutes per side until internal temp reaches 165°F",
                "Let rest 5 minutes, then slice",
                "In large bowl, toss mixed greens with 2 tbsp olive oil and lemon juice",
                "Divide greens between two bowls",
                "Top with sliced chicken (Greg gets larger portion), chickpeas, olives, feta, cucumber, tomatoes, and red onion",
                "Drizzle with any remaining dressing",
                "Serve immediately"
            ],
            gregMacros: { protein: "48g", carbs: "19g", fat: "22g", calories: 500 },
            reynaMacros: { protein: "32g", carbs: "14g", fat: "14g", calories: 311 }
        },
        
        {
            id: "L002",
            name: "Beef Taco Bowl",
            spicy: true,
            prepTime: "10 min",
            cookTime: "12 min",
            servings: 2,
            cuisine: "Mexican",
            ingredients: [
                "1 lb ground beef (Greg: 10 oz / Reyna: 6 oz)",
                "½ cup black beans, rinsed",
                "3 cups romaine lettuce, shredded",
                "½ cup shredded cheese",
                "1 avocado, diced",
                "½ cup salsa [MILD: use mild salsa]",
                "¼ cup sour cream",
                "2 tbsp taco seasoning [MILD: use 1 tbsp]",
                "1 tbsp olive oil",
                "Fresh cilantro for garnish"
            ],
            instructions: [
                "Heat olive oil in large skillet over medium-high heat",
                "Add ground beef, break up with spatula",
                "Cook 8-10 minutes until browned and cooked through",
                "Drain excess fat if needed",
                "Add taco seasoning (regular or MILD amount) and black beans",
                "Cook 2 minutes, stirring to combine",
                "Divide lettuce between two bowls",
                "Top with seasoned beef mixture (Greg gets larger portion)",
                "Add shredded cheese, diced avocado, salsa, and sour cream",
                "Garnish with fresh cilantro",
                "Serve immediately"
            ],
            mildVersion: "Use mild salsa and reduce taco seasoning to 1 tbsp. Still very flavorful!",
            gregMacros: { protein: "48g", carbs: "13g", fat: "28g", calories: 500 },
            reynaMacros: { protein: "38g", carbs: "12g", fat: "20g", calories: 360 }
        },
        
        {
            id: "L003",
            name: "Cobb Salad",
            spicy: false,
            prepTime: "15 min",
            cookTime: "10 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "12 oz grilled chicken breast, diced (Greg: 8 oz / Reyna: 4 oz)",
                "4 hard-boiled eggs, quartered",
                "4 strips bacon, cooked and crumbled",
                "3 cups romaine lettuce, chopped",
                "1 avocado, diced",
                "½ cup cherry tomatoes, halved",
                "½ cup blue cheese, crumbled",
                "Ranch dressing (see Extras section)",
                "Salt and pepper"
            ],
            instructions: [
                "Cook bacon until crispy, crumble when cool",
                "Grill or pan-sear chicken with salt and pepper, dice when cooked",
                "Arrange lettuce in two large bowls",
                "Top with rows of: chicken (Greg gets more), hard-boiled eggs, bacon, avocado, tomatoes, and blue cheese",
                "Drizzle with ranch dressing",
                "Season with additional salt and pepper if desired",
                "Serve immediately"
            ],
            gregMacros: { protein: "48g", carbs: "10g", fat: "30g", calories: 500 },
            reynaMacros: { protein: "38g", carbs: "9g", fat: "22g", calories: 360 }
        },
        
        {
            id: "L004",
            name: "Turkey Stuffed Peppers",
            spicy: true,
            prepTime: "15 min",
            cookTime: "30 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "4 large bell peppers (any color), halved and seeded",
                "1 lb ground turkey",
                "1 cup cauliflower rice",
                "½ cup marinara sauce",
                "½ cup shredded mozzarella",
                "1 onion, diced",
                "2 cloves garlic, minced",
                "1 tsp Italian seasoning",
                "½ tsp red pepper flakes [MILD: use ¼ tsp]",
                "2 tbsp olive oil",
                "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 375°F",
                "Heat olive oil in large skillet over medium heat",
                "Cook onion and garlic 3 minutes until softened",
                "Add ground turkey, break up and cook 8-10 minutes until browned",
                "Add cauliflower rice, marinara, Italian seasoning, and red pepper flakes (or MILD amount)",
                "Cook 3 minutes, season with salt and pepper",
                "Arrange bell pepper halves in baking dish",
                "Fill each with turkey mixture (Greg gets 3 halves, Reyna gets 1 half)",
                "Top with mozzarella cheese",
                "Bake 20-25 minutes until peppers are tender and cheese is melted",
                "Serve hot"
            ],
            mildVersion: "Reduce red pepper flakes to ¼ tsp. The Italian seasoning provides plenty of flavor!",
            gregMacros: { protein: "48g", carbs: "20g", fat: "22g", calories: 500 },
            reynaMacros: { protein: "28g", carbs: "12g", fat: "11g", calories: 262 }
        },
        
        {
            id: "L005",
            name: "Buddha Bowl",
            spicy: false,
            prepTime: "15 min",
            cookTime: "25 min",
            servings: 2,
            cuisine: "International",
            ingredients: [
                "1 cup quinoa (Greg: ⅔ cup / Reyna: ⅓ cup)",
                "8 oz chicken breast or tofu, cubed (Greg: 6 oz / Reyna: 2 oz)",
                "1 cup roasted sweet potato, cubed",
                "1 cup roasted broccoli",
                "½ cup shredded red cabbage",
                "1 avocado, sliced",
                "2 tbsp tahini",
                "2 tbsp lemon juice",
                "1 tbsp olive oil",
                "Sesame seeds for garnish"
            ],
            instructions: [
                "Cook quinoa according to package directions",
                "Preheat oven to 400°F",
                "Toss sweet potato and broccoli with olive oil, roast 20-25 minutes",
                "Cook chicken or tofu in skillet until done",
                "Make tahini dressing: whisk tahini, lemon juice, and 2-3 tbsp water until smooth",
                "Divide quinoa between two bowls (Greg gets larger portion)",
                "Arrange protein (Greg gets more), roasted vegetables, cabbage, and avocado on top",
                "Drizzle with tahini dressing",
                "Sprinkle with sesame seeds",
                "Serve warm"
            ],
            gregMacros: { protein: "42g", carbs: "42g", fat: "19g", calories: 500 },
            reynaMacros: { protein: "24g", carbs: "27g", fat: "12g", calories: 311 }
        },
        
        {
            id: "L006",
            name: "Korean BBQ Beef Bowl",
            spicy: true,
            prepTime: "10 min + marinade",
            cookTime: "10 min",
            servings: 2,
            cuisine: "Korean",
            ingredients: [
                "1 lb beef sirloin, thinly sliced (Greg: 10 oz / Reyna: 6 oz)",
                "2 cups cauliflower rice",
                "1 cup kimchi",
                "2 soft-boiled eggs",
                "½ cup cucumber, sliced",
                "3 tbsp coconut aminos (or soy sauce)",
                "2 tbsp sesame oil",
                "1 tbsp rice vinegar",
                "2 cloves garlic, minced",
                "1 tsp ginger, grated",
                "1 tsp red pepper flakes [MILD: use ¼ tsp]",
                "Sesame seeds and green onions for garnish"
            ],
            instructions: [
                "Marinate beef in coconut aminos, 1 tbsp sesame oil, garlic, ginger, and red pepper flakes (or MILD amount) for 30 minutes",
                "Heat remaining sesame oil in large skillet over high heat",
                "Cook beef 2-3 minutes per side until caramelized",
                "In separate pan, sauté cauliflower rice for 5 minutes",
                "Divide cauliflower rice between two bowls",
                "Top with cooked beef (Greg gets larger portion), kimchi, cucumber, and soft-boiled egg",
                "Garnish with sesame seeds and sliced green onions",
                "Serve immediately"
            ],
            mildVersion: "Reduce red pepper flakes to ¼ tsp and use mild kimchi if available. Still delicious!",
            gregMacros: { protein: "48g", carbs: "14g", fat: "25g", calories: 500 },
            reynaMacros: { protein: "36g", carbs: "11g", fat: "16g", calories: 311 }
        },
        
        {
            id: "L007",
            name: "Lemon-Herb Grilled Chicken with Greek Salad",
            spicy: false,
            prepTime: "10 min + marinade",
            cookTime: "15 min",
            servings: 2,
            cuisine: "Greek",
            ingredients: [
                "12 oz chicken breast (Greg: 8 oz / Reyna: 4 oz)",
                "3 cups mixed greens",
                "1 cucumber, diced",
                "1 cup cherry tomatoes, halved",
                "½ red onion, sliced",
                "½ cup Kalamata olives",
                "½ cup feta cheese, crumbled",
                "3 tbsp olive oil",
                "2 tbsp lemon juice",
                "1 tbsp fresh oregano (or 1 tsp dried)",
                "2 cloves garlic, minced",
                "Salt and pepper"
            ],
            instructions: [
                "Marinate chicken in 1 tbsp olive oil, lemon juice, oregano, garlic, salt, and pepper for 30 minutes",
                "Heat grill or grill pan over medium-high heat",
                "Grill chicken 6-7 minutes per side until internal temp reaches 165°F",
                "Let rest 5 minutes, then slice",
                "In large bowl, toss greens, cucumber, tomatoes, onion, olives with remaining 2 tbsp olive oil",
                "Divide salad between two plates",
                "Top with sliced chicken (Greg gets larger portion) and crumbled feta",
                "Serve immediately"
            ],
            gregMacros: { protein: "48g", carbs: "14g", fat: "24g", calories: 500 },
            reynaMacros: { protein: "34g", carbs: "11g", fat: "14g", calories: 295 }
        },
        
        {
            id: "L008",
            name: "Thai Basil Chicken Lettuce Cups",
            spicy: true,
            prepTime: "10 min",
            cookTime: "12 min",
            servings: 2,
            cuisine: "Thai",
            ingredients: [
                "1 lb ground chicken (Greg: 10 oz / Reyna: 6 oz)",
                "1 cup Thai basil leaves (or regular basil)",
                "3 cloves garlic, minced",
                "2 Thai chilies, minced [MILD: use ½ chili]",
                "2 tbsp coconut aminos (or soy sauce)",
                "1 tbsp fish sauce",
                "1 tbsp lime juice",
                "1 tsp coconut sugar (or stevia)",
                "2 tbsp coconut oil",
                "12 butter lettuce leaves",
                "Lime wedges for serving"
            ],
            instructions: [
                "Heat coconut oil in large skillet or wok over high heat",
                "Add garlic and chilies (or MILD amount), stir-fry 30 seconds",
                "Add ground chicken, break up and cook 8-10 minutes until browned",
                "Add coconut aminos, fish sauce, lime juice, and coconut sugar",
                "Cook 2 minutes, stirring",
                "Remove from heat and stir in Thai basil until wilted",
                "Arrange lettuce leaves on plates",
                "Spoon chicken mixture into lettuce cups (Greg gets more)",
                "Serve with lime wedges"
            ],
            mildVersion: "Use only ½ Thai chili. The basil and garlic provide amazing flavor!",
            gregMacros: { protein: "48g", carbs: "12g", fat: "23g", calories: 500 },
            reynaMacros: { protein: "34g", carbs: "8g", fat: "12g", calories: 262 }
        },
        
        {
            id: "L009",
            name: "Chimichurri Steak Salad",
            spicy: false,
            prepTime: "15 min",
            cookTime: "12 min",
            servings: 2,
            cuisine: "Argentinian",
            ingredients: [
                "12 oz flank steak or sirloin (Greg: 8 oz / Reyna: 4 oz)",
                "3 cups arugula",
                "1 cup cherry tomatoes, halved",
                "½ red onion, sliced thin",
                "1 cup fresh parsley, chopped",
                "3 cloves garlic, minced",
                "¼ cup red wine vinegar",
                "½ cup olive oil",
                "1 tsp dried oregano",
                "½ tsp red pepper flakes (optional)",
                "Salt and pepper"
            ],
            instructions: [
                "Make chimichurri: combine parsley, garlic, vinegar, ¼ cup olive oil, oregano, red pepper flakes, salt, and pepper",
                "Season steak with salt and pepper",
                "Heat remaining ¼ cup olive oil in cast iron skillet over high heat",
                "Sear steak 4-5 minutes per side for medium-rare",
                "Let rest 5 minutes, then slice thin against the grain",
                "Divide arugula between two plates",
                "Top with sliced steak (Greg gets larger portion), tomatoes, and red onion",
                "Drizzle generously with chimichurri sauce",
                "Serve immediately"
            ],
            gregMacros: { protein: "48g", carbs: "10g", fat: "28g", calories: 500 },
            reynaMacros: { protein: "32g", carbs: "8g", fat: "18g", calories: 311 }
        },
        
        {
            id: "L010",
            name: "Indian Spiced Chicken Bowl",
            spicy: true,
            prepTime: "10 min + marinade",
            cookTime: "15 min",
            servings: 2,
            cuisine: "Indian",
            ingredients: [
                "12 oz chicken breast, cubed (Greg: 8 oz / Reyna: 4 oz)",
                "2 cups cauliflower rice",
                "½ cup plain Greek yogurt",
                "2 tbsp tandoori spice blend",
                "1 tsp garam masala",
                "½ tsp cayenne [MILD: use ⅛ tsp]",
                "2 tbsp olive oil",
                "½ cucumber, diced",
                "Fresh cilantro",
                "Lemon wedges"
            ],
            instructions: [
                "Mix yogurt, 1 tbsp tandoori spice, garam masala, and cayenne (or MILD amount)",
                "Marinate chicken in yogurt mixture for 30 minutes",
                "Heat 1 tbsp olive oil in large skillet over medium-high heat",
                "Cook marinated chicken 12-15 minutes until cooked through and lightly charred",
                "In separate pan, sauté cauliflower rice with remaining spices for 5 minutes",
                "Divide cauliflower rice between two bowls",
                "Top with cooked chicken (Greg gets larger portion), diced cucumber, and fresh cilantro",
                "Serve with lemon wedges and extra yogurt (raita)"
            ],
            mildVersion: "Reduce cayenne to ⅛ tsp. The tandoori and garam masala still provide wonderful complex flavor!",
            gregMacros: { protein: "48g", carbs: "17g", fat: "19g", calories: 500 },
            reynaMacros: { protein: "34g", carbs: "11g", fat: "9g", calories: 262 }
        },
        
        {
            id: "L011",
            name: "Pesto Chicken Zucchini Noodle Bowl",
            spicy: false,
            prepTime: "10 min",
            cookTime: "12 min",
            servings: 2,
            cuisine: "Italian",
            ingredients: [
                "12 oz chicken breast (Greg: 8 oz / Reyna: 4 oz)",
                "3 large zucchini, spiralized",
                "½ cup basil pesto (see Extras section)",
                "½ cup cherry tomatoes, halved",
                "¼ cup pine nuts, toasted",
                "¼ cup Parmesan cheese, grated",
                "2 tbsp olive oil",
                "Salt and pepper"
            ],
            instructions: [
                "Season chicken with salt and pepper",
                "Heat 1 tbsp olive oil in skillet over medium-high heat",
                "Cook chicken 6-7 minutes per side until done, slice when cooked",
                "In large pan, heat remaining olive oil over medium heat",
                "Add zucchini noodles, sauté 3-4 minutes until just tender (not mushy)",
                "Toss zucchini noodles with pesto",
                "Divide noodles between two bowls",
                "Top with sliced chicken (Greg gets larger portion), cherry tomatoes, pine nuts, and Parmesan",
                "Serve immediately"
            ],
            gregMacros: { protein: "48g", carbs: "12g", fat: "25g", calories: 500 },
            reynaMacros: { protein: "36g", carbs: "9g", fat: "16g", calories: 311 }
        },
        
        {
            id: "L012",
            name: "Moroccan Spiced Lamb Bowl",
            spicy: true,
            prepTime: "15 min",
            cookTime: "15 min",
            servings: 2,
            cuisine: "Moroccan",
            ingredients: [
                "1 lb ground lamb (Greg: 10 oz / Reyna: 6 oz)",
                "2 cups cauliflower couscous",
                "1 tsp cumin",
                "1 tsp paprika",
                "½ tsp cinnamon",
                "½ tsp cayenne [MILD: use ⅛ tsp]",
                "½ cup plain Greek yogurt",
                "2 tbsp harissa paste [MILD: use 1 tsp]",
                "½ cup cucumber, diced",
                "¼ cup fresh mint",
                "2 tbsp olive oil"
            ],
            instructions: [
                "Heat 1 tbsp olive oil in large skillet over medium-high heat",
                "Add ground lamb, break up and cook with cumin, paprika, cinnamon, and cayenne (or MILD amounts)",
                "Cook 10-12 minutes until browned and cooked through",
                "In separate pan, sauté cauliflower couscous for 5 minutes",
                "Mix yogurt with harissa paste (or MILD amount)",
                "Divide cauliflower couscous between two bowls",
                "Top with spiced lamb (Greg gets larger portion)",
                "Drizzle with harissa yogurt, top with cucumber and fresh mint",
                "Serve immediately"
            ],
            mildVersion: "Reduce cayenne to ⅛ tsp and harissa to 1 tsp. The cumin and cinnamon provide wonderful warmth!",
            gregMacros: { protein: "48g", carbs: "11g", fat: "27g", calories: 500 },
            reynaMacros: { protein: "36g", carbs: "9g", fat: "18g", calories: 328 }
        },
        
        {
            id: "L013",
            name: "Buffalo Chicken Salad",
            spicy: true,
            prepTime: "10 min",
            cookTime: "15 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "12 oz chicken breast, cubed (Greg: 8 oz / Reyna: 4 oz)",
                "3 cups romaine lettuce, chopped",
                "½ cup buffalo sauce [MILD: use mild buffalo sauce]",
                "½ cup celery, sliced",
                "½ cup carrots, shredded",
                "½ cup blue cheese, crumbled",
                "Ranch dressing (see Extras section)",
                "2 tbsp olive oil"
            ],
            instructions: [
                "Heat olive oil in skillet over medium-high heat",
                "Cook chicken cubes 12-15 minutes until cooked through",
                "Toss cooked chicken with buffalo sauce (regular or MILD)",
                "Divide lettuce between two bowls",
                "Top with buffalo chicken (Greg gets larger portion), celery, carrots, and blue cheese",
                "Drizzle with ranch dressing",
                "Serve immediately"
            ],
            mildVersion: "Use mild buffalo sauce. The blue cheese and ranch still provide great flavor!",
            gregMacros: { protein: "48g", carbs: "10g", fat: "24g", calories: 500 },
            reynaMacros: { protein: "36g", carbs: "8g", fat: "14g", calories: 295 }
        },
        
        {
            id: "L014",
            name: "Sopa de Caracol (Honduran Conch Soup)",
            spicy: true,
            prepTime: "20 min",
            cookTime: "40 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "1 lb seafood mix (shrimp, fish, or conch if available)",
                "1 can (14 oz) coconut milk",
                "2 cups fish or vegetable stock",
                "1 yuca, peeled and cubed (portion controlled)",
                "1 plantain, sliced",
                "1 bell pepper, diced",
                "1 onion, diced",
                "3 cloves garlic, minced",
                "2 tbsp fresh cilantro, chopped",
                "2 limes, juiced",
                "2 tbsp coconut oil",
                "1 tsp cumin",
                "½ tsp cayenne [MILD: use ¼ tsp]",
                "Salt and pepper"
            ],
            instructions: [
                "Heat coconut oil in large pot over medium heat",
                "Sauté onion, bell pepper, and garlic 5 minutes until softened",
                "Add cumin and cayenne (or MILD amount), cook 1 minute",
                "Add coconut milk, stock, yuca, and plantain",
                "Simmer 25-30 minutes until yuca is tender",
                "Add seafood, cook 8-10 minutes until cooked through",
                "Stir in lime juice and cilantro",
                "Season with salt and pepper",
                "Divide into bowls and serve hot",
                "Honduras note: This is an iconic coastal dish - hearty and warming!"
            ],
            hondurasNotes: "Fresh seafood is available on trips to La Ceiba or Roatán. Yuca and plantains are everywhere in Valle de Ángeles.",
            mildVersion: "Reduce cayenne to ¼ tsp. The coconut and lime provide plenty of flavor!",
            gregMacros: { protein: "42g", carbs: "34g", fat: "20g", calories: 500 },
            reynaMacros: { protein: "42g", carbs: "31g", fat: "18g", calories: 426 }
        },
        
        {
            id: "L015",
            name: "Pollo Guisado (Honduran Stewed Chicken)",
            spicy: false,
            prepTime: "15 min",
            cookTime: "35 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "1.5 lbs chicken thighs (bone-in for flavor)",
                "1 can (14 oz) crushed tomatoes",
                "1 bell pepper, diced",
                "1 onion, diced",
                "3 cloves garlic, minced",
                "2 cups cauliflower rice",
                "1 tbsp tomato paste",
                "1 tsp cumin",
                "1 tsp oregano",
                "2 tbsp olive oil",
                "½ cup fresh cilantro",
                "Salt and pepper"
            ],
            instructions: [
                "Season chicken with salt, pepper, cumin, and oregano",
                "Heat olive oil in large pot or Dutch oven over medium-high heat",
                "Brown chicken on all sides, about 8 minutes total, remove and set aside",
                "In same pot, sauté onion, bell pepper, and garlic 5 minutes",
                "Add tomato paste, cook 1 minute",
                "Add crushed tomatoes and browned chicken",
                "Cover and simmer 25-30 minutes until chicken is tender",
                "Meanwhile, prepare cauliflower rice",
                "Serve chicken and sauce over cauliflower rice",
                "Garnish with fresh cilantro",
                "Honduras note: Sunday family meal - traditionally served with rice"
            ],
            hondurasNotes: "This is a staple Honduran dish. All ingredients available in Valle de Ángeles markets.",
            gregMacros: { protein: "48g", carbs: "17g", fat: "26g", calories: 500 },
            reynaMacros: { protein: "48g", carbs: "14g", fat: "24g", calories: 426 }
        },
        
        {
            id: "L016",
            name: "Ensalada de Repollo (Honduran Cabbage Slaw)",
            spicy: false,
            prepTime: "15 min",
            cookTime: "0 min",
            servings: "4-6 as side dish",
            cuisine: "Honduran",
            ingredients: [
                "4 cups green cabbage, shredded",
                "1 cup carrots, shredded",
                "½ red onion, sliced thin",
                "¼ cup fresh cilantro, chopped",
                "3 tbsp lime juice",
                "2 tbsp white vinegar",
                "1 tbsp olive oil",
                "½ tsp salt",
                "¼ tsp black pepper"
            ],
            instructions: [
                "In large bowl, combine shredded cabbage, carrots, red onion, and cilantro",
                "In small bowl, whisk together lime juice, vinegar, olive oil, salt, and pepper",
                "Pour dressing over cabbage mixture",
                "Toss well to coat everything evenly",
                "Let sit 15 minutes for flavors to meld (or refrigerate up to 3 days)",
                "Serve as a side dish with any Honduran meal",
                "Honduras note: This accompanies EVERY meal - fresh, crunchy, and refreshing!"
            ],
            hondurasNotes: "Essential side dish. Cabbage, carrots, and limes are abundant and cheap in Honduras.",
            gregMacros: { protein: "40g", carbs: "56g", fat: "28g", calories: 500 },
            reynaMacros: { protein: "2g", carbs: "6g", fat: "3g", calories: 57 }
        },
        
        {
            id: "L017",
            name: "Carne Asada Hondureña (Honduran Grilled Beef)",
            spicy: false,
            prepTime: "10 min + marinade",
            cookTime: "15 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "1.5 lbs thin-sliced beef (Greg: 10 oz / Reyna: 6 oz)",
                "3 cloves garlic, minced",
                "2 tbsp lime juice",
                "2 tbsp orange juice",
                "2 tbsp olive oil",
                "1 tsp cumin",
                "½ tsp black pepper",
                "Salt to taste",
                "For chimol: 2 tomatoes diced, ½ onion diced, cilantro, lime"
            ],
            instructions: [
                "Make marinade: combine garlic, lime juice, orange juice, olive oil, cumin, pepper, and salt",
                "Marinate beef 2-4 hours (or overnight)",
                "Make chimol: combine diced tomatoes, onion, cilantro, lime juice, salt",
                "Heat grill or grill pan over high heat",
                "Grill beef 2-3 minutes per side until charred outside, juicy inside",
                "Let rest 5 minutes",
                "Serve with chimol, ensalada de repollo, and grilled vegetables",
                "Honduras note: Popular street food - simple and incredibly flavorful!"
            ],
            hondurasNotes: "Beef is widely available. Chimol (fresh salsa) is on every Honduran table.",
            gregMacros: { protein: "48g", carbs: "8g", fat: "25g", calories: 500 },
            reynaMacros: { protein: "38g", carbs: "4g", fat: "14g", calories: 278 }
        },
        
        {
            id: "L018",
            name: "Tuna and White Bean Lettuce Wrap",
            spicy: false,
            prepTime: "10 min",
            cookTime: "0 min",
            servings: 2,
            cuisine: "Mediterranean",
            ingredients: [
                "2 cans (5 oz each) tuna in water, drained",
                "1 can (15 oz) white beans (cannellini), rinsed",
                "½ cup cherry tomatoes, halved",
                "¼ red onion, diced",
                "2 tbsp olive oil",
                "1 tbsp lemon juice",
                "2 tbsp fresh parsley, chopped",
                "12 butter lettuce leaves",
                "Salt and pepper"
            ],
            instructions: [
                "In medium bowl, combine tuna, white beans, tomatoes, and red onion",
                "Drizzle with olive oil and lemon juice",
                "Add parsley, salt, and pepper, toss gently",
                "Arrange lettuce leaves on plates",
                "Spoon tuna mixture into lettuce cups",
                "Serve immediately"
            ],
            gregMacros: { protein: "42g", carbs: "30g", fat: "17g", calories: 500 },
            reynaMacros: { protein: "42g", carbs: "19g", fat: "11g", calories: 328 }
        },
        
        {
            id: "L019",
            name: "Chickpea and Quinoa Power Bowl",
            spicy: false,
            prepTime: "10 min",
            cookTime: "20 min",
            servings: 2,
            cuisine: "Mediterranean",
            ingredients: [
                "1 cup quinoa (Greg: ⅔ cup / Reyna: ⅓ cup)",
                "1 can (15 oz) chickpeas, rinsed",
                "2 cups mixed greens",
                "1 cup roasted vegetables (bell peppers, zucchini, eggplant)",
                "¼ cup tahini",
                "2 tbsp lemon juice",
                "2 cloves garlic, minced",
                "¼ cup fresh parsley",
                "2 tbsp olive oil",
                "Salt and pepper"
            ],
            instructions: [
                "Cook quinoa according to package directions",
                "Toss vegetables with 1 tbsp olive oil, roast at 400°F for 20 min",
                "Make tahini dressing: whisk tahini, lemon juice, garlic, remaining olive oil, 2-3 tbsp water, salt",
                "Divide quinoa between two bowls (Greg gets larger portion)",
                "Top with chickpeas, roasted vegetables, and mixed greens",
                "Drizzle with tahini dressing",
                "Garnish with fresh parsley",
                "Serve warm or at room temperature"
            ],
            gregMacros: { protein: "40g", carbs: "51g", fat: "21g", calories: 500 },
            reynaMacros: { protein: "16g", carbs: "33g", fat: "12g", calories: 295 }
        }
    ],
    // ============================================
    // DINNER RECIPES (~25 total)
    // ============================================
    dinner: [
        {
            id: "D001",
            name: "Grilled Salmon with Roasted Vegetables",
            spicy: false,
            prepTime: "10 min",
            cookTime: "20 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "12 oz wild-caught salmon (Greg: 8 oz / Reyna: 4 oz)",
                "2 cups broccoli florets",
                "1 cup Brussels sprouts, halved",
                "1 bell pepper, sliced",
                "½ cup quinoa (optional, Greg portion)",
                "3 tbsp olive oil",
                "2 lemons (juice and zest)",
                "2 cloves garlic, minced",
                "1 tsp dried dill",
                "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 400°F",
                "Toss vegetables with 2 tbsp olive oil, salt, and pepper",
                "Spread on baking sheet, roast 15-20 minutes until tender and lightly charred",
                "Season salmon with salt, pepper, dill, garlic, lemon zest",
                "Heat remaining 1 tbsp olive oil in oven-safe skillet over medium-high heat",
                "Sear salmon skin-side down 3-4 minutes",
                "Flip and transfer skillet to oven for 6-8 minutes until cooked through",
                "Cook quinoa if desired (optional for Greg)",
                "Plate salmon (Greg gets larger portion) with roasted vegetables",
                "Drizzle with lemon juice",
                "Serve immediately"
            ],
            gregMacros: { protein: "48g", carbs: "26g", fat: "31g", calories: 600 },
            reynaMacros: { protein: "26g", carbs: "14g", fat: "12g", calories: 278 }
        },
        
        {
            id: "D002",
            name: "Chicken Fajita Bowl",
            spicy: true,
            prepTime: "15 min",
            cookTime: "15 min",
            servings: 2,
            cuisine: "Mexican",
            ingredients: [
                "12 oz chicken breast, sliced (Greg: 8 oz / Reyna: 4 oz)",
                "2 bell peppers (mixed colors), sliced",
                "1 large onion, sliced",
                "2 cups cauliflower rice",
                "½ cup guacamole",
                "¼ cup sour cream",
                "¼ cup shredded cheese",
                "2 tbsp fajita seasoning [MILD: use 1 tbsp]",
                "3 tbsp olive oil",
                "Lime wedges",
                "Fresh cilantro"
            ],
            instructions: [
                "Toss chicken with fajita seasoning (regular or MILD amount)",
                "Heat 2 tbsp olive oil in large cast iron skillet over high heat",
                "Add chicken, cook 6-8 minutes until cooked through and slightly charred",
                "Remove chicken, set aside",
                "Add remaining oil, peppers, and onions to skillet",
                "Cook 5-7 minutes until vegetables are tender and charred",
                "Return chicken to skillet, toss together",
                "Meanwhile, cook cauliflower rice",
                "Divide cauliflower rice between two bowls",
                "Top with fajita mixture (Greg gets larger portion)",
                "Add guacamole, sour cream, cheese, and cilantro",
                "Serve with lime wedges"
            ],
            mildVersion: "Use 1 tbsp fajita seasoning instead of 2. Still delicious!",
            gregMacros: { protein: "54g", carbs: "23g", fat: "30g", calories: 600 },
            reynaMacros: { protein: "34g", carbs: "14g", fat: "16g", calories: 328 }
        },
        
        {
            id: "D003",
            name: "Thai Coconut Curry",
            spicy: true,
            prepTime: "15 min",
            cookTime: "25 min",
            servings: 2,
            cuisine: "Thai",
            ingredients: [
                "12 oz chicken breast, cubed (Greg: 8 oz / Reyna: 4 oz)",
                "1 can (14 oz) coconut milk",
                "2 tbsp red curry paste [MILD: use 1 tbsp]",
                "2 cups mixed vegetables (bell peppers, snap peas, carrots)",
                "1 cup cauliflower rice",
                "1 tbsp fish sauce",
                "1 tbsp lime juice",
                "1 tbsp coconut oil",
                "Fresh basil and cilantro",
                "Lime wedges"
            ],
            instructions: [
                "Heat coconut oil in large pot over medium heat",
                "Add curry paste (regular or MILD amount), cook 1 minute until fragrant",
                "Add chicken, cook 5 minutes until mostly cooked",
                "Pour in coconut milk, bring to simmer",
                "Add vegetables, simmer 15 minutes until tender",
                "Stir in fish sauce and lime juice",
                "Cook cauliflower rice separately",
                "Divide cauliflower rice between bowls",
                "Ladle curry over rice (Greg gets more chicken)",
                "Garnish with fresh basil and cilantro",
                "Serve with lime wedges"
            ],
            mildVersion: "Use 1 tbsp curry paste instead of 2. The coconut milk balances the heat!",
            gregMacros: { protein: "50g", carbs: "18g", fat: "33g", calories: 600 },
            reynaMacros: { protein: "32g", carbs: "12g", fat: "20g", calories: 344 }
        },
        
        {
            id: "D004",
            name: "Beef & Broccoli Stir-Fry",
            spicy: false,
            prepTime: "10 min + marinade",
            cookTime: "12 min",
            servings: 2,
            cuisine: "Asian",
            ingredients: [
                "1 lb flank steak, sliced thin (Greg: 10 oz / Reyna: 6 oz)",
                "3 cups broccoli florets",
                "2 cups cauliflower rice",
                "3 tbsp coconut aminos (or soy sauce)",
                "2 tbsp sesame oil",
                "2 cloves garlic, minced",
                "1 tsp ginger, grated",
                "1 tsp sesame seeds",
                "2 green onions, sliced"
            ],
            instructions: [
                "Marinate beef in 2 tbsp coconut aminos, 1 tbsp sesame oil, garlic, and ginger for 30 minutes",
                "Heat remaining sesame oil in wok or large skillet over high heat",
                "Stir-fry beef 2-3 minutes until browned, remove and set aside",
                "Add broccoli to wok, stir-fry 4-5 minutes until tender-crisp",
                "Return beef to wok with remaining coconut aminos",
                "Toss together for 1 minute",
                "Meanwhile, cook cauliflower rice",
                "Divide cauliflower rice between bowls",
                "Top with beef and broccoli (Greg gets larger portion)",
                "Garnish with sesame seeds and green onions",
                "Serve immediately"
            ],
            gregMacros: { protein: "52g", carbs: "16g", fat: "31g", calories: 600 },
            reynaMacros: { protein: "34g", carbs: "9g", fat: "14g", calories: 295 }
        },
        
        {
            id: "D005",
            name: "Lemon Garlic Shrimp with Zucchini Noodles",
            spicy: false,
            prepTime: "10 min",
            cookTime: "10 min",
            servings: 2,
            cuisine: "Mediterranean",
            ingredients: [
                "1 lb large shrimp, peeled and deveined (Greg: 10 oz / Reyna: 6 oz)",
                "3 large zucchini, spiralized",
                "4 cloves garlic, minced",
                "2 lemons (juice and zest)",
                "3 tbsp olive oil",
                "¼ cup fresh parsley, chopped",
                "Red pepper flakes (optional)",
                "Salt and pepper"
            ],
            instructions: [
                "Season shrimp with salt, pepper, and lemon zest",
                "Heat 2 tbsp olive oil in large skillet over medium-high heat",
                "Add garlic, cook 30 seconds until fragrant",
                "Add shrimp, cook 2-3 minutes per side until pink and cooked through",
                "Remove shrimp, set aside",
                "Add remaining olive oil and zucchini noodles to skillet",
                "Sauté 3-4 minutes until just tender (don't overcook)",
                "Return shrimp to skillet with lemon juice and parsley",
                "Toss together for 1 minute",
                "Divide between plates (Greg gets more shrimp)",
                "Serve immediately with extra lemon wedges"
            ],
            gregMacros: { protein: "48g", carbs: "18g", fat: "27g", calories: 600 },
            reynaMacros: { protein: "32g", carbs: "8g", fat: "11g", calories: 245 }
        },
        
        {
            id: "D006",
            name: "Mediterranean Baked Cod",
            spicy: false,
            prepTime: "10 min",
            cookTime: "20 min",
            servings: 2,
            cuisine: "Mediterranean",
            ingredients: [
                "12 oz cod fillets (Greg: 8 oz / Reyna: 4 oz)",
                "1 cup cherry tomatoes, halved",
                "½ cup Kalamata olives, pitted",
                "2 tbsp capers",
                "3 cloves garlic, minced",
                "3 tbsp olive oil",
                "1 lemon (juice and zest)",
                "Fresh oregano or basil",
                "2 cups roasted vegetables (zucchini, eggplant)",
                "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 400°F",
                "Place cod in baking dish, season with salt, pepper, and lemon zest",
                "Scatter tomatoes, olives, capers, and garlic around fish",
                "Drizzle everything with olive oil and lemon juice",
                "Bake 15-20 minutes until fish flakes easily with fork",
                "Meanwhile, roast vegetables on separate pan",
                "Plate fish (Greg gets larger portion) with roasted vegetables",
                "Spoon tomato-olive mixture over top",
                "Garnish with fresh herbs",
                "Serve immediately"
            ],
            gregMacros: { protein: "46g", carbs: "21g", fat: "27g", calories: 600 },
            reynaMacros: { protein: "28g", carbs: "11g", fat: "11g", calories: 245 }
        },
        
        {
            id: "D007",
            name: "Slow Cooker Chili",
            spicy: true,
            prepTime: "15 min",
            cookTime: "4-6 hours",
            servings: "4-6 servings",
            cuisine: "American",
            ingredients: [
                "1.5 lbs ground beef",
                "1 can (14 oz) diced tomatoes",
                "1 can (14 oz) tomato sauce",
                "2 cans (15 oz each) kidney beans, rinsed",
                "1 onion, diced",
                "1 bell pepper, diced",
                "3 cloves garlic, minced",
                "3 tbsp chili powder [MILD: use 1.5 tbsp]",
                "2 tsp cumin",
                "1 tsp paprika",
                "½ tsp cayenne [MILD: omit]",
                "Toppings: sour cream, cheese, avocado, cilantro"
            ],
            instructions: [
                "Brown ground beef in skillet, drain fat",
                "Add beef and all other ingredients (except toppings) to slow cooker",
                "Use regular spice amounts or MILD amounts",
                "Stir well to combine",
                "Cook on low 6 hours or high 4 hours",
                "Taste and adjust seasoning",
                "Serve in bowls with desired toppings",
                "Perfect make-ahead dinner - freezes beautifully!"
            ],
            mildVersion: "Use 1.5 tbsp chili powder and omit cayenne. Still rich and flavorful!",
            gregMacros: { protein: "45g", carbs: "36g", fat: "23g", calories: 600 },
            reynaMacros: { protein: "42g", carbs: "23g", fat: "14g", calories: 377 }
        },
        
        {
            id: "D008",
            name: "Herb-Crusted Pork Tenderloin",
            spicy: false,
            prepTime: "10 min",
            cookTime: "25 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "1 lb pork tenderloin (Greg: 10 oz / Reyna: 6 oz)",
                "2 tbsp fresh rosemary, chopped",
                "2 tbsp fresh thyme",
                "3 cloves garlic, minced",
                "2 tbsp Dijon mustard",
                "3 tbsp olive oil",
                "2 cups roasted vegetables (Brussels sprouts, carrots)",
                "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 400°F",
                "Mix rosemary, thyme, garlic, mustard, 1 tbsp olive oil, salt, and pepper",
                "Rub herb mixture all over pork tenderloin",
                "Heat remaining 2 tbsp olive oil in oven-safe skillet over high heat",
                "Sear pork 2-3 minutes per side until browned all over",
                "Transfer skillet to oven, roast 15-20 minutes until internal temp reaches 145°F",
                "Meanwhile, roast vegetables on separate pan",
                "Let pork rest 5 minutes before slicing",
                "Serve sliced pork (Greg gets larger portion) with roasted vegetables"
            ],
            gregMacros: { protein: "52g", carbs: "20g", fat: "27g", calories: 600 },
            reynaMacros: { protein: "34g", carbs: "11g", fat: "12g", calories: 278 }
        },
        
        {
            id: "D009",
            name: "Chicken Tikka Masala",
            spicy: true,
            prepTime: "15 min + marinade",
            cookTime: "30 min",
            servings: 2,
            cuisine: "Indian",
            ingredients: [
                "12 oz chicken breast, cubed (Greg: 8 oz / Reyna: 4 oz)",
                "1 cup plain Greek yogurt",
                "2 tbsp tikka masala spice blend",
                "1 can (14 oz) crushed tomatoes",
                "½ cup heavy cream (or coconut cream)",
                "2 cups cauliflower rice",
                "1 onion, diced",
                "3 cloves garlic, minced",
                "1 tbsp ginger, grated",
                "2 tbsp ghee or coconut oil",
                "1 tsp garam masala",
                "½ tsp cayenne [MILD: use ¼ tsp]",
                "Fresh cilantro"
            ],
            instructions: [
                "Marinate chicken in ½ cup yogurt and 1 tbsp tikka spice for 1 hour",
                "Heat 1 tbsp ghee in large pan, cook marinated chicken until browned, set aside",
                "Add remaining ghee, cook onion, garlic, and ginger 5 minutes",
                "Add remaining tikka spice, garam masala, and cayenne (or MILD amount), cook 1 minute",
                "Add crushed tomatoes and remaining yogurt, simmer 15 minutes",
                "Stir in cream and cooked chicken, simmer 5 more minutes",
                "Cook cauliflower rice separately",
                "Serve chicken tikka masala over cauliflower rice (Greg gets more chicken)",
                "Garnish with fresh cilantro"
            ],
            mildVersion: "Reduce cayenne to ¼ tsp. The aromatic spices still shine!",
            gregMacros: { protein: "54g", carbs: "23g", fat: "27g", calories: 600 },
            reynaMacros: { protein: "36g", carbs: "14g", fat: "14g", calories: 328 }
        },
        
        {
            id: "D010",
            name: "Balsamic Glazed Chicken",
            spicy: false,
            prepTime: "10 min",
            cookTime: "25 min",
            servings: 2,
            cuisine: "Italian",
            ingredients: [
                "12 oz chicken breast (Greg: 8 oz / Reyna: 4 oz)",
                "½ cup balsamic vinegar",
                "2 tbsp honey (or stevia equivalent)",
                "2 cups Brussels sprouts, halved",
                "2 tbsp olive oil",
                "2 cloves garlic, minced",
                "Fresh rosemary",
                "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 400°F",
                "Season chicken with salt, pepper, and rosemary",
                "Heat 1 tbsp olive oil in oven-safe skillet over medium-high heat",
                "Sear chicken 3-4 minutes per side until golden",
                "Meanwhile, simmer balsamic vinegar and honey in small pot 10 minutes until reduced by half",
                "Toss Brussels sprouts with remaining olive oil, salt, and pepper",
                "Arrange Brussels sprouts around chicken in skillet",
                "Brush chicken with half the balsamic glaze",
                "Transfer skillet to oven, roast 12-15 minutes until chicken reaches 165°F",
                "Plate chicken (Greg gets larger portion) and Brussels sprouts",
                "Drizzle with remaining balsamic glaze"
            ],
            gregMacros: { protein: "52g", carbs: "31g", fat: "20g", calories: 600 },
            reynaMacros: { protein: "32g", carbs: "16g", fat: "9g", calories: 262 }
        },
        
        {
            id: "D011",
            name: "Beef Stir-Fry with Peppers",
            spicy: false,
            prepTime: "10 min + marinade",
            cookTime: "12 min",
            servings: 2,
            cuisine: "Asian",
            ingredients: [
                "1 lb beef sirloin, sliced thin (Greg: 10 oz / Reyna: 6 oz)",
                "2 bell peppers, sliced",
                "1 onion, sliced",
                "2 cups snap peas",
                "2 cups cauliflower rice",
                "3 tbsp coconut aminos",
                "2 tbsp sesame oil",
                "2 cloves garlic, minced",
                "1 tsp ginger, grated",
                "Sesame seeds for garnish"
            ],
            instructions: [
                "Marinate beef in 2 tbsp coconut aminos, garlic, and ginger for 20 minutes",
                "Heat 1 tbsp sesame oil in wok over high heat",
                "Stir-fry beef 2-3 minutes until browned, remove and set aside",
                "Add remaining sesame oil, peppers, onion, and snap peas",
                "Stir-fry 5-6 minutes until tender-crisp",
                "Return beef to wok with remaining coconut aminos",
                "Toss together for 1 minute",
                "Meanwhile, cook cauliflower rice",
                "Serve stir-fry over cauliflower rice (Greg gets larger portion)",
                "Garnish with sesame seeds"
            ],
            gregMacros: { protein: "52g", carbs: "21g", fat: "28g", calories: 600 },
            reynaMacros: { protein: "34g", carbs: "12g", fat: "14g", calories: 295 }
        },
        
        {
            id: "D012",
            name: "Garlic Butter Shrimp Scampi",
            spicy: false,
            prepTime: "10 min",
            cookTime: "10 min",
            servings: 2,
            cuisine: "Italian",
            ingredients: [
                "1 lb large shrimp, peeled (Greg: 10 oz / Reyna: 6 oz)",
                "3 large zucchini, spiralized",
                "6 cloves garlic, minced",
                "4 tbsp butter (or ghee)",
                "¼ cup white wine (or chicken broth)",
                "2 lemons (juice and zest)",
                "¼ cup fresh parsley",
                "Red pepper flakes (optional)",
                "Salt and pepper"
            ],
            instructions: [
                "Season shrimp with salt, pepper, and lemon zest",
                "Heat 2 tbsp butter in large skillet over medium-high heat",
                "Add garlic, cook 30 seconds until fragrant",
                "Add shrimp, cook 2-3 minutes per side until pink",
                "Add wine and lemon juice, simmer 2 minutes",
                "Remove shrimp, keep warm",
                "Add zucchini noodles to skillet with remaining butter",
                "Sauté 3-4 minutes until just tender",
                "Return shrimp to skillet with parsley",
                "Toss everything together",
                "Divide between plates (Greg gets more shrimp)",
                "Serve immediately"
            ],
            gregMacros: { protein: "48g", carbs: "18g", fat: "28g", calories: 600 },
            reynaMacros: { protein: "32g", carbs: "9g", fat: "12g", calories: 262 }
        },
        
        {
            id: "D013",
            name: "One-Pan Chicken & Vegetables",
            spicy: false,
            prepTime: "10 min",
            cookTime: "30 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "12 oz chicken thighs or breast (Greg: 8 oz / Reyna: 4 oz)",
                "2 cups broccoli florets",
                "1 cup Brussels sprouts, halved",
                "1 bell pepper, sliced",
                "1 red onion, sliced",
                "4 tbsp olive oil",
                "2 tsp Italian seasoning",
                "1 tsp garlic powder",
                "Salt and pepper",
                "Lemon wedges"
            ],
            instructions: [
                "Preheat oven to 425°F",
                "Season chicken with salt, pepper, Italian seasoning, and garlic powder",
                "Toss vegetables with 3 tbsp olive oil, salt, and pepper",
                "Heat remaining olive oil in large oven-safe skillet",
                "Sear chicken 3-4 minutes per side until golden",
                "Arrange vegetables around chicken in skillet",
                "Transfer to oven, roast 20-25 minutes until chicken reaches 165°F and vegetables are tender",
                "Divide between plates (Greg gets larger chicken portion)",
                "Serve with lemon wedges",
                "Easy cleanup - everything in one pan!"
            ],
            gregMacros: { protein: "48g", carbs: "21g", fat: "31g", calories: 600 },
            reynaMacros: { protein: "30g", carbs: "12g", fat: "14g", calories: 295 }
        },
        
        {
            id: "D014",
            name: "Grilled Steak with Chimichurri",
            spicy: false,
            prepTime: "10 min",
            cookTime: "12 min",
            servings: 2,
            cuisine: "Argentinian",
            ingredients: [
                "12 oz grass-fed ribeye or sirloin (Greg: 8 oz / Reyna: 4 oz)",
                "1 cup fresh parsley, chopped",
                "¼ cup olive oil",
                "3 tbsp red wine vinegar",
                "4 cloves garlic, minced",
                "1 tsp dried oregano",
                "½ tsp red pepper flakes",
                "2 cups grilled vegetables",
                "Salt and pepper"
            ],
            instructions: [
                "Make chimichurri: combine parsley, olive oil (reserve 1 tbsp), vinegar, garlic, oregano, red pepper flakes, salt",
                "Let chimichurri sit 30 minutes for flavors to meld",
                "Season steak generously with salt and pepper",
                "Heat reserved olive oil in cast iron skillet over high heat",
                "Sear steak 4-5 minutes per side for medium-rare",
                "Let rest 5 minutes before slicing",
                "Grill vegetables while steak rests",
                "Slice steak against the grain",
                "Plate steak (Greg gets larger portion) with grilled vegetables",
                "Spoon chimichurri generously over steak",
                "Serve immediately"
            ],
            gregMacros: { protein: "45g", carbs: "32g", fat: "36g", calories: 600 },
            reynaMacros: { protein: "32g", carbs: "4g", fat: "20g", calories: 311 }
        },
        
        {
            id: "D015",
            name: "Turkey Meatballs with Marinara",
            spicy: false,
            prepTime: "15 min",
            cookTime: "25 min",
            servings: 2,
            cuisine: "Italian",
            ingredients: [
                "1 lb ground turkey",
                "1 egg",
                "¼ cup almond flour",
                "¼ cup Parmesan cheese, grated",
                "2 cloves garlic, minced",
                "1 tsp Italian seasoning",
                "2 cups marinara sauce (sugar-free)",
                "3 large zucchini, spiralized",
                "2 tbsp olive oil",
                "Fresh basil",
                "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 400°F",
                "Mix turkey, egg, almond flour, Parmesan, garlic, Italian seasoning, salt, and pepper",
                "Form into 12-14 meatballs",
                "Place on baking sheet, bake 20-25 minutes until cooked through",
                "Meanwhile, heat marinara sauce in large skillet",
                "Add cooked meatballs to sauce, simmer 5 minutes",
                "In separate pan, sauté zucchini noodles in olive oil 3-4 minutes",
                "Divide zucchini noodles between plates",
                "Top with meatballs and sauce (Greg gets more meatballs)",
                "Garnish with fresh basil and extra Parmesan"
            ],
            gregMacros: { protein: "45g", carbs: "32g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "36g", carbs: "12g", fat: "14g", calories: 311 }
        },
        
        {
            id: "D016",
            name: "Pescado Frito con Tajadas (Honduran Fried Fish with Plantain Chips)",
            spicy: false,
            prepTime: "15 min",
            cookTime: "20 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "12 oz white fish (tilapia or red snapper) (Greg: 8 oz / Reyna: 4 oz)",
                "2 green plantains",
                "2 tbsp coconut oil (for plantains)",
                "2 tbsp olive oil (for fish)",
                "2 lemons, juiced",
                "3 cloves garlic, minced",
                "1 tsp cumin",
                "Ensalada de repollo (cabbage slaw) for serving",
                "Chimol (fresh salsa) for serving",
                "Salt and pepper"
            ],
            instructions: [
                "Marinate fish in lemon juice, garlic, cumin, salt, and pepper for 15 minutes",
                "Slice plantains very thin on diagonal",
                "Heat coconut oil in large skillet, fry plantain slices in batches until golden and crispy (or bake at 400°F for 15 min)",
                "Season plantain chips with salt",
                "Heat olive oil in separate skillet over medium-high heat",
                "Pan-sear fish 4-5 minutes per side until golden and flaky",
                "Serve fish (Greg gets larger portion) with plantain chips (portion controlled)",
                "Add cabbage slaw and chimol on the side",
                "Honduras note: Coastal classic - simple and delicious!"
            ],
            hondurasNotes: "Fresh fish available on coast trips. Plantains everywhere in Valle de Ángeles.",
            gregMacros: { protein: "45g", carbs: "36g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "28g", carbs: "19g", fat: "11g", calories: 295 }
        },
        
        {
            id: "D017",
            name: "Pollo con Tajadas (Honduran Chicken with Plantains)",
            spicy: false,
            prepTime: "15 min",
            cookTime: "25 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "12 oz chicken breast or thighs (Greg: 8 oz / Reyna: 4 oz)",
                "2 green plantains, sliced",
                "1 cup curtido (pickled cabbage - fermented)",
                "2 tbsp coconut oil",
                "2 tbsp lime juice",
                "3 cloves garlic, minced",
                "1 tsp cumin",
                "Chimol (fresh salsa)",
                "Salt and pepper"
            ],
            instructions: [
                "Season chicken with lime juice, garlic, cumin, salt, and pepper",
                "Grill or pan-sear chicken until cooked through and golden",
                "Meanwhile, fry plantain slices in coconut oil until golden (or bake)",
                "Season plantains with salt",
                "Slice cooked chicken",
                "Plate chicken (Greg gets larger portion) with plantain chips",
                "Top with curtido (pickled/fermented cabbage) and chimol",
                "Honduras note: The curtido adds probiotic benefits and tangy flavor!"
            ],
            hondurasNotes: "Very popular Honduran dinner. Curtido available in markets or make your own.",
            gregMacros: { protein: "45g", carbs: "36g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "30g", carbs: "21g", fat: "12g", calories: 311 }
        },
        
        {
            id: "D018",
            name: "Sopa de Frijoles (Honduran Bean Soup)",
            spicy: false,
            prepTime: "10 min",
            cookTime: "30 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "2 cups cooked black beans (or 2 cans, rinsed)",
                "4 cups chicken or vegetable broth",
                "1 onion, diced",
                "2 bell peppers, diced",
                "3 cloves garlic, minced",
                "1 tsp cumin",
                "1 tsp oregano",
                "2 tbsp olive oil",
                "¼ cup fresh cilantro",
                "2 limes, cut into wedges",
                "Optional: diced avocado, queso fresco"
            ],
            instructions: [
                "Heat olive oil in large pot over medium heat",
                "Sauté onion, peppers, and garlic 5-7 minutes until softened",
                "Add beans, broth, cumin, and oregano",
                "Bring to boil, then reduce heat and simmer 20 minutes",
                "For thicker soup: mash some beans with back of spoon or use immersion blender partially",
                "Season with salt and pepper",
                "Ladle into bowls",
                "Garnish with fresh cilantro, lime wedges, and optional toppings",
                "Honduras note: Comfort food classic - hearty and warming!"
            ],
            hondurasNotes: "Beans are a staple. This soup is on every menu in Honduras.",
            gregMacros: { protein: "45g", carbs: "64g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "24g", carbs: "37g", fat: "9g", calories: 311 }
        },
        
        {
            id: "D019",
            name: "Montucas (Honduran Corn Tamales)",
            spicy: false,
            prepTime: "30 min",
            cookTime: "45 min",
            servings: "8 tamales",
            cuisine: "Honduran",
            ingredients: [
                "2 cups gluten-free corn masa",
                "1 cup chicken broth",
                "½ cup lard or coconut oil",
                "1 lb cooked chicken, shredded",
                "½ cup bell peppers, diced",
                "¼ cup tomato sauce",
                "1 tsp cumin",
                "Corn husks (soaked)",
                "Salt to taste"
            ],
            instructions: [
                "Soak corn husks in warm water 30 minutes",
                "Mix masa with broth, lard/oil, and salt until smooth dough forms",
                "Mix shredded chicken with peppers, tomato sauce, cumin, salt",
                "Spread 2-3 tbsp masa on each corn husk",
                "Add spoonful of chicken filling down center",
                "Fold husks to enclose filling",
                "Stand tamales upright in steamer pot",
                "Steam 45-60 minutes until masa pulls away from husk easily",
                "Let cool 10 minutes before serving",
                "Portion controlled: 2-3 tamales per person",
                "Honduras note: Special occasion food - worth the effort!"
            ],
            hondurasNotes: "Corn masa and husks available in Honduras markets. Traditional for celebrations.",
            gregMacros: { protein: "45g", carbs: "48g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "20g", carbs: "23g", fat: "11g", calories: 262 }
        },
        
        {
            id: "D020",
            name: "Tapado (Honduran Seafood Stew)",
            spicy: false,
            prepTime: "20 min",
            cookTime: "40 min",
            servings: 2,
            cuisine: "Honduran",
            ingredients: [
                "½ lb shrimp, peeled",
                "½ lb white fish, cubed",
                "1 can (14 oz) coconut milk",
                "2 cups fish or vegetable broth",
                "1 yuca, peeled and cubed (portion controlled)",
                "1 plantain, sliced",
                "1 bell pepper, diced",
                "1 onion, diced",
                "3 cloves garlic, minced",
                "2 tbsp fresh cilantro",
                "2 limes, juiced",
                "2 tbsp coconut oil",
                "Salt and pepper"
            ],
            instructions: [
                "Heat coconut oil in large pot over medium heat",
                "Sauté onion, bell pepper, and garlic 5 minutes",
                "Add coconut milk, broth, yuca, and plantain",
                "Simmer 25-30 minutes until yuca is tender",
                "Add shrimp and fish, cook 8-10 minutes until cooked through",
                "Stir in lime juice and cilantro",
                "Season with salt and pepper",
                "Serve in bowls with extra lime wedges",
                "Honduras note: Garifuna specialty from the coast - rich and comforting!"
            ],
            hondurasNotes: "Traditional Garifuna dish. Seafood from coast, yuca and plantains local.",
            gregMacros: { protein: "45g", carbs: "40g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "46g", carbs: "33g", fat: "20g", calories: 459 }
        },
        
        {
            id: "D021",
            name: "Baked Cod with Mediterranean Vegetables",
            spicy: false,
            prepTime: "15 min",
            cookTime: "25 min",
            servings: 2,
            cuisine: "Mediterranean",
            ingredients: [
                "12 oz cod fillets (Greg: 8 oz / Reyna: 4 oz)",
                "1 zucchini, sliced",
                "1 eggplant, cubed",
                "1 bell pepper, sliced",
                "1 cup cherry tomatoes",
                "3 cloves garlic, minced",
                "¼ cup olive oil",
                "2 tbsp lemon juice",
                "1 tsp dried oregano",
                "Fresh basil",
                "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 400°F",
                "Toss vegetables with 3 tbsp olive oil, garlic, oregano, salt, and pepper",
                "Spread vegetables on large baking sheet",
                "Place cod fillets on top of vegetables",
                "Drizzle fish with remaining olive oil and lemon juice",
                "Season fish with salt and pepper",
                "Bake 20-25 minutes until fish flakes easily and vegetables are tender",
                "Plate fish (Greg gets larger portion) with roasted vegetables",
                "Garnish with fresh basil",
                "Serve immediately"
            ],
            gregMacros: { protein: "45g", carbs: "32g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "28g", carbs: "12g", fat: "12g", calories: 278 }
        },
        
        {
            id: "D022",
            name: "Grilled Salmon with Almond Crusted Vegetables",
            spicy: false,
            prepTime: "15 min",
            cookTime: "20 min",
            servings: 2,
            cuisine: "American",
            ingredients: [
                "12 oz wild-caught salmon (Greg: 8 oz / Reyna: 4 oz)",
                "2 cups broccoli florets",
                "1 cup Brussels sprouts, halved",
                "½ cup almond flour",
                "¼ cup Parmesan cheese, grated",
                "3 tbsp olive oil",
                "2 lemons",
                "2 cloves garlic, minced",
                "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 425°F",
                "Season salmon with salt, pepper, and lemon zest",
                "Mix almond flour, Parmesan, 1 tbsp olive oil, salt, and pepper",
                "Toss vegetables with remaining olive oil and garlic",
                "Spread vegetables on baking sheet, top with almond mixture",
                "Roast vegetables 15 minutes",
                "Meanwhile, grill or pan-sear salmon 4-5 minutes per side",
                "Plate salmon (Greg gets larger portion) with almond-crusted vegetables",
                "Squeeze fresh lemon over everything",
                "Serve immediately"
            ],
            gregMacros: { protein: "45g", carbs: "32g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "32g", carbs: "11g", fat: "18g", calories: 328 }
        },
        
        {
            id: "D023",
            name: "Beef and Ricotta Manicotti",
            spicy: false,
            prepTime: "20 min",
            cookTime: "35 min",
            servings: 2,
            cuisine: "Italian",
            ingredients: [
                "8 gluten-free manicotti shells",
                "12 oz ground beef",
                "1 cup ricotta cheese",
                "½ cup mozzarella, shredded",
                "¼ cup Parmesan, grated",
                "2 cups marinara sauce",
                "1 egg",
                "2 cloves garlic, minced",
                "1 tsp Italian seasoning",
                "Fresh basil",
                "Salt and pepper"
            ],
            instructions: [
                "Preheat oven to 375°F",
                "Cook manicotti shells according to package, drain",
                "Brown ground beef with garlic, drain fat, season with Italian seasoning",
                "Mix ricotta, half the mozzarella, Parmesan, egg, salt, and pepper",
                "Combine beef with ricotta mixture",
                "Stuff each manicotti shell with filling",
                "Spread 1 cup marinara in baking dish",
                "Arrange stuffed shells in dish",
                "Top with remaining marinara and mozzarella",
                "Cover with foil, bake 25 minutes",
                "Uncover, bake 10 more minutes until bubbly",
                "Garnish with fresh basil",
                "Portion: Greg gets 5 shells, Reyna gets 3"
            ],
            gregMacros: { protein: "45g", carbs: "40g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "32g", carbs: "23g", fat: "16g", calories: 344 }
        },
        
        {
            id: "D024",
            name: "Tom Ka Gai (Thai Coconut Chicken Soup)",
            spicy: true,
            prepTime: "15 min",
            cookTime: "20 min",
            servings: 2,
            cuisine: "Thai",
            ingredients: [
                "12 oz chicken breast, sliced (Greg: 8 oz / Reyna: 4 oz)",
                "1 can (14 oz) coconut milk",
                "2 cups chicken broth",
                "3 stalks lemongrass, cut into 2-inch pieces",
                "6 slices galangal (or ginger)",
                "5 kaffir lime leaves (or lime zest)",
                "1 cup mushrooms, sliced",
                "2 Thai chilies [MILD: use 1 chili]",
                "3 tbsp fish sauce",
                "2 tbsp lime juice",
                "Fresh cilantro",
                "1 tbsp coconut oil"
            ],
            instructions: [
                "Heat coconut oil in pot, add lemongrass, galangal, lime leaves, and chilies (or MILD amount)",
                "Cook 2 minutes until fragrant",
                "Add coconut milk and broth, bring to simmer",
                "Add chicken and mushrooms, simmer 12-15 minutes until chicken is cooked",
                "Stir in fish sauce and lime juice",
                "Remove lemongrass and galangal pieces (they're for flavor only)",
                "Ladle into bowls (Greg gets more chicken)",
                "Garnish with fresh cilantro",
                "Serve hot"
            ],
            mildVersion: "Use 1 Thai chili instead of 2. The lemongrass and lime provide amazing flavor!",
            gregMacros: { protein: "45g", carbs: "32g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "32g", carbs: "9g", fat: "16g", calories: 311 }
        },
        
        {
            id: "D025",
            name: "Poblano Relleno con Camarones (Poblano with Shrimp)",
            spicy: true,
            prepTime: "20 min",
            cookTime: "30 min",
            servings: 2,
            cuisine: "Mexican",
            ingredients: [
                "4 large poblano peppers",
                "1 lb shrimp, chopped",
                "1 cup queso fresco, crumbled",
                "½ cup cream cheese",
                "1 onion, diced",
                "2 cloves garlic, minced",
                "1 cup tomato sauce",
                "2 tbsp olive oil",
                "1 tsp cumin",
                "Fresh cilantro",
                "Salt and pepper"
            ],
            instructions: [
                "Roast poblanos over flame or under broiler until charred, place in bag 10 minutes, peel off skin",
                "Cut slit lengthwise, remove seeds carefully [MILD: use half the amount of peppers]",
                "Heat olive oil, sauté onion and garlic 3 minutes",
                "Add shrimp, cook 5 minutes until pink",
                "Mix in cream cheese, half the queso fresco, cumin, salt, and pepper",
                "Stuff each poblano with shrimp mixture",
                "Place in baking dish, cover with tomato sauce and remaining queso fresco",
                "Bake at 375°F for 20 minutes",
                "Portion: Greg gets 3 peppers, Reyna gets 1",
                "Garnish with cilantro"
            ],
            mildVersion: "Poblanos are naturally mild. For extra mild, use bell peppers instead!",
            gregMacros: { protein: "45g", carbs: "32g", fat: "32g", calories: 600 },
            reynaMacros: { protein: "28g", carbs: "12g", fat: "14g", calories: 278 }
        }
    ],
    
    // ============================================
    // SNACKS & BEVERAGES (~16 total)
    // ============================================
    snacks: [
        {
            id: "S001",
            name: "Hard-Boiled Eggs with Everything Bagel Seasoning",
            spicy: false,
            prepTime: "1 min",
            cookTime: "12 min",
            servings: "2 eggs per person",
            cuisine: "American",
            ingredients: [
                "4 large eggs",
                "2 tsp everything bagel seasoning",
                "Salt to taste"
            ],
            instructions: [
                "Place eggs in pot, cover with cold water by 1 inch",
                "Bring to boil over high heat",
                "Once boiling, remove from heat, cover, let sit 10-12 minutes",
                "Transfer to ice bath to stop cooking",
                "Peel when cool",
                "Slice in half, sprinkle with everything bagel seasoning",
                "Store peeled eggs in fridge up to 5 days"
            ],
            gregMacros: { protein: "18g", carbs: "8g", fat: "12g", calories: 180 },
            reynaMacros: { protein: "18g", carbs: "1g", fat: "9g", calories: 147 }
        },
        
        {
            id: "S002",
            name: "Celery with Almond Butter",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 1,
            cuisine: "American",
            ingredients: [
                "3 celery stalks",
                "2 tbsp almond butter",
                "Optional: raisins, chia seeds"
            ],
            instructions: [
                "Wash and cut celery into 4-inch pieces",
                "Fill each piece with almond butter",
                "Top with raisins or chia seeds if desired",
                "Serve immediately or refrigerate"
            ],
            gregMacros: { protein: "15g", carbs: "8g", fat: "16g", calories: 190 },
            reynaMacros: { protein: "4g", carbs: "6g", fat: "12g", calories: 155 }
        },
        
        {
            id: "S003",
            name: "Greek Yogurt with Berries",
            spicy: false,
            prepTime: "2 min",
            cookTime: "0 min",
            servings: 1,
            cuisine: "Greek",
            ingredients: [
                "1 cup plain Greek yogurt",
                "½ cup mixed berries",
                "1 tbsp chia seeds",
                "Stevia to taste (optional)"
            ],
            instructions: [
                "Place Greek yogurt in bowl",
                "Top with mixed berries",
                "Sprinkle with chia seeds",
                "Add stevia if desired",
                "Serve immediately"
            ],
            gregMacros: { protein: "20g", carbs: "18g", fat: "10g", calories: 200 },
            reynaMacros: { protein: "20g", carbs: "14g", fat: "4g", calories: 164 }
        },
        
        {
            id: "S004",
            name: "Protein Smoothie",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 1,
            cuisine: "American",
            ingredients: [
                "1 scoop protein powder (vanilla or chocolate)",
                "1 cup unsweetened almond milk",
                "1 cup spinach",
                "½ cup frozen berries",
                "1 tbsp almond butter",
                "Ice cubes",
                "Stevia to taste (optional)"
            ],
            instructions: [
                "Add all ingredients to blender",
                "Blend on high 60 seconds until smooth",
                "Taste and adjust sweetness",
                "Pour into glass",
                "Serve immediately"
            ],
            gregMacros: { protein: "25g", carbs: "12g", fat: "10g", calories: 200 },
            reynaMacros: { protein: "30g", carbs: "14g", fat: "9g", calories: 245 }
        },
        
        {
            id: "S005",
            name: "Mixed Nuts (¼ cup)",
            spicy: false,
            prepTime: "1 min",
            cookTime: "0 min",
            servings: 1,
            cuisine: "International",
            ingredients: [
                "¼ cup raw or roasted mixed nuts (almonds, walnuts, pecans, cashews)",
                "Pinch of sea salt (optional)"
            ],
            instructions: [
                "Measure ¼ cup mixed nuts",
                "Sprinkle with sea salt if desired",
                "Store in airtight container",
                "Perfect grab-and-go snack"
            ],
            gregMacros: { protein: "15g", carbs: "8g", fat: "18g", calories: 200 },
            reynaMacros: { protein: "6g", carbs: "6g", fat: "14g", calories: 164 }
        },
        
        {
            id: "S006",
            name: "Turkey Roll-Ups",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 1,
            cuisine: "American",
            ingredients: [
                "4 slices deli turkey",
                "2 slices cheese (cheddar or Swiss)",
                "¼ avocado, sliced",
                "Mustard or mayo (optional)"
            ],
            instructions: [
                "Lay out turkey slices",
                "Place cheese and avocado on each slice",
                "Add mustard or mayo if desired",
                "Roll up tightly",
                "Secure with toothpick if needed",
                "Serve immediately or refrigerate"
            ],
            gregMacros: { protein: "20g", carbs: "8g", fat: "12g", calories: 200 },
            reynaMacros: { protein: "20g", carbs: "4g", fat: "12g", calories: 205 }
        },
        
        {
            id: "S007",
            name: "Cottage Cheese with Cucumber",
            spicy: false,
            prepTime: "3 min",
            cookTime: "0 min",
            servings: 1,
            cuisine: "American",
            ingredients: [
                "½ cup cottage cheese",
                "½ cucumber, sliced",
                "1 tbsp everything bagel seasoning",
                "Black pepper to taste"
            ],
            instructions: [
                "Place cottage cheese in bowl",
                "Top with sliced cucumber",
                "Sprinkle with everything bagel seasoning and pepper",
                "Serve immediately"
            ],
            gregMacros: { protein: "15g", carbs: "8g", fat: "10g", calories: 110 },
            reynaMacros: { protein: "14g", carbs: "4g", fat: "3g", calories: 90 }
        },
        
        {
            id: "S008",
            name: "Beef Jerky (Sugar-Free)",
            spicy: false,
            prepTime: "0 min",
            cookTime: "0 min",
            servings: "1 oz",
            cuisine: "American",
            ingredients: [
                "1 oz sugar-free beef jerky"
            ],
            instructions: [
                "Purchase quality sugar-free beef jerky",
                "Portion into 1 oz servings",
                "Perfect portable protein snack",
                "Store in cool, dry place"
            ],
            gregMacros: { protein: "15g", carbs: "8g", fat: "10g", calories: 70 },
            reynaMacros: { protein: "9g", carbs: "2g", fat: "0g", calories: 57 }
        },
        
        {
            id: "S009",
            name: "Guacamole with Veggie Sticks",
            spicy: false,
            prepTime: "10 min",
            cookTime: "0 min",
            servings: 2,
            cuisine: "Mexican",
            ingredients: [
                "2 ripe avocados",
                "1 lime, juiced",
                "¼ red onion, diced",
                "1 small tomato, diced",
                "2 tbsp fresh cilantro, chopped",
                "Salt and pepper",
                "Veggie sticks: celery, bell peppers, cucumber, jicama"
            ],
            instructions: [
                "Mash avocados in bowl",
                "Mix in lime juice, onion, tomato, cilantro, salt, and pepper",
                "Taste and adjust seasoning",
                "Cut vegetables into sticks",
                "Serve guacamole with veggie sticks for dipping",
                "Store guacamole with plastic wrap pressed directly on surface to prevent browning"
            ],
            gregMacros: { protein: "15g", carbs: "9g", fat: "16g", calories: 200 },
            reynaMacros: { protein: "5g", carbs: "9g", fat: "18g", calories: 213 }
        },
        
        {
            id: "S010",
            name: "Protein Energy Balls",
            spicy: false,
            prepTime: "15 min",
            cookTime: "0 min",
            servings: "12 balls (2 per serving)",
            cuisine: "American",
            ingredients: [
                "1 cup almond butter",
                "½ cup vanilla protein powder",
                "¼ cup chia seeds",
                "2 tbsp unsweetened cocoa powder",
                "2 tbsp honey (or sugar-free maple syrup)",
                "½ tsp vanilla extract",
                "Pinch of salt"
            ],
            instructions: [
                "Mix all ingredients in large bowl until well combined",
                "If mixture is too dry, add 1 tbsp almond milk",
                "If too wet, add more protein powder",
                "Roll into 12 equal-sized balls",
                "Refrigerate 30 minutes to firm up",
                "Store in airtight container in fridge up to 2 weeks",
                "Perfect pre- or post-workout snack"
            ],
            gregMacros: { protein: "15g", carbs: "10g", fat: "14g", calories: 190 },
            reynaMacros: { protein: "8g", carbs: "8g", fat: "11g", calories: 155 }
        },
        
        {
            id: "S011",
            name: "Cheese & Olives Plate",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 1,
            cuisine: "Mediterranean",
            ingredients: [
                "2 oz cheese (cheddar, gouda, or manchego)",
                "10-12 olives (Kalamata, green, or mixed)",
                "4-5 cherry tomatoes",
                "Small handful almonds"
            ],
            instructions: [
                "Arrange cheese cubes on small plate",
                "Add olives and cherry tomatoes",
                "Add almonds",
                "Serve at room temperature",
                "Perfect Mediterranean snack"
            ],
            gregMacros: { protein: "15g", carbs: "8g", fat: "15g", calories: 200 },
            reynaMacros: { protein: "14g", carbs: "4g", fat: "14g", calories: 196 }
        },
        
        {
            id: "S012",
            name: "Chocolate Protein Smoothie",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: 1,
            cuisine: "American",
            ingredients: [
                "1 scoop chocolate protein powder",
                "1 cup unsweetened almond milk",
                "1 tbsp almond butter",
                "1 tbsp unsweetened cocoa powder",
                "½ frozen banana",
                "Ice cubes",
                "Stevia to taste (optional)"
            ],
            instructions: [
                "Add all ingredients to blender",
                "Blend on high 60 seconds until smooth and creamy",
                "Taste and adjust sweetness",
                "Pour into glass",
                "Serve immediately",
                "Perfect post-workout or dessert replacement"
            ],
            gregMacros: { protein: "25g", carbs: "12g", fat: "10g", calories: 200 },
            reynaMacros: { protein: "28g", carbs: "16g", fat: "11g", calories: 262 }
        },
        
        {
            id: "S013",
            name: "Plátanos Maduros Horneados (Baked Sweet Plantains)",
            spicy: false,
            prepTime: "5 min",
            cookTime: "20 min",
            servings: "2-4 (portion controlled)",
            cuisine: "Honduran",
            ingredients: [
                "2 ripe plantains (yellow with black spots)",
                "1 tbsp coconut oil, melted",
                "½ tsp cinnamon",
                "Pinch of salt"
            ],
            instructions: [
                "Preheat oven to 400°F",
                "Peel plantains and slice on diagonal into ½-inch pieces",
                "Toss with melted coconut oil and cinnamon",
                "Arrange on baking sheet in single layer",
                "Bake 15-20 minutes, flipping halfway, until golden and caramelized",
                "Sprinkle with pinch of salt",
                "Let cool slightly",
                "Portion controlled: 4-5 pieces per serving",
                "Honduras note: Natural sweetness, no added sugar needed!"
            ],
            hondurasNotes: "Plantains are everywhere in Honduras. Use very ripe ones for natural sweetness.",
            gregMacros: { protein: "15g", carbs: "28g", fat: "10g", calories: 150 },
            reynaMacros: { protein: "2g", carbs: "23g", fat: "3g", calories: 122 }
        },
        
        {
            id: "S014",
            name: "Chimol (Honduran Fresh Tomato Salsa)",
            spicy: false,
            prepTime: "10 min",
            cookTime: "0 min",
            servings: "4-6 servings",
            cuisine: "Honduran",
            ingredients: [
                "3 large tomatoes, diced",
                "½ red onion, diced fine",
                "¼ cup fresh cilantro, chopped",
                "2 limes, juiced",
                "1 jalapeño, minced (optional) [MILD: omit]",
                "½ tsp salt",
                "¼ tsp black pepper"
            ],
            instructions: [
                "Combine all ingredients in bowl",
                "Mix well",
                "Let sit 15 minutes for flavors to meld",
                "Taste and adjust salt, lime, or cilantro",
                "Serve with any Honduran meal",
                "Store in fridge up to 3 days",
                "Honduras note: This is on EVERY table - fresh and simple!"
            ],
            hondurasNotes: "Essential condiment. Tomatoes, onions, and cilantro are cheap and fresh in Honduras.",
            gregMacros: { protein: "15g", carbs: "8g", fat: "10g", calories: 25 },
            reynaMacros: { protein: "1g", carbs: "4g", fat: "0g", calories: 20 }
        },
        
        {
            id: "S015",
            name: "Yuca con Chimichurri (Cassava with Green Sauce)",
            spicy: false,
            prepTime: "10 min",
            cookTime: "25 min",
            servings: "2-4 (portion controlled)",
            cuisine: "Honduran",
            ingredients: [
                "1 lb yuca (cassava), peeled and cut into chunks",
                "½ cup fresh parsley",
                "¼ cup olive oil",
                "2 tbsp red wine vinegar",
                "3 cloves garlic",
                "½ tsp dried oregano",
                "Salt to taste"
            ],
            instructions: [
                "Boil yuca in salted water 20-25 minutes until tender",
                "Meanwhile, make chimichurri: blend parsley, olive oil, vinegar, garlic, oregano, and salt",
                "Drain yuca well",
                "Cut into bite-sized pieces",
                "Drizzle generously with chimichurri",
                "Serve warm",
                "Portion controlled: ½ cup yuca per serving",
                "Honduras note: Popular side dish or snack"
            ],
            hondurasNotes: "Yuca is a staple in Honduras. Provides resistant starch for gut health.",
            gregMacros: { protein: "15g", carbs: "24g", fat: "10g", calories: 200 },
            reynaMacros: { protein: "2g", carbs: "27g", fat: "11g", calories: 213 }
        },
        
        {
            id: "S016",
            name: "Green Tea or Herbal Tea",
            spicy: false,
            prepTime: "2 min",
            cookTime: "5 min",
            servings: 1,
            cuisine: "International",
            ingredients: [
                "1 tea bag (green tea, chamomile, peppermint, or hibiscus)",
                "8 oz hot water",
                "Stevia to taste (optional)",
                "Lemon slice (optional)"
            ],
            instructions: [
                "Boil water",
                "Steep tea bag 3-5 minutes",
                "Remove tea bag",
                "Add stevia if desired",
                "Add lemon slice if using",
                "Serve hot or iced",
                "Zero calories, antioxidant-rich"
            ],
            gregMacros: { protein: "15g", carbs: "0g", fat: "0g", calories: 0 },
            reynaMacros: { protein: "0g", carbs: "0g", fat: "0g", calories: 0 }
        }
    ],
    
    // ============================================
    // EXTRAS: BEVERAGES, SPICE BLENDS, DRESSINGS, DESSERTS (~23 total)
    // ============================================
    extras: [
        // ============================================
        // HONDURAN BEVERAGES & PUPUSAS (5 items)
        // ============================================
        {
            id: "E001",
            name: "Pupusas Salvadoreñas (Popular in Honduras)",
            spicy: false,
            prepTime: "30 min",
            cookTime: "20 min",
            servings: "8 pupusas",
            cuisine: "Honduran",
            ingredients: [
                "2 cups gluten-free corn masa",
                "1.5 cups warm water",
                "1 cup refried beans",
                "1 cup mozzarella or quesillo cheese, shredded",
                "½ cup chicharrón (or cooked ground pork)",
                "Curtido (pickled cabbage) for serving",
                "Salsa roja for serving",
                "Salt to taste"
            ],
            instructions: [
                "Mix masa with warm water and salt until smooth, pliable dough forms",
                "Let rest 15 minutes covered",
                "Divide dough into 8 equal balls",
                "Flatten each ball into 4-inch circle",
                "Add 1-2 tbsp filling (beans, cheese, or chicharrón) to center",
                "Fold edges over filling and seal, then flatten gently to 5-6 inch disc",
                "Heat griddle or skillet over medium-high heat",
                "Cook pupusas 3-4 minutes per side until golden with brown spots",
                "Serve hot with curtido and salsa roja",
                "Portion controlled: 2-3 pupusas per person",
                "Honduras note: Salvadoran specialty but hugely popular in Honduras!"
            ],
            hondurasNotes: "Masa and quesillo widely available. Street vendors everywhere in Valle de Ángeles.",
            gregMacros: { protein: "15g", carbs: "15g", fat: "10g", calories: 150 },
            reynaMacros: { protein: "12g", carbs: "23g", fat: "8g", calories: 213 }
        },
        
        {
            id: "E002",
            name: "Horchata de Arroz (Honduran Rice Drink)",
            spicy: false,
            prepTime: "10 min + soak time",
            cookTime: "0 min",
            servings: "4 servings",
            cuisine: "Honduran",
            ingredients: [
                "1 cup white rice",
                "4 cups water (for soaking)",
                "3 cups unsweetened almond milk",
                "1 tsp vanilla extract",
                "1 tsp cinnamon",
                "Stevia to taste (replaces sugar)",
                "Ice cubes"
            ],
            instructions: [
                "Soak rice in 4 cups water for 4-8 hours (or overnight)",
                "Drain rice, add to blender with almond milk, vanilla, and cinnamon",
                "Blend on high 2-3 minutes until very smooth",
                "Strain through fine mesh sieve or cheesecloth",
                "Add stevia to taste (traditional version uses ½ cup sugar - we're using stevia)",
                "Refrigerate until very cold",
                "Serve over ice",
                "Honduras note: Refreshing traditional drink, adapted sugar-free!"
            ],
            hondurasNotes: "Popular street drink. Rice is cheap and available everywhere.",
            gregMacros: { protein: "5g", carbs: "18g", fat: "10g", calories: 90 },
            reynaMacros: { protein: "2g", carbs: "14g", fat: "1g", calories: 73 }
        },
        
        {
            id: "E003",
            name: "Agua de Jamaica (Hibiscus Tea)",
            spicy: false,
            prepTime: "5 min + steep time",
            cookTime: "10 min",
            servings: "6-8 servings",
            cuisine: "Honduran",
            ingredients: [
                "1 cup dried hibiscus flowers (jamaica)",
                "8 cups water",
                "Stevia to taste (replaces sugar)",
                "1 lime, sliced",
                "Fresh mint (optional)",
                "Ice cubes"
            ],
            instructions: [
                "Bring 8 cups water to boil",
                "Add hibiscus flowers, remove from heat",
                "Steep 15-20 minutes until deep red color",
                "Strain into pitcher, discard flowers",
                "Add stevia to taste (traditional uses 1 cup sugar - we use stevia)",
                "Refrigerate until cold",
                "Serve over ice with lime slice and mint",
                "Honduras note: Naturally tart, loaded with antioxidants, zero sugar version!"
            ],
            hondurasNotes: "Jamaica flowers available in all markets. Very popular refreshing drink.",
            gregMacros: { protein: "5g", carbs: "8g", fat: "10g", calories: 8 },
            reynaMacros: { protein: "0g", carbs: "1g", fat: "0g", calories: 6 }
        },
        
        {
            id: "E004",
            name: "Agua de Tamarindo (Tamarind Water)",
            spicy: false,
            prepTime: "10 min + soak time",
            cookTime: "5 min",
            servings: "6-8 servings",
            cuisine: "Honduran",
            ingredients: [
                "8 oz tamarind pods (or 4 oz tamarind paste)",
                "8 cups water",
                "Stevia to taste (replaces sugar)",
                "Ice cubes"
            ],
            instructions: [
                "If using pods: remove shells, soak pulp in 2 cups warm water 30 minutes",
                "Mash pulp with hands to separate from seeds",
                "Strain through sieve into pitcher, pressing to extract all liquid",
                "Add remaining 6 cups water",
                "Add stevia to taste (traditional uses 1 cup sugar - we use stevia)",
                "Stir well and refrigerate",
                "Serve over ice",
                "Honduras note: Tangy, refreshing, traditional drink made sugar-free!"
            ],
            hondurasNotes: "Tamarind widely available. Sweet-tart flavor, very refreshing.",
            gregMacros: { protein: "5g", carbs: "8g", fat: "10g", calories: 32 },
            reynaMacros: { protein: "0g", carbs: "6g", fat: "0g", calories: 26 }
        },
        
        {
            id: "E005",
            name: "Thai Iced Tea",
            spicy: false,
            prepTime: "5 min + steep time",
            cookTime: "10 min",
            servings: "2 servings",
            cuisine: "Thai",
            ingredients: [
                "4 tbsp Thai tea mix (or strong black tea)",
                "2 cups water",
                "½ cup coconut milk or heavy cream",
                "Stevia to taste (replaces sugar)",
                "Ice cubes"
            ],
            instructions: [
                "Bring water to boil, add tea",
                "Steep 5 minutes, then strain",
                "Add stevia to taste while tea is hot (traditional uses ¼ cup sugar)",
                "Let cool to room temperature",
                "Fill glasses with ice",
                "Pour tea over ice until glass is ¾ full",
                "Top with coconut milk or cream",
                "Stir before drinking",
                "Beautiful layered appearance!"
            ],
            gregMacros: { protein: "5g", carbs: "8g", fat: "10g", calories: 100 },
            reynaMacros: { protein: "1g", carbs: "4g", fat: "6g", calories: 82 }
        },
        
        // ============================================
        // INTERNATIONAL DESSERTS (4 items)
        // ============================================
        {
            id: "E006",
            name: "Chocolate Avocado Mousse",
            spicy: false,
            prepTime: "10 min",
            cookTime: "0 min",
            servings: "4 servings",
            cuisine: "International",
            ingredients: [
                "2 ripe avocados",
                "¼ cup unsweetened cocoa powder",
                "¼ cup unsweetened almond milk",
                "2 tbsp sugar-free maple syrup (or stevia to taste)",
                "1 tsp vanilla extract",
                "Pinch of salt",
                "Optional toppings: whipped cream, berries, cacao nibs"
            ],
            instructions: [
                "Add all ingredients to food processor",
                "Blend 2-3 minutes until completely smooth and creamy",
                "Taste and adjust sweetness",
                "Divide into 4 small bowls or ramekins",
                "Refrigerate at least 30 minutes",
                "Top with whipped cream, berries, or cacao nibs if desired",
                "Serve cold",
                "Rich, decadent, and packed with healthy fats!"
            ],
            gregMacros: { protein: "5g", carbs: "9g", fat: "11g", calories: 150 },
            reynaMacros: { protein: "3g", carbs: "9g", fat: "12g", calories: 155 }
        },
        
        {
            id: "E007",
            name: "Sugar-Free Coconut Macaroons",
            spicy: false,
            prepTime: "10 min",
            cookTime: "20 min",
            servings: "12 macaroons",
            cuisine: "International",
            ingredients: [
                "3 cups unsweetened shredded coconut",
                "3 egg whites",
                "½ cup sugar-free sweetener (erythritol or monk fruit)",
                "1 tsp vanilla extract",
                "¼ tsp salt",
                "Optional: 2 oz sugar-free dark chocolate for drizzling"
            ],
            instructions: [
                "Preheat oven to 325°F",
                "Line baking sheet with parchment paper",
                "In bowl, mix coconut, sweetener, and salt",
                "In separate bowl, whisk egg whites until frothy",
                "Add vanilla to egg whites",
                "Fold egg whites into coconut mixture until combined",
                "Form into 12 mounds on baking sheet",
                "Bake 18-20 minutes until golden brown on edges",
                "Let cool completely on baking sheet",
                "Optional: melt chocolate and drizzle over cooled macaroons",
                "Store in airtight container up to 1 week"
            ],
            gregMacros: { protein: "5g", carbs: "8g", fat: "10g", calories: 100 },
            reynaMacros: { protein: "2g", carbs: "4g", fat: "6g", calories: 82 }
        },
        
        {
            id: "E008",
            name: "Protein Brownie Bites",
            spicy: false,
            prepTime: "10 min",
            cookTime: "15 min",
            servings: "12 bites",
            cuisine: "American",
            ingredients: [
                "½ cup chocolate protein powder",
                "½ cup almond flour",
                "¼ cup unsweetened cocoa powder",
                "⅓ cup sugar-free sweetener",
                "2 eggs",
                "¼ cup coconut oil, melted",
                "¼ cup unsweetened almond milk",
                "1 tsp vanilla extract",
                "½ tsp baking powder",
                "Pinch of salt"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Spray mini muffin tin with cooking spray",
                "Mix dry ingredients in bowl: protein powder, almond flour, cocoa, sweetener, baking powder, salt",
                "In separate bowl, whisk eggs, melted coconut oil, almond milk, and vanilla",
                "Pour wet into dry ingredients, mix until just combined",
                "Divide batter among 12 mini muffin cups",
                "Bake 12-15 minutes until toothpick comes out clean",
                "Let cool in pan 5 minutes before removing",
                "Store in airtight container up to 5 days"
            ],
            gregMacros: { protein: "6g", carbs: "8g", fat: "10g", calories: 100 },
            reynaMacros: { protein: "6g", carbs: "4g", fat: "5g", calories: 82 }
        },
        
        {
            id: "E009",
            name: "Peanut Butter Fat Bombs",
            spicy: false,
            prepTime: "10 min + freeze time",
            cookTime: "0 min",
            servings: "12 fat bombs",
            cuisine: "American",
            ingredients: [
                "½ cup natural peanut butter",
                "¼ cup coconut oil, melted",
                "2 tbsp sugar-free sweetener",
                "1 tsp vanilla extract",
                "Pinch of salt",
                "Optional: sugar-free chocolate chips"
            ],
            instructions: [
                "Line mini muffin tin with paper liners",
                "Mix peanut butter, melted coconut oil, sweetener, vanilla, and salt",
                "Divide mixture among 12 mini muffin cups",
                "Add chocolate chips on top if desired",
                "Freeze 30-60 minutes until solid",
                "Store in freezer in airtight container",
                "Eat frozen or let sit 5 minutes to soften",
                "Perfect keto-friendly treat!"
            ],
            gregMacros: { protein: "5g", carbs: "8g", fat: "10g", calories: 110 },
            reynaMacros: { protein: "3g", carbs: "2g", fat: "8g", calories: 90 }
        },
        
        // ============================================
        // SUGAR-FREE COOKIES (3 items)
        // ============================================
        {
            id: "E010",
            name: "Sugar-Free Gluten-Free Ginger Cookies",
            spicy: false,
            prepTime: "15 min",
            cookTime: "12 min",
            servings: "24 cookies",
            cuisine: "American",
            ingredients: [
                "2 cups almond flour",
                "½ cup coconut flour",
                "¾ cup sugar-free sweetener (erythritol)",
                "½ cup coconut oil, softened",
                "1 egg",
                "2 tbsp fresh ginger, grated",
                "1 tbsp ground ginger",
                "1 tsp cinnamon",
                "½ tsp baking soda",
                "¼ tsp salt"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Line baking sheets with parchment paper",
                "Mix almond flour, coconut flour, sweetener, ginger spices, baking soda, and salt",
                "In separate bowl, beat coconut oil and egg",
                "Add dry ingredients to wet, mix until dough forms",
                "Roll dough into 24 balls",
                "Place on baking sheet, flatten slightly with fork",
                "Bake 10-12 minutes until edges are golden",
                "Let cool on baking sheet 5 minutes before transferring to rack",
                "Store in airtight container up to 1 week"
            ],
            gregMacros: { protein: "5g", carbs: "8g", fat: "10g", calories: 85 },
            reynaMacros: { protein: "2g", carbs: "3g", fat: "5g", calories: 69 }
        },
        
        {
            id: "E011",
            name: "Sugar-Free Gluten-Free Molasses Cookies",
            spicy: false,
            prepTime: "15 min",
            cookTime: "12 min",
            servings: "24 cookies",
            cuisine: "American",
            ingredients: [
                "2 cups almond flour",
                "½ cup coconut flour",
                "¾ cup sugar-free brown sweetener",
                "½ cup coconut oil, softened",
                "1 egg",
                "2 tbsp sugar-free molasses (or blackstrap molasses - small amount)",
                "1 tsp ground ginger",
                "1 tsp cinnamon",
                "½ tsp baking soda",
                "¼ tsp cloves",
                "¼ tsp salt"
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Line baking sheets with parchment paper",
                "Mix flours, sweetener, spices, baking soda, and salt",
                "In separate bowl, beat coconut oil, egg, and molasses",
                "Combine wet and dry ingredients",
                "Roll into 24 balls",
                "Place on baking sheet, flatten slightly",
                "Bake 10-12 minutes until set",
                "Let cool on sheet 5 minutes",
                "Transfer to cooling rack",
                "Store in airtight container"
            ],
            gregMacros: { protein: "5g", carbs: "8g", fat: "10g", calories: 90 },
            reynaMacros: { protein: "2g", carbs: "4g", fat: "5g", calories: 73 }
        },
        
        {
            id: "E012",
            name: "Sugar-Free Gluten-Free Shortbread Cookies",
            spicy: false,
            prepTime: "15 min",
            cookTime: "15 min",
            servings: "20 cookies",
            cuisine: "Scottish",
            ingredients: [
                "2 cups almond flour",
                "½ cup coconut flour",
                "½ cup sugar-free powdered sweetener",
                "¾ cup butter, softened (or coconut oil)",
                "1 tsp vanilla extract",
                "¼ tsp salt"
            ],
            instructions: [
                "Preheat oven to 325°F",
                "Line baking sheet with parchment paper",
                "Mix almond flour, coconut flour, sweetener, and salt",
                "Add softened butter and vanilla",
                "Mix until crumbly dough forms",
                "Press dough into ball, then roll out to ¼-inch thickness between parchment paper",
                "Cut into desired shapes (rectangles traditional)",
                "Place on baking sheet",
                "Bake 12-15 minutes until edges are lightly golden",
                "Let cool completely on sheet (they're fragile when warm)",
                "Store in airtight container up to 2 weeks"
            ],
            gregMacros: { protein: "5g", carbs: "8g", fat: "10g", calories: 95 },
            reynaMacros: { protein: "2g", carbs: "2g", fat: "7g", calories: 77 }
        },
        
        // ============================================
        // SPICE BLENDS (5 items)
        // ============================================
        {
            id: "E013",
            name: "Cajun Spice Blend",
            spicy: true,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: "Makes ½ cup",
            cuisine: "Cajun",
            ingredients: [
                "3 tbsp paprika",
                "2 tbsp garlic powder",
                "2 tbsp onion powder",
                "2 tbsp dried oregano",
                "2 tbsp dried thyme",
                "1 tbsp cayenne pepper [MILD: use 1 tsp]",
                "1 tbsp black pepper",
                "1 tbsp salt"
            ],
            instructions: [
                "Mix all spices together in bowl",
                "Store in airtight container",
                "Use on chicken, fish, shrimp, or vegetables",
                "Lasts 6 months in cool, dark place"
            ]
        },
        
        {
            id: "E014",
            name: "Italian Seasoning Blend",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: "Makes ½ cup",
            cuisine: "Italian",
            ingredients: [
                "3 tbsp dried basil",
                "3 tbsp dried oregano",
                "2 tbsp dried rosemary",
                "2 tbsp dried thyme",
                "1 tbsp garlic powder",
                "1 tbsp dried parsley",
                "1 tsp red pepper flakes (optional)"
            ],
            instructions: [
                "Combine all herbs in bowl",
                "Mix well",
                "Store in airtight jar",
                "Use on chicken, pasta sauces, vegetables, salad dressings",
                "Lasts 6 months"
            ]
        },
        
        {
            id: "E015",
            name: "Taco Seasoning",
            spicy: true,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: "Makes ⅓ cup",
            cuisine: "Mexican",
            ingredients: [
                "3 tbsp chili powder",
                "2 tbsp cumin",
                "2 tbsp paprika",
                "1 tbsp garlic powder",
                "1 tbsp onion powder",
                "1 tsp oregano",
                "1 tsp cayenne pepper [MILD: use ½ tsp]",
                "1 tsp salt",
                "1 tsp black pepper"
            ],
            instructions: [
                "Mix all spices thoroughly",
                "Store in airtight container",
                "Use 2-3 tbsp per pound of meat",
                "Perfect for tacos, burrito bowls, fajitas",
                "Lasts 6 months"
            ]
        },
        
        {
            id: "E016",
            name: "Everything Bagel Seasoning",
            spicy: false,
            prepTime: "5 min",
            cookTime: "0 min",
            servings: "Makes ½ cup",
            cuisine: "American",
            ingredients: [
                "2 tbsp sesame seeds",
                "2 tbsp poppy seeds",
                "2 tbsp dried minced garlic",
                "2 tbsp dried minced onion",
                "1 tbsp coarse sea salt",
                "1 tsp black pepper"
            ],
            instructions: [
                "Mix all ingredients together",
                "Store in airtight container",
                "Use on eggs, avocado toast, salads, roasted vegetables",
                "Lasts 3 months"
            ]
        },
        
        {
            id: "E017",
            name: "Honduran Sofrito Base",
            spicy: false,
            prepTime: "10 min",
            cookTime: "0 min",
            servings: "Makes 2 cups",
            cuisine: "Honduran",
            ingredients: [
                "1 large onion, chopped",
                "1 bell pepper, chopped",
                "4 cloves garlic",
                "2 tomatoes, chopped",
                "¼ cup fresh cilantro",
                "2 tbsp olive oil",
                "1 tsp cumin",
                "Salt to taste"
            ],
            instructions: [
                "Add all ingredients to food processor",
                "Pulse until finely chopped but not pureed",
                "Store in airtight container in fridge up to 1 week",
                "Or freeze in ice cube trays for longer storage",
                "Use as flavor base for Honduran stews, beans, rice",
                "Honduras note: Essential flavor base for traditional cooking"
            ],
            hondurasNotes: "All ingredients fresh and cheap in Honduras. Make big batches and freeze."
        },
        
        // ============================================
        // DRESSINGS & SAUCES (3 items)
        // ============================================
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
        }
    ]
};

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RECIPES_DATABASE;
}
