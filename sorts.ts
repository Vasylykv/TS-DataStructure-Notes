function insertionSort1 (inputArr: number[]): void {
  const n = inputArr.length;

  for (let i = 1; i < n; i++) {
    let current = inputArr[i];
    let j = i - 1;

    while(j > -1 && current < inputArr[i]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = current;
  }
}

function selectionSort1(inputArr: number[]): void {
  const n = inputArr.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min])
        min = j;
    }

    if (min != i) {
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
  }
}

function bubbleSort(inputArr: number[]): void {
  const n = inputArr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
}