function solution([input]: string[]) {
    const n = parseInt(input);
    const a: string[] = [];
    for (let i = 0; i < n; i++) {
        const aa: string[] = [];
        for (let j = 0; j < n - i - 1; ++j) {
            aa.push(" ");
        }

        aa.push(...new Array(i * 2 + 1).fill("*"));
        a.push(aa.join(""));
    }

    console.log(a.join("\n"));
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
