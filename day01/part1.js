require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
print(input.map(x => {
    let num = x.replaceAll(/[a-z]/gi, "");
    return +`${num[0]}${num[num.length - 1]}`
}).sum())