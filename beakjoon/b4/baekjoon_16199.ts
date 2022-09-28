function solution(input: string[]) {
    const [[y, m, d], [py, pm, pd]] = input.map(d => d.split(" ").map(t => parseInt(t)));

    let delta = 0;
    if (m * 30 + d > pm * 30 + pd) {
        delta = -1;
    }

    console.log(py - y + delta);
    console.log(py - y + 1);
    console.log(py - y);
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
