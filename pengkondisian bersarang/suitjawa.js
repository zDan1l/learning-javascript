tanya = true;
while (tanya) { //menangkap inputan user
    var namaUser = prompt("Inputkan nama kamu okeyy??")

    var user = prompt('Halooo ' + namaUser + '\nPilih salah satu: gajah, semut, orang!');

    // menangkap inputan computer
    //membangkitkan bilangan random
    var comp = Math.random();
    if (comp <= 0.34) {
        comp = "gajah"
    } else if (comp <= 0.68 && comp >= 0.34) {
        comp = "semut"
    } else {
        comp = "orang"
    }
    //rules perbandingan pilihan
    var hasil = "";
    if (user == comp) {
        hasil = "SERI"
    } else if (user == "orang") {
        hasil = (comp == "gajah") ? "KALAH" : "MENANG";
    } else if (user == "semut") {
        hasil = (comp == "gajah") ? "MENANG" : "KALAH";
    } else if (user == "gajah") {
        hasil = (comp == "orang") ? "MENANG" : "KALAH";
    } else {
        hasil = "menginput pilihan yang salah"
    }
    //tampilkan hasil
    alert(namaUser + " memilih : " + user + "\nKomputer memilih : " + comp + "\nHasilnya adalah " + namaUser + " " + hasil);
    tanya = confirm("Main lagi??")
}
alert("Terimakasih " + namaUser)