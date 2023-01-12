function isValid(s: string): boolean {
    const closingMap = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        const isClosing = Boolean(closingMap[ch]);

        if (!isClosing) {
            stack.push(ch);
            continue;
        }

        const last = stack.at(-1);
        if (last !== closingMap[ch]) {
            return false;
        }

        stack.pop();
    }

    return !stack.length;
}
