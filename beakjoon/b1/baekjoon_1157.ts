function solution([input]: string[]) {
    const map: Record<string, number> = {};
    input
        .split("")
        .map(c => c.toUpperCase())
        .forEach(c => (map[c] = c in map ? map[c] + 1 : 1));

    const entries = Object.entries(map).sort(([, a], [, b]) => b - a);
    const hasDuplicates = entries.slice(1).find(([, c]) => c === entries[0][1]);
    if (hasDuplicates) {
        console.log("?");
        return;
    }

    console.log(entries[0][0]);
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
