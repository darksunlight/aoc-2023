require("../utils");
const input = require("fs").readFileSync("./input.txt", "utf-8").split("\n");
const matches = input.map(l => {
  let [winning, bought] = l.split(": ")[1].split(" | ");
  winning = [...winning.matchAll(/\d+/g)].map((m) => +m[0]);
  bought = [...bought.matchAll(/\d+/g)].map((m) => +m[0]);
  return bought.filter(n => winning.includes(n)).length;
})
const cardsMapping = matches.map((match, i) => {
  return [Array.from({ length: match }, (_, j) => i + j + 1).filter(x => x <= input.length - 1)];
});
cardsMapping.map(cardsMap =>
  cardsMap.map(mapping => {
    mapping.map(j => {
      cardsMapping[j].push(cardsMapping[j][0]);
    });
  })
);
print(cardsMapping.map(x => x.length).sum());
