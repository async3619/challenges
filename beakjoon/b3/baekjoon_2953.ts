const findMax = (a: number[]) => [Math.max(...a), a.indexOf(Math.max(...a))];

function solution(input: string[]) {
    const [v, i] = findMax(
        input.map(p =>
            p
                .split(" ")
                .map(n => parseInt(n))
                .reduce((a, b) => a + b, 0),
        ),
    );

    console.log(i + 1, v);
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
