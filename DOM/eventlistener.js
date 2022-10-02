const p1 = document.querySelector('.p1');

// inline HTML event handler
function ubahwarna() {
    p1.style.backgroundColor = 'red';
}

// element method
p1.onclick = ubahwarna;

addEventListener
var total = 0;
const p4 = document.querySelector('.p4');
p4.addEventListener('click', function() {
    const ul = document.querySelector('ul')
    const liBaru = document.createElement('li');
    const textBaru = document.createTextNode('List baru');
    liBaru.appendChild(textBaru);
    ul.appendChild(liBaru);

    total += 1;
    const p1 = document.querySelector('.p1');
    p1.innerHTML = total;
    return total;
});