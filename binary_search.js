const isEqually = (guess, item) => guess === item;

function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = list[mid];

        if (isEqually(guess, item)) {
            return mid;
        }

        guess > item ? (high = --mid) : (low = ++mid);
    }

    return -1;
}

const array = [-3, -1, 1, 3, 5, 7, 9, 10];

console.log(binary_search(array, 3));
console.log(binary_search(array, -3));
console.log(binary_search(array, -1));
console.log(binary_search(array, 9));
console.log(binary_search(array, 11));
