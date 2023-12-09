require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
const historys = input.map(l => l.split(" ").map(x => +x))
print(historys.map(h => {
    let seq = h;
    let diffs = [];
    while (!seq.every(x => x === 0)) {
        seq = seq.map((x, i) => i < seq.length - 1 ? seq[i+1]-x : null).filter(x => x !== null);
        diffs.push([...seq]);
    }
    diffs = diffs.reverse();
    diffs.map((diff, i) => {
        if (i === 0) {
            return diff.push(0)
        }
        return diff.push(diff.at(-1) + diffs[i-1].at(-1))
    })
    return h.at(-1) + diffs.at(-1).at(-1);
}).sum());
