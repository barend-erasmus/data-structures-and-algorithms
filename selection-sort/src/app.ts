function selectionSort(arr: any[]) {

    let minIndex: number = 0;
    let temp: number = 0;

    for (let i = 0; i < arr.length - 1; i ++) {

        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (i !== minIndex) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

console.log(selectionSort([20, 10, 50, 40, 15, 55, 5]));
