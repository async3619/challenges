const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
    return num > 1;
};

function solution([input]: string[]) {
    const [s, e] = input.split(" ").map(p => parseInt(p));
    const dic = new Set([
        ...new Array(e)
            .fill(0)
            .map((_, i) => i + 1)
            .filter(isPrime),
    ]);

    for (let i = s; i <= e; ++i) {
        if (dic.has(i)) {
            console.log(i);
        }
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
