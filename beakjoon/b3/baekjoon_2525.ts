function solution([ct, d]: string[]) {
    const [h, m] = ct.split(" ").map(p => parseInt(p));
    const dm = parseInt(d);
    const sum = h * 60 + m + dm;

    const nh = Math.floor(sum / 60) % 24;
    const nm = sum % 60;

    console.log(nh, nm);
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
