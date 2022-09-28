function solution([cc, vc]: string[]) {
    const a = parseInt(cc);
    const [b, c] = vc.split(" ").map(t => parseInt(t));
    console.log(Math.min(a, Math.floor(b / 2) + c));
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
