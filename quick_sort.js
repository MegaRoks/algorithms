const isArray = (arr) => arr instanceof Array;
const isEnoughLingth = (arr) => arr.length < 3;

function quickSort(arr) {
    if (!isArray(arr)) {
        return arr;
    }

    if (isEnoughLingth(arr)) {
        return arr;
    } else {
        const mind = Math.floor(arr.length / 2);
        const pivot = arr[mind];

        arr.splice(mind, 1);

        const less = arr.filter((item) => item <= pivot && item);
        const greater = arr.filter((item) => item > pivot && item);

        return quickSort(less).concat([pivot], quickSort(greater));
    }
}

const arr = [1, 5, 7, 0, 12, 3, -1, -9, 11, 145, 87];
console.log(quickSort(arr));
console.log(quickSort('string'));
