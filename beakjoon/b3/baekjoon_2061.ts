function solution([input]: string[]) {
    const [p, k] = input.split(" ").map(BigInt);
    for (let i = BigInt(2); i < k; ++i) {
        if (p % i === BigInt(0)) {
            console.log("BAD", i.toString());
            return;
        }
    }

    console.log("GOOD");
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
