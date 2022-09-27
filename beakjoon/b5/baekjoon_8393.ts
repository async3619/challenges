function solution([input]: string[]) {
    const a = parseInt(input, 10);
    console.log(
        new Array(a)
            .fill(null)
            .map((_, i) => i + 1)
            .reduce((a, b) => a + b, 0),
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
