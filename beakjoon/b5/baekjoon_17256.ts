function solution(input: string[]) {
    const [l, r] = input.map(line => line.split(" ").map(p => parseInt(p)));
    console.log([r[0] - l[2], r[1] / l[1], r[2] - l[0]].join(" "));
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
