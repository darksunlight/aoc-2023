require("../utils");
let input = require("fs").readFileSync("./test.txt", "utf-8").split("\n").map(x => [...x]);
const emptyRows = input.map((x, i) => [x, i]).filter(l => l[0].every(c => c === ".")).map(x => x[1]);
const emptyCols = input[0].map((x, i) => [i, input.every(l => l[i] === ".")]).filter(x => x[1]).map(x => x[0]);
// print(emptyRows, emptyCols);

// print(input.map(x => x.join('')).join('\n'))
// print("\n")
const ogGalaxies = [];
input.map((l, y) => {
    l.map((c, x) => {
        if (c === "#") {
            ogGalaxies.push([y, x])
        }
    })
});
print({ ogGalaxies, emptyRows, emptyCols });
emptyRows.reverse().map(row => {
    input.splice(row, 0, [...".".repeat(input[0].length)])
});
emptyCols.reverse().map(col => {
    input.map(l => {
        l.splice(col, 0, ".");
    })
});
// print(input.map(x => x.join('')).join('\n'))
const galaxies = [];
input.map((l, y) => {
    l.map((c, x) => {
        if (c === "#") {
            galaxies.push([y, x])
        }
    })
});
print({ galaxies })
print(galaxies.map(([gy, gx]) => {
    return galaxies.map(([oy, ox]) => {
       return Math.abs(oy-gy) + Math.abs(ox-gx)
    }).sum()
}).sum() / 2);
