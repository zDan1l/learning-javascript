var output = "";
for (var a = 10; a >= 1; a--) {
    for (var b = 1; b <= 20; b++) {
        if (a % 2 == 0) {
            if (b % 2 == 1) {
                output += "#"
            } else if (b % 2 == 0) {
                output += " "
            }
        } else if (a % 2 == 1) {
            if (b % 2 == 1) {
                output += " "
            } else if (b % 2 == 0) {
                output += "#"
            }
        }

    }
    output += "\n"
}
console.log(output)