function solution([, ...input]: string[]) {
    const ch: string[] = [];
    for (let i = 0; i < input[0].length; i++) {
        let matched = true;
        for (let j = 1; j < input.length; j++) {
            if (input[0][i] !== input[j][i]) {
                matched = false;
                break;
            }
        }

        if (matched) {
            ch.push(input[0][i]);
        } else {
            ch.push("?");
        }
    }

    console.log(ch.join(""));
}

solution((global?.process?.env?.arguments || require("fs").readFileSync("/dev/stdin").toString()).trim().split("\n"));
