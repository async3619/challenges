function solution([, ...data]: string[]) {
    for (const input of data) {
        const [x, y, z] = input.split(" ").map(p => parseInt(p));
        let cnt = 0;

        for (let a = 1; a <= x; a++) {
            for (let b = 1; b <= y; b++) {
                for (let c = 1; c <= z; c++) {
                    const n = a % b;
                    const m = b % c;
                    const o = c % a;
                    if (n === m && m === o && o === n) {
                        ++cnt;
                    }
                }
            }
        }

        console.log(cnt);
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
