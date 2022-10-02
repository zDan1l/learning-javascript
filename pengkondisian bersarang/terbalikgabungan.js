var output = "";
var output2 = "";
var output3 = "";
var output4 = "";
for (var a = 5; a >= 0; a--) {

    for (d = 0; d <= a; d++) {
        output2 += " "
    }
    for (e = 5; e >= a; e--) {
        output2 += "*"
    }
    for (var b = 5; b >= a; b--) {
        output3 += " ";
    }
    for (var c = 0; c <= a; c++) {
        output3 += "*"
    }
    output2 += "\n";
    output3 += "\n";
}
console.log(output2 + output3);