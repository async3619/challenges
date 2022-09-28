function solution([input]: string[]) {
    const [x, y] = input.split(" ").map(p => parseInt(p));
    const [a, b] = [100 - x, 100 - y];
    const [c, d] = [100 - (a + b), a * b];
    const [q, r] = [Math.floor(d / 100), d % 100];

    console.log(a, b, c, d, q, r);
    if (d > 100) {
        console.log(q + c, r);
    } else {
        console.log(c, d);
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
