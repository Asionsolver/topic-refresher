const array = [];
const object = {};

for(i = 0; i < 5000000; i++) {
    const data = {
        id: i,
        value: i
    };

    array.push(data);
    object[i] = data;
}

// console.time('array');
// let id = 4511545;
// const dataReplace = array.find((item) => {
//     return item.id === id;
// });

// dataReplace.values = 'test';

// console.timeEnd('array');



// console.time('object');
// const dataReplace2 = object[id];
// dataReplace2.values = 'test';
// console.timeEnd('object');