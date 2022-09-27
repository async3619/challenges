function solution(input: string[]) {
    console.log(input.map(line => line.split(" ").map(i => parseInt(i))).map(([a, b]) => a === 0 && b === 0 ? null : (a > b ? "Yes" : "No")).filter(a => a).join("\n"));
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
