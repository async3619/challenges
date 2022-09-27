function solution([input]: string[]) {
    const target = input.split(" ").map(i => parseInt(i));
    const uniq = target.filter((v, i, a) => a.indexOf(v) === i);
    const dc = 4 - uniq.length;

    if (dc === 1) {
        console.log(Math.max(...target) * 100);
    } else if (dc === 2) {
        console.log(1000 + uniq.filter(v => target.filter(t => t === v).length > 1)[0] * 100);
    } else {
        console.log(10000 + uniq[0] * 1000);
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
