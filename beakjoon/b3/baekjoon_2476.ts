function solution([, ...data]: string[]) {
    console.log(
        Math.max(
            ...data
                .map(l => l.split(" ").map(p => parseInt(p)))
                .map(p => {
                    const uniq = p.filter((v, i, a) => a.indexOf(v) === i);
                    if (uniq.length === 1) {
                        return uniq[0] * 1000 + 10000;
                    } else if (uniq.length === 3) {
                        return Math.max(...uniq) * 100;
                    } else {
                        const l = p.filter(n => n === uniq[0]);
                        const r = p.filter(n => n === uniq[1]);
                        return (l.length > r.length ? l : r)[0] * 100 + 1000;
                    }
                }),
        ),
    );
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
