function solution([input]: string[]) {
    const [h, m] = input.split(" ").map(p => parseInt(p));
    let sum = h * 60 + m - 45;
    if (sum < 0) {
        sum = 24 * 60 + sum;
    }

    console.log(Math.floor(sum / 60), sum % 60);
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
