function solution([input]: string[]) {
    const v = input
        .split(" ")
        .map(p => parseInt(p))
        .sort((a, b) => a - b);

    const delta = Math.min(Math.abs(v[0] - v[1]), Math.abs(v[1] - v[2]));
    for (let i = 0, c = v[0]; i < v.length + 1; i++) {
        if (c !== v[i]) {
            console.log(c);
            return;
        }

        c += delta;
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
