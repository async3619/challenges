const fc: number[] = [];
const factorial = n => {
    if (n == 0 || n == 1) return 1;
    if (fc[n] > 0) return fc[n];
    return (fc[n] = factorial(n - 1) * n);
};

function solution([input]: string[]) {
    const [n, k] = input.split(" ").map(p => parseInt(p));

    console.log(factorial(n) / (factorial(k) * factorial(n - k)));
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
