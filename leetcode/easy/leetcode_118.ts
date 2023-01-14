function generate(numRows: number): number[][] {
    const ret: number[][] = [[1], [1, 1], [1, 2, 1]];
    for (let i = ret.length; i < numRows; ++i) {
        const prev = ret[i - 1];
        const arr = [1];

        for (let j = 1, k = i; j < k; j++) {
            arr.push(prev[j] + prev[j - 1]);
        }

        arr.push(1);
        ret.push(arr);
    }

    if (numRows < ret.length) {
        return ret.slice(0, numRows);
    }

    return ret;
}
