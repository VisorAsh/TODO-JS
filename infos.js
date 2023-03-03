// Pour sélectionner un élément

document.body // Récupère l'élément body
document.getElementById('demo') // Sélectionne l'élément avec l'id demo
document.querySelector('.demo') // Sélectionne le premier élément correspondant au sélecteur CSS

// Pour sélectionner plusieurs éléments
const elements = document.querySelectorAll('.demo') // Sélectionne les éléments correspondant au sélecteur CSS 
// Ces méthodes renvoient un objet NodeList enumerable 
// On peut parcourir cette liste d'éléments 
elements.forEach(element => {
    console.log(element)// objet de type Element
})
// On pourra aussi convertir cet enumerable en tableau
Array.from(element)


// Une fois que l'on obtient un élément il est possible d'obtenir différentes informations
element.getAttribute('attribut') // Permet de récupérer la valeur d'un attribut
element.style // Permet de récupérer les styles associés à l'élément
element.classList // Permet de récupérer la liste des classes associées à un élément 
element.innerHTML // Renvoie le contenu HTML de l'élément 
element.innerText // Renvoie le texte "visuellement rendu" de l'élément
element.textContent // Renvoie le texte de l'élément 


// Mais on peut aussi modifier un élément

element.setAttribute('href', 'http://grafikart.fr')
element.style.fontSize = '24px'
element.classList.add('red') // Ajoute une class à l'élément
element.innerHTML = '<p>Bonjour</p>'
element.innerText = 'Bonjour'


// Faire un text clignotant.
const li = document.querySelector('ul li:first-child')
/**
 * Supposons qu'on ait sur le premier li du ul des styles (bold et red); grâce aux classList.toggle il va retirer l'attribut red si elle existe et la rajouter si elle n'existe pas. Ce qui donne l'effet d'un text clignontant.
 */
setInterval(() => {
    ul.classList.toggle('red')
}, 1000);


// Pour créer un élément 

const newLi = document.createElement('li')
newLi.innerHTML = 'Bonjour'
document.querySelector('ul').append(newLi) // prepend ajoute l'élément au tout début

ul.contains(li) // Ici c'est pour savoir si le ul contient bien un li.. conlose.log

// Naviguer dans l'arbre

element.childNodes // Renvoie tous les noeuds enfant (même les noeuds textes)
element.children // Renvoie tous les noeuds éléments
element.firstChild // Récupère le premier enfant 
element.firstElementChild // Récupère le premier enfant de type element 
element.previousElementSibling
element.nextElementSibling


// On peut aussi créer et modifier des éléments grâce à différentes méthodes

element.appendChild(enfant) // ajoute un élément à un autre
element.append(enfant) // ajoute un élément à un autre
element.remove() // supprime l'élément du DOM
parentElement.insertBefore(nouvelElement, refElement)
parentElement.insertAdjacentHTML('beforebegin', nouvelElement)

// Lien de la doc : https://developer.mozilla.org/en-US/docs/Web/API/Element