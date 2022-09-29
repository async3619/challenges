function solution([input]: string[]) {
    const n = parseInt(input);
    console.log(
        [...new Array(n)]
            .map((_, i) => {
                return 2 + Math.floor((i - 1) / 2);
            })
            .reduce((a, b) => a + b, 0) + 1,
    );
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
