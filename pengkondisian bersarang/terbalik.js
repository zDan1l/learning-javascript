var output = "";
var output2 = "";
for (var a = 5; a >= 0; a--) {
    for (c = 5; c > a; c--) {
        output += " "
    }
    for (b = 0; b <= a; b++) {
        output += "*"
    }

    output += "\n"
}
console.log(output);