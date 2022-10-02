var output = "";
var output2 = "";
for (var a = 10; a >= 1; a--) {
    for (var c = 1; c <= a; c++) {
        output += " ";
    }
    for (var b = 9; b >= a; b--) {
        output += "#"
    }
    for (var c = 10; c >= a; c--) {
        output += "#";
    }
    for (var c = 10; c >= a; c--) {
        output2 += " ";
    }
    for (var b = 1; b <= a; b++) {
        output2 += "#"
    }
    for (var c = 2; c <= a; c++) {
        output2 += "#";
    }
    output2 += "\n"
    output += "\n"
}
console.log(output + output2)