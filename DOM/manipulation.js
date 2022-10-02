// DOM SELECTION
// getElementById() -> Mengembalikan element
const judul = document.getElementById('judul')
judul.style.color = 'blue';
judul.style.backgroundColor = '#ccc';
judul.innerHTML = 'Ziyaa Danil Mubarok';

// getElementByTagName() - > mengembalikan HTML Collection
const p = document.getElementsByTagName('p');
for (var i = 0; i <= p.length; i++) {
    p[i].style.backgroundColor = '#777';
    p[i].style.color = '#fff';
}

// getElementByClassName() - > mengembalikan HTML Collection
const p1 = document.getElementsByClassName('p1');
p1[0].style.color = "red";

// querySelector() -> mengembalikan element 
// const p = document.querySelector('#b p')
// p.style.color = 'blue';


// querySelectorAll() -> mengembalikan nodelist atau kumpulan beberapa element atau text apapun itu 
const list = document.querySelectorAll('li');
for (var i = 0; i <= list.length; i++) {
    list[i].style.backgroundColor = "red";
    list[i].style.color = "#fff";
}




// DOM MANIPULATION
innnerHTML
const h = document.querySelector("#judul")
h.innerHTML = "<h5>Ziyaa Danil Mubarok</h5>";



style
const h = document.querySelector('h1#judul');
h.style.color = "blue";
h.style.backgroundColor = "red";



setAttribute()
const h = document.querySelector('#judul');
h.removeAttribute('id')
h.setAttribute('id', 'judul')
h.getAttribute('id')



// classLista
const h = document.querySelector('#judul');
h.addEventListener(click, function() {
    h.classList.toggle('tambah')
});



// DOM MANIPULATION NODEa
const elementP = document.createElement('p');
const elementText = document.createTextNode('Tambah Paragraph');
elementP.appendChild(elementText)
const sectionA = document.querySelector('#a');


// insertBeforea 
const elementtBaru = document.createElement('li');
const textBaru = document.createTextNode('List baru');
elementtBaru.appendChild(textBaru)
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector("li:nth-child(3)");
ul.insertBefore(elementtBaru, li2)

// remove child
const anchor = sectionA.querySelector('a');
sectionA.removeChild(anchor);

// replace child
const sectionB = document.querySelector('#b');
const pSectionB = sectionB.querySelector('p');
const h2 = document.createElement('h2');
const textH2 = document.createTextNode('Sub Judul H2 Baru');
h2.appendChild(textH2);
sectionB.replaceChild(h2, pSectionB);