// # Exercice :
// >*En utilisant les class du fichier style.css*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Met un écouteur d'événement sur le h1, rajoute la class text-blue
document.querySelector('h1').addEventListener('click', ()=>{
    document.querySelector('h1').classList.add('text-blue');
});
// ### 2. Au double clique du h3, rajoute la class text-error
document.querySelector('h3').addEventListener('dblclick', ()=>{
    document.querySelector('h3').classList.add('text-error');
});
// ### 3. Trouve une methode qui rajoute la class text-style sur le paragraphe mais qui en meme temps vérifie si la class est déjà dessus, dans ce cas la cette methode est capable de la retirer 
document.querySelector('p').addEventListener('click', ()=>{
    document.querySelector('p').classList.toggle('text-style');
});
// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
let p = document.querySelectorAll('p')[1];
for(let i = 0; i < p.children.length; i++){
    p.children[i].addEventListener('click', () => {
        p.children[i].classList.add('bolder');
    })
}
// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !
let lastP = document.querySelectorAll('p')[2];
for(let i = 0; i < lastP.children.length; i++){
    lastP.children[i].addEventListener('click', () => {
        lastP.children[i].classList.toggle('bolder-red');
    })
}