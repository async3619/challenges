function solution([input]: string[]) {
    const n = parseInt(input);
    // n + 10
    if (n % 10 === 0) {
        console.log(10 + Math.floor(n / 100));
        return;
    }

    // [1~10] + n
    console.log(Math.floor(n / 10) + (n % 10));
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
