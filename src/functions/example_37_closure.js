console.log('> Example 37');

function shoutBeans(color = "RED") {
  return function (number) {
    console.log('\t (closure) beans.toUpperCase() =', color.toUpperCase() + ` number = ${number}`);
  };
}

let loudBeans = shoutBeans('BLUE');

loudBeans();
loudBeans(1);
loudBeans(3);

function multiplyBy(number) {
  return function(x) {
    return x * number;
  }
}

function welcomeWithStatus(status) {
  return
}
const multiBy10 = multiplyBy(11);
console.log(multiBy10(1))
console.log(multiBy10(2))
console.log(multiBy10(3))

const listenOnClick = () => {
  console.log(multiBy10(++clicks));
  if (clicks === 10) document.onclick = null;
}

let clicks = 0;
document.onclick = listenOnClick;

/*
 * function shoutBeans() {
 *   let beans
 *   beans = 'green'
 *
 *   return function() {
 *     console.log(beans.toUpperCase());
 *   }
 * }
 *
 * let loudBeans
 * loudBeans = shoutBeans();
 *
 * loudBeans();
 */
