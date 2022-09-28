function solution([, ...input]: string[]) {
    const n = input.map(p => p.split(" ").map(n => parseInt(n)));
    let p = 1;
    for (const [from, to] of n) {
        if (from === p) {
            p = to;
        } else if (to === p) {
            p = from;
        }
    }

    console.log(p);
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
