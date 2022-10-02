function hitung() {
    var hasil = 0;
    for (var a = 0; a < arguments.length; a++) {
        hasil += arguments[a]
    }
    return hasil;
}
var hasil = hitung(3, 4, 45, 45, 456, );
alert(hasil);