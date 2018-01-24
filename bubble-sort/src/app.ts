function bubbleSort(arr: any[]) {

    let temp: number = 0;

    for (let i = 0; i < arr.length - 1; i ++) {

        for (let j = 0; j < arr.length - i - 1; j ++) {
            if (arr[j] > arr[j + 1]) {
               temp = arr[j];
               arr[j] = arr[j + 1];
               arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([20, 10, 50, 40, 15, 55, 5]));
