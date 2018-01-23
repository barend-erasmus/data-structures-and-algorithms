function findNthPower(n: number, power: number) {
    if (power === 0) {
        return 1;
    }

    return n * findNthPower(n, power - 1);
}

console.log(findNthPower(6, 4));
