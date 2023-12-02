require("../utils")
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n")
print(
  input
    .map((l, i) =>
      l
        .split(": ")[1]
        .split("; ")
        .map((l) => {
          const balls = l.split(", ").map((x) => {
            let ball = x.split(" ")
            return {
              count: +ball[0],
              colour: ball[1],
            }
          })
          return !balls.some(
            (ball) =>
              (ball.colour === "red" && ball.count > 12) ||
              (ball.colour === "green" && ball.count > 13) ||
              (ball.colour === "blue" && ball.count > 14)
          )
        })
        .every(set => set) ? i+1 : 0
    )
    .sum()
)
