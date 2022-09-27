function solution([input]: string[]) {
    const n = parseInt(input, 10);
    const outputBuffer: string[] = [];

    for (let i = 0; i < n; i++) {
        outputBuffer.push(new Array(i + 1).fill("*").join(""))
    }

    console.log(outputBuffer.join("\n"));
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
