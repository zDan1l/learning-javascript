const buttonUbah = document.querySelector('button');

buttonUbah.addEventListener("click", function() {
    document.body.classList.toggle('warna');
})

randomWarna = document.createElement("button");
textRandom = document.createTextNode('Radom Warna');
randomWarna.appendChild(textRandom);
document.body.appendChild(randomWarna);
warnaRandom = function() {
    alert("ok")
        // var a = Math.round(Math.random() * 255 + 1);
        // document.body.style.backgroundColor = "rgb(a, a, a)"
}
randomWarna.addEventListener("click", function() {
    var a = Math.round(Math.random() * 255 + 1);
    var b = Math.round(Math.random() * 255 + 1);
    var c = Math.round(Math.random() * 255 + 1);
    console.log(a);
    document.body.style.backgroundColor = "rgb(" + a + ", " + b + "," + c + ")";
})

document.body.addEventListener('mousemove', function(e) {
    const mX = Math.round(e.clientX / innerWidth * 255)
    console.log(mX);
    const mY = Math.round(e.clientY / innerWidth * 255);
    console.log(mY);
    document.body.style.backgroundColor = "rgb(" + mY + " ," + mX + ",100)"
});