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
	return `<figure class="recipe">
	<img src="recipes.image" alt="image of apple crisp on a plate" />
	<figcaption>
		<ul class="recipe__tags">
			<li>Dessert</li>
			<li>Fruit</li>
		</ul>
		<h2><a href="#">recipes.name</a></h2>
		<p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: 3 out of 5 stars"
			>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star">⭐</span>
				<span aria-hidden="true" class="icon-star-empty">☆</span>
			</span>
		</p>
		<p class="recipe__description">
			recipes.description
		</p>
</figcaption>
</figure>`;
}