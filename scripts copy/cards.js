var container = document.querySelectorAll("#card-big-container");
var allCardContainerBig = [...container];
var container = document.querySelectorAll("#card-2-container");
var allCardContainer2 = [...container];
var container = document.querySelectorAll("#card-slide-show-container");
var allCardContainerSlideShow = [...container];

let alreadyUsedRecipie = false;
let arrayOfUsedRecipies = [];

function getRecipesFromAPI (url) {
    fetch(url)
    .then(res => res.json())
    .then(json => {

        allCardContainerBig.forEach(cardContainer => {
            
            let rndReceie = getRndRecipie();

            cardContainer.innerHTML = `
            <div class="card" data-id="` + json.recipes[rndReceie].id + `">
                <div class="big-card-anim overflow-hidden rounded-5">
                    <button class="white-btn-border small-btn round-btn green-btn blue-btn-hover position-absolute start-0 top-0 m-sm-3 m-1"><i class="fa-regular fa-bookmark"></i></button>
                    <button class="smaller-btn position-absolute end-0 top-0 m-sm-3 m-1">` + json.recipes[rndReceie].cuisine + `</button>
                    <img src="` + json.recipes[rndReceie].image + `" class="card-img-top" alt="" draggable="false">
                </div>
                
                <div class="card-body px-0 pt-2">
                    <p>` + json.recipes[rndReceie].prepTimeMinutes + ` min</p>
                    <h4 class="my-1">` + json.recipes[rndReceie].name + `</h5>
                    <span><i class="fa-regular fa-star mt-1"></i>` + json.recipes[rndReceie].rating + `</span>
                </div>
            </div>
            `;
        });


        allCardContainer2.forEach(cardContainer => {
            
            let rndReceie = getRndRecipie();

            let rndReceie2 = getRndRecipie();

            cardContainer.innerHTML = `
            <div class="card mb-2 me-sm-4 me-2 h-100" data-id="` + json.recipes[rndReceie].id + `">
                <div class="card-anim overflow-hidden">
                    <button class="white-btn-border small-btn round-btn green-btn blue-btn-hover position-absolute start-0 top-0 m-sm-3 m-1"><i class="fa-regular fa-bookmark"></i></button>
                    <button class="smaller-btn position-absolute end-0 top-0 m-sm-3 m-1">` + json.recipes[rndReceie].cuisine + `</button>
                    <img class="border-none" src="` + json.recipes[rndReceie].image + `" class="card-img-top" alt="" draggable="false">
                </div>
                <div class="card-body px-0 pt-1">
                    <p>` + json.recipes[rndReceie].prepTimeMinutes + ` min</p>
                    <h4 class="my-1">` + json.recipes[rndReceie].name + `</h5>
                    <span><i class="fa-regular fa-star mt-1"></i>` + json.recipes[rndReceie].rating + `</span>
                </div>
            </div>
            <div class="card mb-2 ms-sm-4 ms-2 h-100" data-id="` + json.recipes[rndReceie2].id + `">
                <div class="card-anim overflow-hidden">
                    <button class="white-btn-border small-btn round-btn green-btn blue-btn-hover position-absolute start-0 top-0 m-sm-3 m-1"><i class="fa-regular fa-bookmark"></i></button>
                    <button class="smaller-btn position-absolute end-0 top-0 m-sm-3 m-1">` + json.recipes[rndReceie2].cuisine + `</button>
                    <img class="border-none" src="` + json.recipes[rndReceie2].image + `" class="card-img-top" alt="" draggable="false">
                </div>
                <div class="card-body px-0 pt-1">
                    <p>` + json.recipes[rndReceie2].prepTimeMinutes + ` min</p>
                    <h4 class="my-1">` + json.recipes[rndReceie2].name + `</h5>
                    <span><i class="fa-regular fa-star mt-1"></i>` + json.recipes[rndReceie2].rating + `</span>
                </div>
            </div>
            `;
        });


        allCardContainerSlideShow.forEach(cardContainer => {
            
            let rndReceie = getRndRecipie();

            let rndReceie2 = getRndRecipie();

            let rndReceie3 = getRndRecipie();

            let rndReceie4 = getRndRecipie();

            let rndReceie5 = getRndRecipie();

            cardContainer.innerHTML = `
            <div class="d-flex flex-row gap-3">
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + json.recipes[rndReceie].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + json.recipes[rndReceie].image + `" class="card-img-top" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">TRENDING NOW</h4>
                        <h2 style="color: #fff;" class="my-2">POPULAR PICK</h2>
                        <h4 style="color: #fff;">` + json.recipes[rndReceie].name + `</h4>
                    </div>
                </div>
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + json.recipes[rndReceie2].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + json.recipes[rndReceie2].image + `" class="card-img-top" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">TRENDING NOW</h4>
                        <h2 style="color: #fff;" class="my-2">HOT THIS WEEK</h2>
                        <h4 style="color: #fff;">` + json.recipes[rndReceie2].name + `</h4>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row gap-3">
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + json.recipes[rndReceie3].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + json.recipes[rndReceie3].image + `" class="card-img-top" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">SEASONAL FIRE</h4>
                        <h2 style="color: #fff;" class="my-2">IT'S THAT TIME</h2>
                        <h4 style="color: #fff;">` + json.recipes[rndReceie3].name + `</h4>
                    </div>
                </div>
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + json.recipes[rndReceie4].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + json.recipes[rndReceie4].image + `" class="card-img-top" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">SEASONAL FIRE</h4>
                        <h2 style="color: #fff;" class="my-2">TASTY & TIMELY</h2>
                        <h4 style="color: #fff;">` + json.recipes[rndReceie4].name + `</h4>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <div class="card mb-4 rounded h-100" style="width: 18rem;" data-id="` + json.recipes[rndReceie5].id + `">
                    <div class="card-anim overflow-hidden">
                        <img src="` + json.recipes[rndReceie5].image + `" class="card-img-top" alt="" draggable="false">
                    </div>
                    <div class="card-body px-0 pt-2">
                        <h4 style="color: #fff;">COOKER-FRIENDLY</h4>
                        <h2 style="color: #fff;" class="my-2">CRAVABLE</h2>
                        <h4 style="color: #fff;">` + json.recipes[rndReceie5].name + `</h4>
                    </div>
                </div>
            </div>
            `;
        });     

    })
    .finally(() => {
        var buttonRecipes = document.getElementsByClassName("card");

        // Pour chaque bouton "View Recipe", ajoute un écouteur d'événements pour rediriger l'utilisateur vers la page de détail de la recette

        // ici, le forEach n'est pas utilisé car buttonRecipes est une collection HTML, et ne contient pas de méthode forEach, 
        // nous allons donc utiliser une boucle for traditionnel
        for (let i = 0; i < buttonRecipes.length; i++) {
            if (buttonRecipes[i].tagName.toLowerCase != "button") {
                buttonRecipes[i].addEventListener("click", function(){
                    var card = buttonRecipes[i].closest(".card");
                    var id = card.getAttribute("data-id");

                    window.location.href = "detail.html?id=" + id;
                })
            }
        }
    })
}


getRecipesFromAPI('https://dummyjson.com/recipes?limit=50');


function getRndRecipie() {
    let rndRecepie;
    do {
        rndRecepie = Math.floor(Math.random() * 50);
    } while (arrayOfUsedRecipies.includes(rndRecepie));
    arrayOfUsedRecipies.push(rndRecepie);
    return rndRecepie;
}