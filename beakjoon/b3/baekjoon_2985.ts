function solution([input]: string[]) {
    const [x, y, z] = input.split(" ").map(p => parseInt(p));
    const fn = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b, (a, b) => a / b];
    const ch = ["+", "-", "*", "/"];

    let fi;
    if ((fi = fn.findIndex(f => f(x, y) === z)) >= 0) {
        console.log(`${x}${ch[fi]}${y}=${z}`);
    } else if ((fi = fn.findIndex(f => x === f(y, z))) >= 0) {
        console.log(`${x}=${y}${ch[fi]}${z}`);
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
