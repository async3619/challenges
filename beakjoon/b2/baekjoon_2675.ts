function solution([, ...rest]: string[]) {
    for (const item of rest) {
        const tokens = item.split(" ");
        const r = parseInt(tokens[0]);
        const str = tokens[1].split("");
        const result: string[] = [];

        str.forEach(c => result.push(...new Array(r).fill(c)));
        console.log(result.join(""));
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
