var noAngkot = 1;
var jlmAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot; noAngkot <= jlmAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik')
    } else if (noAngkot === 8) {
        console.log('Angkot No.' + noAngkot + ' sedang lembur')
    } else {
        console.log('Angkot No.' + noAngkot + ' sedang tidak beroperasi')
    }
}