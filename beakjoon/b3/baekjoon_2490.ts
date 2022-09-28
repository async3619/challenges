function solution(input: string[]) {
    const lines = input.map(l => l.split(" ").map(n => parseInt(n)));
    const m = ["A", "B", "C"];
    for (const line of lines) {
        let t = 0,
            b = 0;
        for (let i = 0; i < line.length; i++) {
            line[i] ? t++ : b++;
        }

        if (b === 4) {
            console.log("D");
        } else if (b === 0) {
            console.log("E");
        } else {
            console.log(m[b - 1]);
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
