function solution([, n, , m]: string[]) {
    const [nv, mv] = [n, m].map(p => p.split(" ").map(n => parseInt(n)));
    const ns = new Set(nv);
    console.log(mv.map(n => (ns.has(n) ? 1 : 0)).join("\n"));
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
