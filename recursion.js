const isArray = (item) => item instanceof Array;
const isObject = (item) => item instanceof Object;

function findBiggest(data) {
    if (!isArray(data) && !isObject(data)) {
        return data;
    }

    const newData = isArray(data) ? [] : {};

    for (let item in data) {
        if (isArray(item) || isObject(item)) {
            findBiggest(item);
        } else {
            newData[item] = data[item];
        }
    }

    return newData;
}

console.log('---------------- Array');
const dataArray = [100, 200, 300, 400, 500, [1, 2, 3, 4, 5, ['a', 'b', 'c', ' d', ' f']]];
const newDataArray = findBiggest(dataArray);
const copyDataArrya = dataArray;
copyDataArrya[5][2] = 30000000000000;
copyDataArrya[5][5][3] = 'dddddddddddddddddddddddd';
console.log(copyDataArrya === dataArray);
console.log(newDataArray === dataArray);
console.log('----------------------');

console.log('--------------- Object');
const dataObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            y: undefined,
        },
        f: [10, 20, 30, 40, 50],
        h: () => {},
    },
    g: null,
};
const newDataObject = findBiggest(dataObject);
const copyDataObject = dataObject;
copyDataObject.b.c = 2222222222222;
copyDataObject.b.c.y = 999999999999;
copyDataObject.b.f[2] = 300000000000;
console.log(copyDataObject === dataObject);
console.log(newDataObject === dataObject);
console.log('----------------------');

console.log('---------------- Other');
console.log(findBiggest('string'));
console.log(findBiggest(null));
console.log(findBiggest(20));
console.log(findBiggest(() => {}));
console.log('----------------------');
