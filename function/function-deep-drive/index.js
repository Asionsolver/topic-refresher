// import sum from './sum.js';

// console.log(sum(3, 4));
// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i), 0);
//   }

//   let x = 0 && 'lws';
//     console.log(x)

// console.log(Boolean(0))

// class TaxCalculator {
//   static calculate(total) {
//     return total * 0.05;
//   }
// }

// console.log(TaxCalculator.calculate(100));

var Storm = function () {};
Storm.prototype.precip = 'rain';

var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';

var bob = new WinterStorm();
console.log(bob.precip);
