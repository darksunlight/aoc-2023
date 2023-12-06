require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
const times = [...input[0].matchAll(/\d+/g)].map(x => +x[0])
const distances = [...input[1].matchAll(/\d+/g)].map(x => +x[0])
const races = times.map((t, i) => {
    return {
        time: t,
        dist: distances[i],
    };
});
let t = races.map(race => {
    const holds = Array.from({ length: race.time }, (_, i) => i+1)
    return holds.map(hold => (race.time - hold) * hold).filter(h => h > race.dist).length
});
print(t.product())