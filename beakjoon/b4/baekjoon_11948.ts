function solution(input: string[]) {
    const a = input.map(p => parseInt(p));
    console.log(
        a
            .slice(0, 4)
            .sort((a, b) => b - a)
            .slice(0, 3)
            .reduce((a, b) => a + b, 0) + Math.max(...a.slice(4)),
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
