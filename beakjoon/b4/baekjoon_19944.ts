function solution([input]: string[]) {
    const [n, m] = input.split(" ").map(p => parseInt(p));
    if (m <= 2) {
        console.log("NEWBIE!");
    } else if (m <= n) {
        console.log("OLDBIE!");
    } else {
        console.log("TLE!");
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
