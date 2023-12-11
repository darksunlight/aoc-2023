require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8");
const pipes = input.split("\n").map(x => [...x]);
const startingIndex = input.replaceAll(/\s/g, "").indexOf("S");
const sIndices = [Math.floor(startingIndex / pipes[0].length), startingIndex % pipes[0].length];
let [curY, curX] = sIndices;
const loop = [`${curY},${curX}`];
const visited = [`${curY},${curX}`];

if (curY > 0 && [..."|7F"].includes(pipes[curY-1][curX])) {
    curY -= 1;
} else if (curX > 0 && [..."-LF"].includes(pipes[curY][curX-1])) {
    curX -= 1;
} else if (curY < pipes.length-1 && [..."|JL"].includes(pipes[curY+1][curX])) {
    curY += 1;
} else if (curX < pipes[0].length-1 && [..."-J7"].includes(pipes[curY][curX+1])) {
    curX += 1;
}
loop.push(`${curY},${curX}`);
visited.push(`${curY},${curX}`);

const n = "|7F";
const w = "-LF";
const s = "|JL";
const e = "-J7";
const compat = {
    "|": [n, "", s, ""],
    "-": ["", w, "", e],
    "L": [n, "", "", e],
    "J": [n, w, "", ""],
    "7": ["", w, s, ""],
    "F": ["", "", s, e]
}

while (parseInt(loop.at(-1).split(",")[0]) !== sIndices[0] || parseInt(loop.at(-1).split(",")[1]) !== sIndices[1]) {
    let [curY, curX] = loop.at(-1).split(",").map(x => +x);
    const nextPipes = compat[pipes[curY][curX]];
    if (curY > 0 && [...nextPipes[0]].includes(pipes[curY-1][curX]) && !visited.includes(`${curY-1},${curX}`)) {
        curY -= 1;
    } else if (curX > 0 && [...nextPipes[1]].includes(pipes[curY][curX-1]) && !visited.includes(`${curY},${curX-1}`)) {
        curX -= 1;
    } else if (curY < pipes.length-1 && [...nextPipes[2]].includes(pipes[curY+1][curX]) && !visited.includes(`${curY+1},${curX}`)) {
        curY += 1;
    } else if (curX < pipes[0].length-1 && [...nextPipes[3]].includes(pipes[curY][curX+1]) && !visited.includes(`${curY},${curX+1}`)) {
        curX += 1;
    } else if ([`${curY-1},${curX}`, `${curY},${curX-1}`, `${curY+1},${curX}`, `${curY},${curX+1}`].includes(loop[0])) {
        break;
    } else {
        loop.pop()
        if (!visited.includes(`${curY},${curX}`)) visited.push(`${curY},${curX}`);
        continue;
    }
    loop.push(`${curY},${curX}`);
    visited.push(`${curY},${curX}`);
}
const pretty = {
    "|": "│",
    "-": "─",
    "L": "└",
    "J": "┘",
    "7": "┐",
    "F": "┌",
    ".": " ",
    "S": "S"
}
pipes.forEach((pipe, i) => pipe.forEach((_, j) => {
    pipes[i][j] = pretty[pipes[i][j]];
}))
loop.forEach(node => {
    let [y, x] = node.split(",").map(x => +x);
    pipes[y][x] = `\x1b[43m${pipes[y][x]}\x1b[0m`
})
print(pipes.map(x => x.join('')).join('\n'))