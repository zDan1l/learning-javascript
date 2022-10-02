var a = prompt('Disini kita hitung sisi dari kubus \nMasukkan sisi kubus 1')
var b = prompt('Disini kita hitung sisi dari kubus \nMasukkan sisi kubus 2')

function hitungVolume(a, b) {
    var c = a * a * a;
    var d = b * b * b;
    var hasil = c + d;
    return hasil;
}
alert("Hasil dari jumlah dua volume adalah : " + hitungVolume(a, b))