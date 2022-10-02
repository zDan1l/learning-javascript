var dataKelas = [];
var dataNama = [];
var dataRumah = [];
// dataRumah = ['Pace', 'Nganjuk', 'Kediri']
dataNama = ['Ziyaa', 'Danil', 'Mubarok', dataRumah]
dataKelas = ['kelas1', 'kelas2', 'kelas3', dataNama]
    // console.log(dataKelas[3][3][0])

//Method Array
// 1. Join
// console.log(dataRumah.join(' - '))

// 2. Push & Pop
// dataRumah.push('Madiun')
// dataRumah.pop()
// dataRumah.pop()
// console.log(dataRumah.join(" - "))

// 3. Unshift & Shift 
// dataRumah.unshift('Madiun');
// dataRumah.shift();
// console.log(dataRumah.join("-"))


// 4. Splice
// dataRumah.splice(indexAwal, mauDihapusBerapa, tambahElemenApa1, tambahElemenApa2,...)
// dataRumah.splice(1, 0, 'Madiun', 'Pacitan', 'Bojonegoro')
// console.log(dataRumah.join(' - '))
// dataRumah = ['Pace', 'Nganjuk', 'Kediri'];
// 5. Slice
// dataRumah.slice(awalDiambil, batasDiambil)
// var dataRumah2 = dataRumah.slice(1, 3)
// console.log(dataRumah2.join(" - "))
// console.log(dataRumah.join(" - "))

// // 6. forEach
// var angka = [1, 2, 3, 4, 5, 6];
// var nama = ['Ziyaa', 'Danil', 'Mubarok', 'Ziyaa', 'Danil', 'Mubarok']
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke- ' + (i + 1) + " adalah " + e)
// });
// var angka2 = angka.map(function(e) {
//     return e * 5;
// })
// console.log(angka2.join(" - "));


// 7. sort
// var angka = [1, 2, 6, 3, 7, 9, 10, 4, 5, ];
// var tampil = angka.sort(function(a, b) {
//     return a - b;
// });
// console.log(tampil.join(" - "))

// 8. filter & find
// var angka = [1, 2, 6, 3, 7, 9, 10, 4, 5, ];
// var angka2 = angka.find(function(x) {
//     return x > 5;
// });
// console.log((angka2))