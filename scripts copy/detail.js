let params = new URLSearchParams(document.location.search);
let id = parseInt(params.get("id"));
let recipeContainer = document.getElementById("recipe-container");

fetch('https://dummyjson.com/recipes/' + id)
.then(res => res.json())
.then(recipe => {
  console.log(recipe);
  let ingredientsHTML = recipe.ingredients.map(ingredient => `<p>• ${ingredient}</p>`).join('');
  let instructionsHTML = recipe.instructions.map((instruction, index) => `<p>${index + 1}. ${instruction}</p>`).join('');

  recipeContainer.innerHTML = `
  <header class="d-flex flex-row justify-content-between pb-sm-5 mb-sm-5 pb-3 mb-3 px-4">
    <div class="col-lg-8">
      <h1 class="mt-5 pt-5">` + recipe.name + `</h1>
    </div>
    <div class="col-lg-4 d-flex align-items-end justify-content-end">
      <h2 class="d-flex flex-row align-items-end"><i class="fa-regular fa-star pe-3"></i>` + recipe.rating + `</h2>
    </div>
  </header>

  <div class="d-flex flex-column flex-lg-row mt-5 px-4 py-5">
    <div class="col-lg-6">
      <img src="` + recipe.image + `" alt="" class="rounded-5" draggable="false">
    </div>

    <div class="col-lg-6 d-flex flex-column align-items-center justify-content-center pt-5 mt-5 m-lg-0 p-lg-0 gap-4">

      <div class="d-flex flex-row align-items-end gap-3 mb-3">
        <h3>Cuisine: </h3><h2 class="m-0">` + recipe.cuisine + ` Food</h2>
      </div>

      <div class="d-flex flex-row align-items-end gap-3">
        <h6>Prep Time: </h6><h3>` + recipe.prepTimeMinutes + ` Min</h3>
      </div>

      <div class="d-flex flex-row align-items-end gap-3">
        <h6>Cooking Time:</h6><h3>` + recipe.cookTimeMinutes + ` Min</h3>
      </div>

      <div class="d-flex flex-row align-items-end gap-3">
        <h6>Number of Serveings:</h6><h3>` + recipe.servings + ` servings</h3>
      </div>

      <div class="d-flex flex-row align-items-end gap-3">
        <h6>Calories / Serving:</h6><h3>` + recipe.caloriesPerServing + ` kCal</h3>
      </div>

      <div class="d-flex flex-row align-items-end gap-3">
        <h6>Times Reviewed:</h6><h3>` + recipe.reviewCount + ` Times</h3>
      </div>
    </div>
  </div>

  <div class="d-flex flex-column flex-lg-row justify-content-center align-items-center align-items-lg-start mt-5 p-0 pb-5">
    <div class="col-11 col-lg-4 d-flex flex-column align-items-start gap-3">
      <h2 class="me-auto">Ingrediants:</h2><div class="d-flex flex-column align-items-center align-items-lg-start mx-auto">` + ingredientsHTML + `</div>
    </div>

    <div class="col-11 col-lg-8 d-flex flex-column align-items-start gap-3">
      <h2>Instructions:</h2><div class="d-flex flex-column mx-auto">` + instructionsHTML + `</div>
    </div>
  </div>
  `;
})

