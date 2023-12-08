require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n\n");
const directions = [...input[0]];
const nodes = Object.fromEntries(input[1].split("\n").map(l => {
    let [key, neighbours] = l.split(" = ")
    neighbours = neighbours.slice(1, -1).split(", ")
    return [key, neighbours];
}));
let current = "AAA";
let count = 0;
while (current != "ZZZ") {
    const direction = directions[count % directions.length];
    current = nodes[current][direction === "L" ? 0 : 1];
    count++;
}
print(count);