let jeu_1 = [
    "img/ane.jpg",
    "img/chat.jpg",
    "img/chien.jpg",
    "img/lama.jpg",
    "img/lapins.jpg",
    "img/lionne.jpg",
    "img/ours.jpg",
    "img/ane.jpg",
    "img/chat.jpg",
    "img/chien.jpg",
    "img/lama.jpg",
    "img/lapins.jpg",
    "img/lionne.jpg",
    "img/ours.jpg"
]

let cartes = document.querySelectorAll('img');
let compteur = 2;
for (let i = 0; i < cartes.length; i++) {
    cartes[i].setAttribute('src', 'img/carte.png');
    cartes[i].addEventListener('click', () => {
        cartes[i].setAttribute('src', jeu_1[i]);
        
        window.setTimeout(function() {
            if(cartes[i] === jeu_1[i]){ console.log('g')}
        }, 1000);

        
    })
}
