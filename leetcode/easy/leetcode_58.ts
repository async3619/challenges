function lengthOfLastWord(s: string): number {
    let len = 0;
    for (let i = s.length - 1; i >= 0; --i) {
        if (s[i] === " ") {
            if (len > 0) {
                return len;
            }
        } else {
            len++;
        }
    }

    return len;
}
