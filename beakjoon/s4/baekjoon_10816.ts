function solution([, a, , b]: string[]) {
    const haystack = a.split(" ").map(p => parseInt(p)),
        needle = b.split(" ").map(p => parseInt(p));

    const cnt: Record<number, number> = {};
    for (let i = 0; i < haystack.length; i++) {
        if (!cnt[haystack[i]]) {
            cnt[haystack[i]] = 0;
        }

        cnt[haystack[i]]++;
    }

    let result: number[] = [];
    for (let i = 0; i < needle.length; i++) {
        result.push(cnt[needle[i]] || 0);
    }

    console.log(result.join(" "));
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
