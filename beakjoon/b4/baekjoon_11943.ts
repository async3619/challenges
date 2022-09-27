function solution([a, b]: string[]) {
    const [aa, ab] = a.split(" ").map(p => parseInt(p));
    const [ba, bb] = b.split(" ").map(p => parseInt(p));

    console.log(Math.min(aa + bb, ab + ba));
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
