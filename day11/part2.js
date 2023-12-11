// I *really* should have seen this coming
require("../utils");
let input = require("fs").readFileSync("./input.txt", "utf-8").split("\n").map(x => [...x]);
const emptyRows = input.map((x, i) => [x, i]).filter(l => l[0].every(c => c === ".")).map(x => x[1]);
const emptyCols = input[0].map((x, i) => [i, input.every(l => l[i] === ".")]).filter(x => x[1]).map(x => x[0]);

let galaxies = [];
input.map((l, y) => {
    l.map((c, x) => {
        if (c === "#") {
            galaxies.push([y, x, y, x])
        }
    })
});
emptyRows.map((row, i) => {
    galaxies = galaxies.map(([y, x, oy, ox]) => {
        if (oy > row) return [y+999_999, x, oy, ox];
        return [y, x, oy, ox];
    })
});
emptyCols.map((col, i) => {
    galaxies = galaxies.map(([y, x, oy, ox]) => {
        if (ox > col) return [y, x+999_999, oy, ox];
        return [y, x, oy, ox];
    })
});
print(galaxies.map(([gy, gx]) => {
    return galaxies.map(([oy, ox]) => {
       return Math.abs(oy-gy) + Math.abs(ox-gx)
    }).sum()
}).sum() / 2);
