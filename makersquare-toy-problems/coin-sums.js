/*
 In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

 1p
 2p
 5p
 10p
 20p
 50p
 £1 (100p)
 £2 (200p)
 Given a given number of pence, return the possible number of ways someone could make change.

 It is possible to make 5 pence in the following ways:

 5 * 1p

 3 * 1p + 1 * 2p

 1 * 1p + 2 * 2p

 1 * 5p
 In other words, find all the possible combinations of coins that sum to a given pence value.


 */

var coinSums = (function(){
  var coins = [200,100,50,20,10,5,2,1];
  cache = {};

  return function(total, coins2) {
    var argsStr = JSON.stringify(arguments);
    if(cache.hasOwnProperty(argsStr)) {return cache[argsStr];}

    coins2 = coins2 || coins;
    var numberOfLargestCoin = Math.floor(total / coins2[0]);
    if(2 === coins2.length) {return numberOfLargestCoin + 1;}

    var sum = 0;
    for(var i = 0; i <= numberOfLargestCoin; i++){
      sum += coinSums(total - coins2[0]*i, coins2.slice(1));
    }

    return cache[argsStr] = sum;
  };
})();

// console.log(coinSums(75))



// NON-CACHING VERSION
//var coinSums = function(total, coins2) {
  //var coins = [200,100,50,20,10,5,2,1];
//  var argsStr = JSON.stringify(arguments);
//
//  coins2 = coins2 || coins;
//  var numberOfLargestCoin = Math.floor(total / coins2[0]);
//  if(2 === coins2.length) {return numberOfLargestCoin + 1;}
//
//  var sum = 0;
//  for(var i = 0; i <= numberOfLargestCoin; i++){
//    sum += coinSums(total - coins2[0]*i, coins2.slice(1));
//  }
//
//  return sum;
//};


console.log(coinSums(75));
