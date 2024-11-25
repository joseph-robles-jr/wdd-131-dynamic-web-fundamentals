import recipes from "./recipies.mjs";

function random(num)
{
    return Math.floor(Math.random() *num); //gives a random number from 0 -7
}

function getRandomListEntry(list)
{
    const listlength = list.length;
    const randomNum = random(listlength);
    return list[randomNum];
}



function recipeTemplate(recipe) {
return `<div class="recipe-card">
	<img id="recipe-img" src="${recipe.image}" alt="Image of ${recipe.name}">
	<div class="recipe-info">
	<div class="tags">
	${tagsTemplate(recipe.tags)}
	</div>
	<h2>${recipe.name}</h2>
	<div class="rating">
	${ratingTemplate(recipe.rating)}
	</div>
	<p class="description">${recipe.description}</p>
	</div>
	</div>`;
}


function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
	{
		return tags.map(tag => `<span class= "tag"> ${tag} </span>)`).join(""); // change the tag.
	}

}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let markup = `<span role="img" aria-label="Rating: ${rating}out of 5 stars">` ; //input the rating variable into the template

	for (let count = 1; count <= 5; count++)
	 {
        markup += count <= rating 
		? `<span aria-hidden="true" class="icon-star">⭐</span>` 
		: `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
    markup += `</span>`;
    return markup;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector(".recipe-container"); //select .recipe-container
    recipeContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}