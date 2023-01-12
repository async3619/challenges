function longestCommonPrefix(strs: string[]): string {
    const minLength = Math.min(...strs.map(str => str.length));

    let prefix = "";
    for (let i = 0; i < minLength; i++) {
        const firstCh = strs[0][i];
        let mismatch = false;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== firstCh) {
                mismatch = true;
            }
        }

        if (mismatch) {
            break;
        }

        prefix += firstCh;
    }

    return prefix;
}
