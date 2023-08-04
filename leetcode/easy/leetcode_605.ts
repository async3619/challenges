function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (flowerbed.length === 1 && flowerbed[0] === 0) {
        return true;
    }

    let availableSpace = 0;
    let lastPlacedAt = -1;
    for (let i = 0; i < flowerbed.length; i++) {
        let pass = false;
        if (flowerbed[i] === 1) {
            continue;
        }

        if (i === 0) {
            pass = flowerbed[i + 1] === 0;
        } else if (i === flowerbed.length - 1) {
            pass = flowerbed[i - 1] === 0;
        } else {
            pass = flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0;
        }

        if (i > 0 && lastPlacedAt === i - 1) {
            pass = false;
        }

        if (pass) {
            availableSpace += 1;
            lastPlacedAt = i;
        }
    }

    return availableSpace >= n;
}
