require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
print(input.map(l => {
    let [winning, bought] = l.split(": ")[1].split(" | ");
    winning = [...winning.matchAll(/\d+/g)].map(m => +m[0]);
    bought = [...bought.matchAll(/\d+/g)].map(m => +m[0])
    const matches = bought.filter(n => winning.includes(n)).length;
    return matches > 0 ? (1 << matches - 1) : 0
}).sum())