interface Array {
    sum(): Array;
    product(): Array;
    max(key?: string): Array;
    min(key?: string): Array;
    toInt(): Array<number>;
    sortAsc(): Array;
    sortDesc(): Array;
    windowed(size: number, step = 1, partialWindows = false): Array;
    chunks(size: number): Array;
    permute(): Array;
}

interface String {
    toInt(): number;
    lines(): string[];
}

interface Number {
    toChar(): string;
}

declare function print(...args: any[]): void;
declare function readInput(): string;
declare function readTInput(): string;
