var a = "";
var b = "";
var y = prompt("Masukkan Jumlah bintang?");
for (let i = 0; i < y; i++) {
    for (let j = 0; j < i; j++) {
        a += " ";
    }
    a += "#";
    for (let j = y - 1; j > i; j--) {
        a += " ";
    }
    for (let j = y - 1; j > i; j--) {
        a += " ";
    }
    // batas b
    for (let j = y - 1; j > i; j--) {
        b += " ";
    }
    b += "#";
    for (let j = 0; j < i; j++) {
        b += " ";
    }
    for (let j = 0; j < i; j++) {
        b += " ";
    }
    b += "#";
    b += "\n";
    a += "#";
    a += "\n";
};
console.log(a + b)