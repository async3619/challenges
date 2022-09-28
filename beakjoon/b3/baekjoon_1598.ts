function solution([input]: string[]) {
    const [f, t] = input.split(" ").map(p => parseInt(p) - 1);
    const [fx, fy] = [Math.floor(f / 4), f % 4];
    const [tx, ty] = [Math.floor(t / 4), t % 4];

    console.log(Math.abs(fx - tx) + Math.abs(fy - ty));
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
