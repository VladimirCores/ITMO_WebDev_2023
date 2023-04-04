console.log('> Example 3');

let dessert = 'tart';

// let isFalse = '' || 0 || null || undefined || NaN;

if (dessert) {
  let dessert = 'cannoli';
  if (dessert.length < 5) {
    let dessert = 'ptichka';
    console.log('> \t : quick snack', dessert);
  } else {
    console.log('> \t : lengthy treat', dessert);
  }
} else {
  console.log('> \t : no dessert...');
}

console.log('original value:', dessert);

// Внутренние блоки имеют доступ к глобальному "споку", к переменной desert
// но новая локальная переменная с тем же именем "переписывает/перекрывает" (shadows)
// внешную переменную
