function solution([a, b]: string[]) {
    const [, m] = a.split(" ").map(p => parseInt(p));
    const data = b.split(" ").map(p => parseInt(p));

    let v = -1;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            for (let k = 0; k < data.length; k++) {
                if (j === k || i === k || i === j) {
                    continue;
                }

                const n = data[i] + data[j] + data[k];
                if (n > m || Math.abs(m - v) < Math.abs(m - n)) {
                    continue;
                }

                v = n;
            }
        }
    }

    console.log(v);
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
