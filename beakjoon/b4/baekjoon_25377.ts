function solution([, ...data]: string[]) {
    const t = data
        .map(p => p.split(" ").map(t => parseInt(t)))
        .filter(([a, b]) => a < b)
        .map(([, b]) => b);

    if (!t.length) {
        console.log("-1");
        return;
    }

    console.log(Math.min(...t));
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
