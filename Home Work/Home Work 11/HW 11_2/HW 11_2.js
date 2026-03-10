fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('recipes');

        const header = document.createElement('h-1');
        header.textContent = 'All Recipes';
        document.body.prepend(header);
        header.style.fontSize = '60px';

        data.recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');

            const title = document.createElement('h2');
            title.textContent = recipe.name;

            const ingredientsList = document.createElement('ul');

            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });

            recipeDiv.append(title, ingredientsList);

            container.appendChild(recipeDiv);
        });
    });
