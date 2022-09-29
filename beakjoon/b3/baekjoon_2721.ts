const T = (n: number) => [...new Array(n)].map((_, i) => i + 1).reduce((a, b) => a + b, 0);
const W = (n: number) => [...new Array(n)].map((_, i) => (i + 1) * T(i + 2)).reduce((a, b) => a + b, 0);

function solution([, ...input]: string[]) {
    console.log(
        input
            .map(p => parseInt(p))
            .map(n => W(n))
            .join("\n"),
    );
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
