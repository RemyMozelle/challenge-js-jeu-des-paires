class Jeu {

}

let jeu_1 = [
    "img/ane.jpg",
    "img/chat.jpg",
    "img/chien.jpg",
    "img/lama.jpg",
    "img/lapins.jpg",
    "img/lionne.jpg",
    "img/ours.jpg"
]



let cartes = document.querySelectorAll('img');

for (let i = 0; i < cartes.length; i++){
    cartes[i].setAttribute('src', jeu_1[i]);
}