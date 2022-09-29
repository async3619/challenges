function solution([a, op, b]: string[]) {
    const [x, y] = [BigInt(a), BigInt(b)];
    if (op.at(0) === "+") {
        console.log((x + y).toString());
    } else {
        console.log((x * y).toString());
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
