function solution(input: string[]) {
    const map: Record<string, number> = {};
    input
        .map(p => parseInt(p))
        .reduce((a, b) => a * b, 1)
        .toString()
        .split("")
        .forEach(c => (c in map ? map[c]++ : (map[c] = 1)));

    new Array(10)
        .fill(0)
        .map((_, i) => i)
        .forEach(n => console.log(map[n] || 0));
}

(callback => {
    if (typeof process !== "undefined" && "env" in process && "arguments" in process.env && process.env.arguments) {
        solution(process.env.arguments.split("\n"));
        return;
    }

    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    const input: string[] = [];
    rl.on("line", line => {
        input.push(line);
    }).on("close", function () {
        callback(input);
        process.exit();
    });
})(solution);
