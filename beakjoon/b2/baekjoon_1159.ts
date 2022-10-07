function solution([, ...data]: string[]) {
    const result = data
        .map(s => s[0])
        .filter((v, i, a) => a.indexOf(v) === i)
        .filter(ch => data.filter(s => s[0] === ch).length >= 5);

    if (result.length) console.log(result.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join(""));
    else console.log("PREDAJA");
}

solution((global?.process?.env?.arguments || require("fs").readFileSync("/dev/stdin").toString()).trim().split("\n"));
