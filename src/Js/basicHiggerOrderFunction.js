let input = [
  {
    name: "Laptop",
    price: 10000,
  },
  {
    name: "Mouse",
    price: 20,
  },
];

function processProducts() {
  input.forEach((e) => {
    if (e.price > 50) {
      console.log(`${e.name} is above $50`);
    } else {
      console.log(`${e.name} is below $50`);
    }
  });
}

processProducts();
