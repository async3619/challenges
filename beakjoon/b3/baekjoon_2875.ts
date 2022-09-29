function solution([input]: string[]) {
    let [f, m, k] = input.split(" ").map(p => parseInt(p));

    const a: number[] = [];
    for (let i = 0; i <= k; i++) {
        const c = [i, k - i];
        if (f < c[0] || m < c[1]) {
            continue;
        }

        const [nf, nm] = [f - c[0], m - c[1]];
        const tc = Math.min(Math.floor(nf / 2), nm);
        a.push(tc);
    }

    console.log(Math.max(...a));
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
