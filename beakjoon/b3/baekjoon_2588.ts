function solution(input: string[]) {
    const [a, b] = input.map(p => parseInt(p));

    let c = b;
    let s = 0;
    let d = 0;
    while (c > 0) {
        const n = (c % 10) * a;
        s += n * Math.pow(10, d);

        c = Math.floor(c / 10);
        d++;

        console.log(n);
    }

    console.log(s);
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
