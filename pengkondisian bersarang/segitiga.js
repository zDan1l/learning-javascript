var output = "";
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
    output += "\n"
}
console.log(output)