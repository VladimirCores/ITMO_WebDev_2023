console.log("> Example 42");

function shoutBeans() {
  return function () {
    beans = "moth";
    console.log("> \t (closure) shoutBeans: beans.toUpperCase() =", beans.toUpperCase());
  };
}

function showMeLastCall() {
  let lastCallTime;
  return function () {
    console.log(lastCallTime ? `Last call: ${lastCallTime}` : `First call`);
    lastCallTime = new Date().toString();
  };
}

const lastCall = showMeLastCall();
setInterval(lastCall, 1000);

// let loudBeans = shoutBeans();
// loudBeans(); // 'MOTH'
// console.log('> \t : beans =', beans); // 'moth'
