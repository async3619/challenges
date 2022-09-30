function solution([, ...input]: string[]) {
    const items = input.map(p => parseInt(p));
    const stack: number[] = [];
    const log: string[] = [];

    let n = 1;
    const push = () => {
        stack.push(n);
        log.push("+");
        n++;
    };

    const pop = () => {
        const v = stack.pop();
        log.push("-");

        return v;
    };

    for (const item of items) {
        if (!stack.includes(item)) {
            if (n > item) {
                console.log("NO");
                return;
            }

            for (let i = n - 1; i < item; i++) {
                push();
            }
        }

        if (stack.at(-1) !== item) {
            console.log("NO");
            return;
        }

        if (stack.at(-1) === item) {
            pop();
        }
    }

    console.log(log.join("\n"));
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
