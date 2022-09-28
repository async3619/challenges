function solution([input]: string[]) {
    const v = input.split(" ").map(p => parseInt(p));
    if (v.reduce((a, b) => a + b, 0) >= 100) {
        console.log("OK");
        return;
    }

    console.log(["Soongsil", "Korea", "Hanyang"][v.indexOf(Math.min(...v))]);
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
