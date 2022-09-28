function solution([, input]: string[]) {
    const v = input.split(" ").map(p => parseInt(p));
    let n = 0;
    let sum = 0;
    for (let i = 0; i < v.length; i++) {
        if (v[i]) {
            n++;
            sum += n || 1;
        } else {
            n = 0;
        }
    }

    console.log(sum);
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
