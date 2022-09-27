function solution([input]: string[]) {
    console.log((({ A: 4, B: 3, C: 2, D: 1, F: 0 })[input[0]] + (({ "+": 0.3, "-": -0.3 })[input[1]] || 0)).toFixed(1));
}

(callback => {
    if (typeof process !== "undefined" && "env" in process && "arguments" in process.env && process.env.arguments) {
        solution(["A0"]);
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
