function solution([input]: string[]) {
    const data = input
        .split(" ")
        .map(p => parseInt(p))
        .sort((a, b) => a + b);

    console.log(Math.abs(data.shift() + data.at(-1) - (data.shift() + data.at(-2))));
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
