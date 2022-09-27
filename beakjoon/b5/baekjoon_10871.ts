const i = (s: string) => s.split(" ").map(i => parseInt(i));

function solution([f, l]: string[]) {
    const t = i(f)[1],
        ns = i(l);

    console.log(ns.filter(n => t > n).join(" "));
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
