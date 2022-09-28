function solution(input: string[]) {
    const items = input.map(p => p.split(" ").map(n => parseInt(n)));

    let n = 0,
        m = 0;
    for (const [o, i] of items) {
        n += i - o;
        m = Math.max(m, n);
    }

    console.log(m);
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
