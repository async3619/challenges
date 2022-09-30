function solution([input]: string[]) {
    const [a, b] = input.split(" ").map(p => parseInt(p));
    let gcd = 0;
    for (let i = Math.min(a, b); i > 0; i--) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
            console.log(gcd);
            break;
        }
    }

    console.log((a * b) / gcd);
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
