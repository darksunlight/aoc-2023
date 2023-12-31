Array.prototype.sum = function(val = 0) {
    return this.reduce((a, c) => a + c, val);
}
Array.prototype.product = function() {
    return this.reduce((a, c) => a * c, 1);
}
Array.prototype.max = function(key = "") {
    if (key === "") return Math.max(...this);
    return this.sort((a, b) => b[key] - a[key])[0][key];
};
Array.prototype.min = function(key = "") {
    if (key === "") return Math.min(...this);
    return this.sort((a, b) => a[key] - b[key])[0][key];
};
Array.prototype.toInt = function() {
    return this.map(x => +x);
}
Array.prototype.sortAsc = function() {
    return this.sort((a, b) => a - b);
}
Array.prototype.sortDesc = function() {
    return this.sort((a, b) => b - a);
}
Array.prototype.windowed = function(size, step = 1, partialWindows = false) {
    return Array.from(
        { length: Math.floor(this.length / step) - Math.ceil(size / step) + 1 + partialWindows },
        (_, i) => this.slice(i * step, i * step + size)
    )
}
Array.prototype.chunks = function(x) { // like last year I got this from https://stackoverflow.com/a/37826698
    return this.reduce((p, c, i) => {
        const ci = Math.floor(i / x);
        if (!p[ci]) p[ci] = [];
        p[ci].push(c);
        return p;
    }, []);
}
Array.prototype.permute = function() {
    var length = this.length,
        result = [this.slice()],
        c = new Array(length).fill(0),
        i = 1, k, p;
    while (i < length) {
        if (c[i] < i) {
            k = i % 2 && c[i];
            p = this[i];
            this[i] = this[k];
            this[k] = p;
            ++c[i];
            i = 1;
            result.push(this.slice());
        } else {
            c[i] = 0;
            ++i;
        }
    }
    return result;
}

global.readInput = function() {
    return require("fs").readFileSync('./input.txt', 'utf-8');
}
global.readTInput = function() {
    return require("fs").readFileSync('./test.txt', 'utf-8');
}
global.print = function(...args) {
    console.log(...args);
}
String.prototype.toInt = function() {
    return this.charCodeAt(0);
}
String.prototype.lines = function() {
    return this.split('\n');
}
Number.prototype.toChar = function() {
    return String.fromCharCode(this);
}