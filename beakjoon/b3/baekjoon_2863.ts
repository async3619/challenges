const rotate = (n: number, arr: number[][], size = arr.length) => {
    for (let i = 0; i < n; i++) {
        const res = [...new Array(size)].map(() => new Array(size));
        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                res[x][size - y - 1] = arr[y][x];
            }
        }

        arr = res;
    }

    return arr;
};

const cal = (n: number[][]) => n[0][0] / n[1][0] + n[0][1] / n[1][1];

function solution(input: string[]) {
    const n = input.map(p => p.split(" ").map(p => parseInt(p)));

    let max = 0;
    let mi = 0;
    for (let i = 0; i < 4; ++i) {
        const val = cal(rotate(i, n));
        if (val > max) {
            max = val;
            mi = i;
        }
    }

    console.log(mi);
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
