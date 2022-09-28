function solution([input]: string[]) {
    console.log(
        (() => {
            const n = parseInt(input) % 8;
            if (n === 5 || n === 1) {
                return n;
            } else if (n === 0 || n === 2) {
                return 2;
            } else if (n === 3 || n === 7) {
                return 3;
            } else if (n === 4 || n === 6) {
                return 4;
            }
        })(),
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
