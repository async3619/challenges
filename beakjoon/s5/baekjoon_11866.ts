function solution([input]: string[]) {
    const [n, k] = input.split(" ").map(p => parseInt(p));
    const queue = [...new Array(n)].map((_, i) => i + 1);

    const res: number[] = [];
    for (let i = 0; ; i++) {
        if (queue.length === 0) {
            break;
        }

        const n = queue.shift();
        if ((i + 1) % k === 0) {
            res.push(n);
            continue;
        }

        queue.push(n);
    }

    console.log(`<${res.join(", ")}>`);
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
