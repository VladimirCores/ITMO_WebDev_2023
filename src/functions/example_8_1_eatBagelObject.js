console.log('> Example 8.1');

let bagels = { number: 5, color: 'red', arr: [] };

function eatBagelObject(input = { count: 0 }) {
  input.number -= 1;
  if (input.number === 0) {
    console.log('> \t -> eatBagel: Oh nO, Out Of bagles!');
  } else {
    console.log(`> \t -> eatBagel: Yummy. There are ${input.number} left!`);
  }
}

eatBagelObject();
eatBagelObject(bagels);
console.log('> \t : input =', bagels);
