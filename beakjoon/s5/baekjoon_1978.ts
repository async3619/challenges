const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
    return num > 1;
};

function solution([, input]: string[]) {
    const n = input.split(" ").map(p => parseInt(p));
    console.log(n.filter(isPrime).length);
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
