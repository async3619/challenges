function solution(input: string[]) {
    for (let item of input.slice(0, input.length - 1)) {
        const d = item.split(" ").map(p => parseInt(p));
        const l = Math.max(...d);

        d.splice(d.indexOf(l), 1);
        const [a, b] = d;
        const r = Math.pow(a, 2) + Math.pow(b, 2);
        if (r === Math.pow(l, 2)) {
            console.log("right");
        } else {
            console.log("wrong");
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
