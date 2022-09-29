function solution([dd, p]: string[]) {
    const [a, b, c, d] = dd.split(" ").map(p => parseInt(p));
    const items = p.split(" ").map(p => parseInt(p));

    items.forEach(t => {
        const x = t % (a + b);
        const y = t % (c + d);

        let sum = 0;
        if (x <= a && x > 0) {
            sum++;
        }

        if (y <= c && y > 0) {
            sum++;
        }

        console.log(sum);
    });
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
