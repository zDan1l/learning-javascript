// membuat kesempatan jadi tiga
var kesempatan = 3;
var score = ""
for (kesempatan; kesempatan >= 1; kesempatan--) {
    //menangkap inputan user
    var user = prompt("Tebak angka dari 1-10 \nKamu mempunyai " + kesempatan + " kesempatan untuk bermain!");
    //menangkap inputan computer
    //membuat bilangan random
    var comp = Math.round(Math.random() * 9 + 1);
    // membuat peraturan
    var hasil = "";
    if (comp == user) {
        hasil = "Hebat bisa menebak angka dengan benar"
        score += 1
    } else if (comp > user) {
        hasil = "Angka terlalu rendah";
        score = 0
    } else if (comp < user) {
        hasil = "Angka terlalu tinggi";
        score = 0
    } else {
        hasil = "inputan salah"
        score = 0
    }
    alert("Kamu menebak angka yaitu : " + user + "\nKomputer memilih angka : " + comp + "\nHasil : " + hasil)
        // menampilkan hasilnya

}
alert("Game Selesai" + "\nSCORE ANDA ADALAH " + score)