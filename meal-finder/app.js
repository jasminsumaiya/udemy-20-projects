window.addEventListener("load", init);
let mealList;

function init() {
    mealList = [];
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals);
            mealList = data.meals;
        });

    submit = document.getElementById('submit');
    submit.addEventListener('submit', searchMeal);

    random = document.getElementById('random');
    random.addEventListener('click', getRandomMeal);

    //displaySingleMeal(mealList[0]);
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
            mealsEl.innerHTML = filteredMeals.map((meal) =>`${updateMealEl(meal)}`).join('');
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

    displaySingleMeal(selectedMeal);
    
    search.value = '';
}

function updateMealEl(meal){
    return `<div class="meal">
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                <div class="meal-info" data-meal-id="${meal.idMeal}" onclick="singleMealEl(event)">
                    <h3>${meal.strMeal}</h3>
                </div>
            </div> `
}

function singleMealEl(event){
    let selectedMealId = event.currentTarget.getAttribute('data-meal-id');
    console.log(selectedMealId);
    let singleMeal = mealList.find((meal) => meal.idMeal === selectedMealId);
    console.log(singleMeal);
    displaySingleMeal(singleMeal);
}

function displaySingleMeal(meal) {
    const single_mealEl = document.getElementById('single-meal');
    single_mealEl.innerHTML = '';

    let ingredients = [];

    for (let i = 1; i <= 20; i++) {       
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
          } else {
            break;
          }       
    }

    single_mealEl.innerHTML = `<div class="single-meal">
                                <h1>${meal.strMeal}</h1>
                                <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                                <div class="single-meal-info">
                                    ${meal.strCategory ? `<p>${meal.strCategory}</p>` : ''}
                                    ${meal.strArea ? `<p>${meal.strArea}</p>` : ''}
                                </div>
                                <div class="main">
                                    <p>${meal.strInstructions}</p>
                                    <h2>Ingredients</h2>
                                    <ul>
                                        ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                                    </ul>
                                </div>
                              </div>`;
}
