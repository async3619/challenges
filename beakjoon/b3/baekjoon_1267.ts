function solution([, value]: string[]) {
    const fees: Array<(n: number) => number> = [
        n => {
            return (Math.ceil(n / 30) + 1) * 10;
        },
        n => {
            return (Math.ceil(n / 60) + 1) * 15;
        },
    ];
    const times = value.split(" ").map(p => parseInt(p));
    const sum = fees.map(p => times.map(p).reduce((a, b) => a + b, 0));
    if (sum[0] < sum[1]) {
        console.log("Y", sum[0]);
    } else if (sum[0] === sum[1]) {
        console.log("Y M", sum[0]);
    } else {
        console.log("M", sum[1]);
    }

    console.info(sum);
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
