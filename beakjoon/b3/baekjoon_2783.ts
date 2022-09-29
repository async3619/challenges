function solution([pivot, , ...data]: string[]) {
    const p = pivot.split(" ").map(p => parseInt(p));
    console.log(
        Math.min(
            ...[p, ...data.map(n => n.split(" ").map(n => parseInt(n)))]
                .map(([price, weight]) => price / weight)
                .map(p => p * 1000),
        ).toFixed(2),
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
