const array = [];
const objects = {};

for(i = 0; i < 5000000; i++) {
    const data = {
        id: i,
        value: i
    };

    array.push(data);
    objects[i] = data;
}

// console.time('array');
// let id = 4511545;
// const dataReplace = array.find((item) => {
//     return item.id === id;
// });

// dataReplace.values = 'test';

// console.timeEnd('array');



// console.time('objects');
// const dataReplace2 = objects[id];
// dataReplace2.values = 'test';
// console.timeEnd('objects');


// console.time('array');

// array.unshift({
//     id: 5000000,
//     value: 5000000,
// });

// console.timeEnd('array');

// console.time(objects);

// objects[5000000] = {
//     id: 5000000,
//     value: 5000000,
// };

// console.timeEnd(objects);


console.time('array');

const index = array.findIndex((item) => {
    return item.id === 4521845;
});

array.splice(index, 1);

console.timeEnd('array');



console.time(objects);

delete objects[4521845];

console.timeEnd(objects);
