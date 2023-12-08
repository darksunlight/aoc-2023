require("../utils");
const diff = (a, b) => a.map((v, i) => v - b[i])

const labels = [..."AKQJT98765432"].reverse();
const types = ["Five of a kind", "Four of a kind", "Full house", "Three of a kind", "Two pair", "One pair", "High card"];
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n").map(x => {
    const l = x.split(" ");
    const hand = [...l[0]].map(c => labels.indexOf(c));
    const set = new Set(hand);
    let type = -1;
    if (set.size === 1) {
        type = types.indexOf("Five of a kind");
    } else if (set.size === 5) {
        type = types.indexOf("High card");
    } else if (set.size === 4) {
        type = types.indexOf("One pair");
    }
    else if (set.size === 2) {
        if (hand.some(v => hand.filter(x => x === v).length === 4)) {
            type = types.indexOf("Four of a kind");
        } else {
            type = types.indexOf("Full house");
        }
    } else {
        if (hand.some(v => hand.filter(x => x === v).length === 3)) {
            type = types.indexOf("Three of a kind");
        } else {
            type = types.indexOf("Two pair");
        }
    }

    return {
        hand,
        bid: +l[1],
        set,
        type,
    };
});
const output = input.sort((a, b) => {
    if (a.type === b.type) {
        return diff(a.hand, b.hand).filter(x => x != 0)[0];
    }
    return b.type - a.type;
}).map((x, i) => x.bid * (i+1)).sum()
print(output)
