function toBinary(n: number): number {
    if (n === 0) {
        return 0;
    }

    return n % 2 + 10 * toBinary(Math.floor(n / 2));
}

console.log(toBinary(13));
