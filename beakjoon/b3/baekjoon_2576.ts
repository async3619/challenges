function solution(input: string[]) {
    // ...
    const n = input.map(p => parseInt(p)).filter(n => n % 2);
    if (n.length <= 0) {
        console.log(-1);
        return;
    }

    console.log(n.reduce((a, b) => a + b, 0));
    console.log(Math.min(...n));
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
