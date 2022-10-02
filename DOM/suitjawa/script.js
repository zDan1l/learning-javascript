// dapatkan pilihan user
const pGajah = document.querySelector('.gajah');
// dapatkan pilihan computer
function getPilihanComputer() {
    var comp = (Math.random());
    if (comp <= 0.34) return 'gajah';
    if (comp <= 0.65 && comp > 0.34) return 'orang';
    return 'semut';
}
// tentukan rules dan aturan
function getHasil(comp, user) {
    if (comp == user) return 'SERI!';
    if (user == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (user == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    if (user == 'gajah') return (comp == 'semut') ? 'KALAH!' : 'MENANG!';
}
// cetak hasil
const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(e) {
    e.addEventListener('click', function() {
        var pilUser = e.className;
        const pilComp = getPilihanComputer();
        const imgComp = document.querySelector('.computer img');
        imgComp.setAttribute('src', pilComp + '.jpg')
        const hasil = getHasil(pilComp, pilUser);
        const info = document.querySelector('.hasil');
        info.innerHTML = hasil;
        skor(hasil);
    })
});

function skor(w) {
    const skorUser = document.querySelector('.skor-user');
    const skorComp = document.querySelector('.skor-comp');
    for (var i = 0; w == "MENANG!"; i++) {
        var j = i + 1;
        console.log(j)

    }
    return j;
}
// cetak skor