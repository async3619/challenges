function solution([lc, ...rest]: string[]) {
    const lineCount = parseInt(lc, 10);
    for (let i = 0; i < lineCount; i++) {
        const tokens = rest[i].trim().split("");
        console.log(tokens[0] + tokens.at(-1));
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
