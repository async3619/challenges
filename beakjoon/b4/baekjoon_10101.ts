function solution(input: string[]) {
    const [a, b, c] = input.map(l => parseInt(l));
    const s = a + b + c;
    if (s !== 180) {
        console.log("Error");
        return;
    }

    if (a !== b && b !== c && a !== c) {
        console.log("Scalene");
        return;
    }

    if (a === 60 && b === 60 && c === 60) {
        console.log("Equilateral");
        return;
    }

    console.log("Isosceles");
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
