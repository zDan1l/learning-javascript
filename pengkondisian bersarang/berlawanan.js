var output = "";
var output2 = "";
for (var a = 10; a > 0; a--) {
    for (var b = 0; b < a; b++) {
        output += "*";
    }
    output += "\n"
}
for (var d = 0; d < 10; d++) {
    for (e = 0; e <= d; e++) {
        output2 += "*";
    }
    output2 += "\n"
}

console.log(output + output2)