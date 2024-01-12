function makeItem() {
  return {
    data: {
      item: {
        name: "shoes",
        size: {
          US: 8,
          EU: 41,
          BD: 26,
        },
      },
    },
    status: "Live",
  };
}

function makeArrayOfItem() {
  return {
    data: {
      item: [
        {
          name: "shoes",
          price: 100,
        },
        {
          name: "t-shirt",
          price: 50,
        },
        {
          name: "pants",
          price: 150,
        },
      ],
    },
    status: "Live",
  };
}


// const res = makeItem();
// console.log(res)

// nested object access. But this time we are using destructuring
// const size = res.data.item.size.US;
// console.log(size);

// const {data, status} = makeItem();
// console.log(data);
// console.log(status);

// const {data: {item}, status} = makeItem();
// console.log(item);

const {data: {item: name, size}, status} = makeItem();
console.log(size);
console.log(name);



// const { data: { item: { size: { US, EU, BD } } } } = makeItem();
// console.log(US);
// console.log(EU);
// console.log(BD);




