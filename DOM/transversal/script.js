const close1 = document.querySelectorAll('.close');
const card = document.querySelectorAll('.card');
// close1.addEventListener('click', function() {
//     card.style.display = 'none';
// })

// for (let index = 0; index < card.length; index++) {
//     close1[index].addEventListener('click', function() {
//         card[index].style.display = 'none';
//         console.log(card[index]);
//     })
// }
close1.forEach(function(e) {
    e.addEventListener('click', function() {
        e.parentElement.style.display = 'none';
        e.preventDefault();
    })
});

const nama = document.querySelector('.nama');
console.log(nama.parentElement.parentElement)