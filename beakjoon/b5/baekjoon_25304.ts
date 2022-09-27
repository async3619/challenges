function solution([t, , ...rest]: string[]) {
    console.log(
        rest
            .map(item => item.split(" ").map(p => parseInt(p)))
            .map(([p, c]) => p * c)
            .reduce((a, b) => a + b, 0) === parseInt(t)
            ? "Yes"
            : "No",
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
