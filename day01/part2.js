require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
const numbers = [, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
print(input.map(x => {
    let num = [...x.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g)];
    let first = num[0][1];
    let last = num[num.length - 1][1];
    if (isNaN(+first)) {
        first = numbers.indexOf(first);
    }
    if (isNaN(+last)) {
        last = numbers.indexOf(last);
    }
    return +`${first}${last}`
}).sum())