import { recipes } from "./recipes.js";
const recipesList = [];
const recipesList2 = [...recipesList];
const btnFilter = document.querySelector("#btnfiltre");
const listeDeRecettes = document.querySelector("#recipeContainer");
let selectedRecipe = [0];
for (const key in recipes) {
    recipesList.push(Object.assign({ id: key }, recipes[key]));
}
recipesList.forEach(recipes => {
    const recette = document.createElement('div');
    recette.setAttribute('class', 'divRecette');
    const hr = document.createElement('hr');
    hr.setAttribute('class', 'hrStyle');
    const titreRecette = document.createElement('h1');
    titreRecette.setAttribute('class', ' titre_recette');
    const icon = document.createElement('span');
    icon.setAttribute('class', 'bibiicon');
    listeDeRecettes.appendChild(recette);
    listeDeRecettes.appendChild(titreRecette);
    listeDeRecettes.appendChild(icon);
    recette.append(titreRecette, hr, icon);
    titreRecette.textContent += ` ${recipes.name} `;
    icon.innerHTML += `<i class='bi bi-clock'>  ${recipes.prepTime}</i> <i class='bi bi-fire'>  ${recipes.cookTime}</i> `;
});
const filtreTexte = function (recipesList, requete) {
    return recipesList.filter(el => el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
};
console.log(filtreTexte(recipesList, 'an'));
console.log(filtreTexte(recipesList, 'm'));
btnFilter.addEventListener('click', () => {
    filtreTexte(recipesList, "to");
});
// const displayRecipes = function(){
//   recipesList.forEach(recipes => {
//     const recette = document.createElement('div');
//     recette.setAttribute('class','divRecette');
//     const hr = document.createElement('hr');
//     hr.setAttribute('class','hrStyle');
//     const titreRecette = document.createElement('h1');
//     titreRecette.setAttribute('class',' titre_recette');
//     const icon = document.createElement('span');
//     icon.setAttribute('class','bibiicon');
//     listeDeRecettes.appendChild(recette);
//     listeDeRecettes.appendChild(titreRecette);
//     listeDeRecettes.appendChild(icon);
//     recette.append(titreRecette, hr, icon);
//     titreRecette.textContent += ` ${recipes.name} `;
//     icon.innerHTML += `<i class='bi bi-clock'>  ${recipes.prepTime}</i> <i class='bi bi-fire'>  ${recipes.cookTime}</i> `;
//     displayRecipes();
// })
// }
// displayRecipes();
