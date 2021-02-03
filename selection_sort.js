function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];

        if (element < smallest) {
            smallest = element;
            smallestIndex = i;
        }
    }

    return smallestIndex;
}

function aelectionSort(arr) {
    const newArr = [];
    const removeElementsCount = 1;

    while (arr.length) {
        const smallestIndex = findSmallest(arr);
        newArr.push(arr[smallestIndex]);
        arr.splice(smallestIndex, removeElementsCount);
    }

    return newArr;
}

const array = [11, -5, -1, 1, 7, 5, 9, 10, 8];

console.log(aelectionSort(array));
