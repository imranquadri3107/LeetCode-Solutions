//Stock Maximum Profit using array
// (1) Iterate through each number in the list.
// (2) At the ith index, get the i+1 index price and check if it is larger than the ith index price.
// (3) If so, set buy_price = i and sell_price = i+1. Then calculate the profit: sell_price - buy_price.
// (4) If a stock price is found that is cheaper than the current buy_price, set this to be the new buying price and continue from step 2.
// (5) Otherwise, continue changing only the sell_price and keep buy_price set.

// Time Complexity = This algorithm runs in linear time, making only one pass through the array, so the running time in the worst case is O(n).


function maxProfit(arr){
  buyPrice = 0;
  sellPrice = 0;
  maxProfit = -1;

  var changeIndex = true;

  for(var i = 0; i<arr.length-1; i++){
    sellPrice = arr[i+1]

    if(changeIndex){
      buyPrice = arr[i]
    }if(buyPrice > sellPrice){
      changeIndex = true;
      continue;
    }
    else{
      var tempProfit = sellPrice - buyPrice;
      if(tempProfit > maxProfit){
        maxProfit = tempProfit;
        changeIndex = false;
      }

    }
    return maxProfit;    
  }
}

maxProfit([44,30,24,32,35,30,40,38,15]);