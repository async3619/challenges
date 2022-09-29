function solution([input]: string[]) {
    const [a, b] = input.split(" ").map(p => parseInt(p));

    // b = ceil(x / a)
    const max = b * a;
    for (let x = max; x > 0; --x) {
        const v = Math.ceil((x - 1) / a);
        if (v < b) {
            console.log(x);
            return;
        }
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
