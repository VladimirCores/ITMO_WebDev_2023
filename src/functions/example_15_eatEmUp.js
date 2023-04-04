console.log('> Example 15');

let food = 'sushi';

function eatEmUp() {
  let sauce = ' soy';

  const f = function mixEmUp() {
    console.log('> \t -> eatEmUp -> mixEmUp: (food + sauce) =', food + sauce);
  }

  f();
}

eatEmUp();
