require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n\n");
let seeds = input[0].split(": ")[1].split(" ").map(x => +x);
input.slice(1).forEach(m => {
    const mappings = m.split("\n").slice(1).map(l => l.split(" ").map(x => +x))
    seeds = seeds.map(seed => {
        const match = mappings.find(mapping => mapping[1] <= seed && mapping[1] + mapping[2] > seed);
        return !match ? seed : (seed - match[1] + match[0])
    })
})
print(seeds.min())
