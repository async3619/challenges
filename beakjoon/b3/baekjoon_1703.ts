function solution(input: string[]) {
    const items = input.slice(0, input.length - 1).map(p => p.split(" ").map(n => parseInt(n)));
    for (const [, ...data] of items) {
        let n = 1;
        for (let i = 0; i < data.length; i += 2) {
            n *= data[i];
            n -= data[i + 1];
        }

        console.log(n);
    }
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
