function isRepeat(str: string, word: string) {
    while (true) {
        if (!str) {
            break;
        }

        if (!str.startsWith(word)) {
            return false;
        }

        str = str.slice(word.length);
    }

    return true;
}

function gcdOfStrings(str1: string, str2: string): string {
    const shortestString = str1.length > str2.length ? str2 : str1;
    let base = shortestString;
    while (base) {
        if (!base) {
            break;
        }

        if (isRepeat(str1, base) && isRepeat(str2, base)) {
            return base;
        }

        base = base.slice(0, base.length - 1);
    }

    return base;
}
