const a = "a".charCodeAt(0);
const z = "z".charCodeAt(0);
const _0 = "0".charCodeAt(0);
const _9 = "9".charCodeAt(0);

function isPalindrome(s: string): boolean {
    const ch: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i].toLowerCase();
        const cc = c.charCodeAt(0);

        if ((a <= cc && cc <= z) || (_0 <= cc && cc <= _9)) {
            ch.push(c);
        }
    }

    if (ch.length === 0) {
        return true;
    }

    if (ch.length % 2) {
        ch.splice(Math.floor(ch.length / 2), 1);
    }

    const k = Math.ceil(ch.length / 2);
    for (let i = k; i < ch.length; i++) {
        if (ch[i] !== ch[ch.length - i - 1]) {
            return false;
        }
    }

    return true;
}
