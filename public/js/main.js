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
    if(document.querySelector('p').classList.contains('text-style')){
        document.querySelector('p').classList.remove('text-style');
    } else{
        document.querySelector('p').classList.add('text-style');
    }
})
// ### 4. Dans l'avant dernier paragraphe, tu as trois span, créer un programme qui met la class bolder sur le mot sur le quel on clique 
// ### 5. Dans le dernier paragraphe tu as trois span,, créer un programme qui rajoute la class "bolrder-red" sur le mot sur le quel on clique mais retire cette class au deux autres, si elles l'ont !