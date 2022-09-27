const f = (h: number, m: number, s: number) => h * 60 * 60 + m * 60 + s;

function solution(input: string[]) {
    const data = input.map(line => line.split(" ").map(l => parseInt(l)));
    for (let i = 0; i < data.length; i++) {
        const [sh, sm, ss, eh, em, es] = data[i];
        const s = f(sh, sm, ss);
        const e = f(eh, em, es);
        const d = e - s;

        const th = Math.floor(d / 60 / 60);
        const tm = Math.floor((d - th * 60 * 60) / 60);
        const ts = d - tm * 60 - th * 60 * 60;

        console.log(th, tm, ts);
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
