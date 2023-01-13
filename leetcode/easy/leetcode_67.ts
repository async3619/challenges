function addBinary(a: string, b: string): string {
    const ml = Math.max(a.length, b.length);
    while (a.length < ml || b.length < ml) {
        if (a.length < ml) {
            a = "0" + a;
        }

        if (b.length < ml) {
            b = "0" + b;
        }
    }

    let ret = "";
    let t = 0;
    for (let i = ml - 1; i >= 0; --i) {
        let target = 0;
        const l = a[i];
        const r = b[i];

        if (l === r && l === "1") {
            target = 0;
            if (t) {
                target = 1;
                t--;
            }

            t++;
        } else if (l === "1" || r === "1") {
            target = 1;
            if (t) {
                target = 0;
            }
        } else if (t) {
            target = 1;
            --t;
        }

        ret = target + ret;
        if (!i && t) {
            ret = t + ret;
        }
    }

    return ret;
}
