function solution([input]: string[]) {
    const n = parseInt(input, 10);
    for (let i = 0; i < n; i++) {
        console.log(
            new Array(n)
                .fill(" ")
                .map((_, j) => (j < i + 1 ? "*" : " "))
                .reverse()
                .join(""),
        );
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
