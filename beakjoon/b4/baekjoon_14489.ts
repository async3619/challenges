function solution([bal, cp]: string[]) {
    const [a, b] = bal.split(" ").map(p => parseInt(p));
    const cpp = parseInt(cp) * 2;
    if (a + b < cpp) {
        console.log(a + b);
    } else {
        console.log(a + b - cpp);
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
