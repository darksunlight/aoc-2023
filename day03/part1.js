require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
const numbers = [];
const symbols = [];
input.map((l, i) => {
    [...l].map((char, j) => {
        if (![..."0123456789."].includes(char)) symbols.push([i, j])
    });
    [...l.matchAll(/(\d+)/g)].map(num => {
        numbers.push([i, num.index, num[1].length, +num[1]])
    });
})
// print(numbers)
// print(symbols)
const sum = numbers.filter(([ny, nx, nl, num]) => {
    return symbols.some(([y, x]) => {
        return [y-1, y, y+1].some(i => {
            return i < -1 || i >= input.length || [x-1, x, x+1].some(j => {
                return j < -1 || j >= input[0].length || (i == ny && Array.from({length:nl}, (_, i) => nx+i).includes(j));
            });
        });
    });
}).reduce((a,[,,,n]) => a+n, 0);
print(sum);
