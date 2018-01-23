function hanoi(n: number, source: string, temp: string, destination: string): void {
    if (n === 1) {
        move(n, source, destination);
        return;
    }

    hanoi(n - 1, source, destination, temp);

    move(n, source, destination);

    hanoi(n - 1, temp, source, destination);
}

function move(n: number, source: string, destination: string): void {
    console.log(`move ${n} from ${source} to ${destination}`);
}

hanoi(4, 'A', 'B', 'C');
