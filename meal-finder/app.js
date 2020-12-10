window.addEventListener("load", init);
let mealList;

function init() {
    mealList = [
        {
            "idMeal": "52977",
            "strMeal": "Corba",
            "strDrinkAlternate": null,
            "strCategory": "Side",
            "strArea": "Turkish",
            "strInstructions": "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside.  Fair warning, this will probably turn your lentils into a solid block that you\u2019ll have to break up later\r\nIn a large pot over medium-high heat, saut\u00e9 the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes.\r\nAdd the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells.\r\nImmediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil.\r\nAfter it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked.\r\nAfter the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand blender to reach the consistency you desire. Taste for seasoning and add more salt if necessary.\r\nServe with crushed-up crackers, torn up bread, or something else to add some extra thickness.  You could also use a traditional thickener (like cornstarch or flour), but I prefer to add crackers for some texture and saltiness.  Makes great leftovers, stays good in the fridge for about a week.",
            "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/58oia61564916529.jpg",
            "strTags": "Soup",
            "strYoutube": "https:\/\/www.youtube.com\/watch?v=VVnZd8A84z4",
            "strIngredient1": "Lentils",
            "strIngredient2": "Onion",
            "strIngredient3": "Carrots",
            "strIngredient4": "Tomato Puree",
            "strIngredient5": "Cumin",
            "strIngredient6": "Paprika",
            "strIngredient7": "Mint",
            "strIngredient8": "Thyme",
            "strIngredient9": "Black Pepper",
            "strIngredient10": "Red Pepper Flakes",
            "strIngredient11": "Vegetable Stock",
            "strIngredient12": "Water",
            "strIngredient13": "Sea Salt",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "1 cup ",
            "strMeasure2": "1 large",
            "strMeasure3": "1 large",
            "strMeasure4": "1 tbs",
            "strMeasure5": "2 tsp",
            "strMeasure6": "1 tsp ",
            "strMeasure7": "1\/2 tsp",
            "strMeasure8": "1\/2 tsp",
            "strMeasure9": "1\/4 tsp",
            "strMeasure10": "1\/4 tsp",
            "strMeasure11": "4 cups ",
            "strMeasure12": "1 cup ",
            "strMeasure13": "Pinch",
            "strMeasure14": " ",
            "strMeasure15": " ",
            "strMeasure16": " ",
            "strMeasure17": " ",
            "strMeasure18": " ",
            "strMeasure19": " ",
            "strMeasure20": " ",
            "strSource": "https:\/\/findingtimeforcooking.com\/main-dishes\/red-lentil-soup-corba\/",
            "dateModified": null
        },
        {
            "idMeal": "52978",
            "strMeal": "Kumpir",
            "strDrinkAlternate": null,
            "strCategory": "Side",
            "strArea": "Turkish",
            "strInstructions": "If you order kumpir in Turkey, the standard filling is first, lots of butter mashed into the potato, followed by cheese. There\u2019s then a row of other toppings that you can just point at to your heart\u2019s content \u2013 sweetcorn, olives, salami, coleslaw, Russian salad, allsorts \u2013 and you walk away with an over-stuffed potato because you got ever-excited by the choices on offer.\r\n\r\nGrate (roughly \u2013 you can use as much as you like) 150g of cheese.\r\nFinely chop one onion and one sweet red pepper.\r\nPut these ingredients into a large bowl with a good sprinkling of salt and pepper, chilli flakes (optional).",
            "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/mlchx21564916997.jpg",
            "strTags": "SideDish",
            "strYoutube": "https:\/\/www.youtube.com\/watch?v=IEDEtZ4UVtI",
            "strIngredient1": "Potatoes",
            "strIngredient2": "Butter",
            "strIngredient3": "Cheese",
            "strIngredient4": "Onion",
            "strIngredient5": "Red Pepper",
            "strIngredient6": "Red Chile Flakes",
            "strIngredient7": "",
            "strIngredient8": "",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "2 large",
            "strMeasure2": "2 tbs",
            "strMeasure3": "150g",
            "strMeasure4": "1 large",
            "strMeasure5": "1 large",
            "strMeasure6": "Pinch",
            "strMeasure7": " ",
            "strMeasure8": " ",
            "strMeasure9": " ",
            "strMeasure10": " ",
            "strMeasure11": " ",
            "strMeasure12": " ",
            "strMeasure13": " ",
            "strMeasure14": " ",
            "strMeasure15": " ",
            "strMeasure16": " ",
            "strMeasure17": " ",
            "strMeasure18": " ",
            "strMeasure19": " ",
            "strMeasure20": " ",
            "strSource": "http:\/\/www.turkeysforlife.com\/2013\/10\/firinda-kumpir-turkish-street-food.html",
            "dateModified": null
        },
        {
            "idMeal": "53026",
            "strMeal": "Tamiya",
            "strDrinkAlternate": null,
            "strCategory": "Vegetarian",
            "strArea": "Egyptian",
            "strInstructions": "oak the beans in water to cover overnight.Drain. If skinless beans are unavailable, rub to loosen the skins, then discard the skins. Pat the beans dry with a towel.\r\nGrind the beans in a food mill or meat grinder.If neither appliance is available, process them in a food processor but only until the beans form a paste. (If blended too smoothly, the batter tends to fall apart during cooking.) Add the scallions, garlic, cilantro, cumin, baking powder, cayenne, salt, pepper, and coriander, if using.  Refrigerate for at least 30 minutes.\r\nShape the bean mixture into 1-inch balls.Flatten slightly and coat with flour.\r\nHeat at least 1\u00bd-inches of oil over medium heat to 365 degrees.\r\nFry the patties in batches, turning once, until golden brown on all sides, about 5 minutes.Remove with a wire mesh skimmer or slotted spoon. Serve as part of a meze or in pita bread with tomato-cucumber salad and tahina sauce.",
            "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/n3xxd91598732796.jpg",
            "strTags": null,
            "strYoutube": "https:\/\/www.youtube.com\/watch?v=mulqW-J3Yy4",
            "strIngredient1": "Broad Beans",
            "strIngredient2": "Spring Onions",
            "strIngredient3": "Garlic Clove",
            "strIngredient4": "Parsley",
            "strIngredient5": "Cumin",
            "strIngredient6": "Baking Powder",
            "strIngredient7": "Cayenne Pepper",
            "strIngredient8": "Flour",
            "strIngredient9": "Vegetable Oil",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": "",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "3 cups ",
            "strMeasure2": "6",
            "strMeasure3": "4",
            "strMeasure4": "1\/4 cup",
            "strMeasure5": "2 tsp",
            "strMeasure6": "1 tsp ",
            "strMeasure7": "1\/2 tsp",
            "strMeasure8": "Spinkling",
            "strMeasure9": "As required",
            "strMeasure10": " ",
            "strMeasure11": " ",
            "strMeasure12": " ",
            "strMeasure13": " ",
            "strMeasure14": " ",
            "strMeasure15": " ",
            "strMeasure16": " ",
            "strMeasure17": " ",
            "strMeasure18": " ",
            "strMeasure19": " ",
            "strMeasure20": " ",
            "strSource": "https:\/\/oukosher.org\/recipes\/tamiya-egyptian-dried-fava-bean-fritters\/",
            "dateModified": null
        },
        {
            "idMeal": "52785",
            "strMeal": "Dal fry",
            "strDrinkAlternate": null,
            "strCategory": "Vegetarian",
            "strArea": "Indian",
            "strInstructions": "Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water.\r\nCook dal with 2-1\/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup.\r\nIn a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds.\r\nAdd tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy.\r\nAdd cilantro and garam masala cook for about one minute.\r\nPour the seasoning over dal mix it well and cook for another minute.\r\nServe with Naan.",
            "strMealThumb": "https:\/\/www.themealdb.com\/images\/media\/meals\/wuxrtu1483564410.jpg",
            "strTags": "Curry,Vegetarian,Cake",
            "strYoutube": "https:\/\/www.youtube.com\/watch?v=J4D855Q9-jg",
            "strIngredient1": "Toor dal",
            "strIngredient2": "Water",
            "strIngredient3": "Salt",
            "strIngredient4": "Turmeric",
            "strIngredient5": "Ghee",
            "strIngredient6": "Chopped tomatoes",
            "strIngredient7": "Cumin seed",
            "strIngredient8": "Mustard Seeds",
            "strIngredient9": "Bay Leaf",
            "strIngredient10": "Green Chili",
            "strIngredient11": "Ginger",
            "strIngredient12": "Cilantro",
            "strIngredient13": "Red Pepper",
            "strIngredient14": "Salt",
            "strIngredient15": "Sugar",
            "strIngredient16": "Garam Masala",
            "strIngredient17": "",
            "strIngredient18": "",
            "strIngredient19": "",
            "strIngredient20": "",
            "strMeasure1": "1 cup",
            "strMeasure2": "2-1\/2 cups",
            "strMeasure3": "1 tsp",
            "strMeasure4": "1\/4 tsp",
            "strMeasure5": "3 tbs",
            "strMeasure6": "1 cup",
            "strMeasure7": "1\/2 tsp",
            "strMeasure8": "1\/2 tsp",
            "strMeasure9": "2",
            "strMeasure10": "1 tbs chopped",
            "strMeasure11": "2 tsp shredded",
            "strMeasure12": "2 tbs ",
            "strMeasure13": "1\/2 tsp",
            "strMeasure14": "1\/2 tsp",
            "strMeasure15": "1 tsp",
            "strMeasure16": "1\/4 tsp",
            "strMeasure17": "",
            "strMeasure18": "",
            "strMeasure19": "",
            "strMeasure20": "",
            "strSource": "https:\/\/www.instagram.com\/p\/BO21bpYD3Fu",
            "dateModified": null
        }
    ];

    submit = document.getElementById('submit');
    submit.addEventListener('submit', searchMeal);

    random = document.getElementById('random');
    random.addEventListener('click', getRandomMeal);
}

function searchMeal(e) {
    e.preventDefault();

    let mealsEl = document.getElementById('meals');
    let resultHeading = document.getElementById('result-heading');

    const single_mealEl = document.getElementById('single-meal');
    single_mealEl.innerHTML = '';

    const search = document.getElementById('search');
    let term = search.value;

    if (term.trim()) {
        let searchTerm = term.trim().toLowerCase();

        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

        let filteredMeals = mealList.filter((meal) => {
            let strInstructions = meal.strInstructions.toLowerCase();
            return strInstructions.includes(searchTerm);
        });

        if (filteredMeals.length === 0) {
            resultHeading.innerHTML = `<p>There are no search results. Try again!<p>`;
            mealsEl.innerHTML = '';
        } else {
            mealsEl.innerHTML = filteredMeals.map(meal => `
                <div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div> `).join('');
        }
        search.value = '';
    } else {
        resultHeading.innerHTML = `<p>Please enter a search term!<p>`;
        mealsEl.innerHTML = '';
    }
}

function getRandomMeal() {
    let mealsEl = document.getElementById('meals');
    let resultHeading = document.getElementById('result-heading');

    const single_mealEl = document.getElementById('single-meal');
    single_mealEl.innerHTML = '';

    mealsEl.innerHTML = '';

    let selectedMeal = mealList[Math.floor(Math.random() * mealList.length)];
    console.log(selectedMeal);

    resultHeading.innerHTML = `<h2>Search results for random:</h2>`;

    mealsEl.innerHTML = `<div class="meal">
                            <img src="${selectedMeal.strMealThumb}" alt="${selectedMeal.strMeal}" />
                            <div class="meal-info" data-mealID="${selectedMeal.idMeal}">
                                <h3>${selectedMeal.strMeal}</h3>
                            </div>
                        </div> `;
    search.value = '';
}
