function solution([input]: string[]) {
    const v = input.split(" ").map(p => parseInt(p));
    if (v[0] !== 1 && v[0] !== 8) {
        console.log("mixed");
        return;
    }

    for (let i = 0; i < v.length; i++) {
        if (v[0] !== 8 && v[i] !== i + 1) {
            console.log("mixed");
            return;
        } else if (v[0] === 8 && v[i] !== 8 - i) {
            console.log("mixed");
            return;
        }
    }

    console.log(v[0] === 1 ? "ascending" : "descending");
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
