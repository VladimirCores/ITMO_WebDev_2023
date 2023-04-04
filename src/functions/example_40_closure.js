console.log('> Example 40');

let beans = 'peanut';

function shoutBeans() {
  let beans = 'green';

  return function () {
    let beans = 'red';
    console.log('> \t (closure) beans.toUpperCase() =', beans.toUpperCase());
  };
}

let loudBeans = shoutBeans();

loudBeans();

// example_40_closure.js:10 Uncaught TypeError: Cannot read properties of undefined (reading 'beans')

// this.beans = beans;
//
// loudBeans();

/*
 * function shoutBeans() {
 *   let beans;
 *   beans = 'green';
 *
 *   return function() {
 *   let beans;
 *   beans = 'red';
 *     console.log(beans.toUpperCase());
 *   }
 * }
 * let beans;
 * beans = 'peanut';
 *
 * let loudBeans;
 * loudBeans = shoutBeans();
 *
 * loudBeans();
 */
