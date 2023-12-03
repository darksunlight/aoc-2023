require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
const numbers = [];
const symbols = [];
input.map((l, i) => {
    [...l].map((char, j) => {
        if (char === "*") {
            symbols.push([i, j])
        }
    });
    [...l.matchAll(/(\d+)/g)].map(num => {
        numbers.push([i, num.index, num[1].length, +num[1]])
    });
})
// print(numbers)
// print(symbols)
const sum = symbols.map(([y, x]) => {
    const gearRatios = numbers.filter(([ny, nx, nl, num]) => {
        return [y-1, y, y+1].some(i => {
            return i < -1 || i >= input.length || [x-1, x, x+1].some(j => {
                return j < -1 || j >= input[0].length || (i == ny && Array.from({length:nl}, (_, i) => nx+i).includes(j));
            });
        });
    });
    if (gearRatios.length !== 2) return 0;
    return gearRatios[0][3] * gearRatios[1][3];
}).sum();
print(sum);
