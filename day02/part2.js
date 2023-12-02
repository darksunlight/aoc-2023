require("../utils")
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n")
print(
  input.map(l => {
    const cubes = l
      .split(": ")[1]
      .split("; ")
      .map((l) => {
        return l.split(", ").map((x) => {
          let ball = x.split(" ")
          return {
            count: +ball[0],
            colour: ball[1],
          }
        })
      })
      .flat()
    let max = ["red", "green", "blue"].map(c => cubes.filter(cube => cube.colour === c).sort((a, b) => b.count - a.count)[0].count)
    return max[0] * max[1] * max[2]
  }).sum()
)
