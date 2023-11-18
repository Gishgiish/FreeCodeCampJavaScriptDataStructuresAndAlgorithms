function checkCashRegister(price, cash, cid) {
  const denominations = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  var changeObj = {};
  var changeRequired = cash - price;
  var cArray = [];

  const reducer = (accumulator, currentValue) => accumulator + currentValue[1];
  if (changeRequired !== 0) {
    let cidSum = cid.reduce(reducer, 0);
    if (cidSum == changeRequired) {
      changeObj.status = "CLOSED";
      changeObj.change = cid;
    } else {
      let heighestD = 0;
      for (let i = 8; i >= 0; i--) {
        if (changeRequired >= denominations[i]) {
          heighestD = i;
          break;
        }
      }
      for (var j = heighestD; j >= 0; j--) {
        if (cid[j][1] !== 0) {
          let denominationsNeeded = Math.floor(
            changeRequired / denominations[j]
          );
          let denominationsAvailable = Math.floor(cid[j][1] / denominations[j]);
          let denominationsUsable = Math.min(
            denominationsNeeded,
            denominationsAvailable
          );
          let changeCleared = denominationsUsable * denominations[j];
          changeRequired = changeRequired - changeCleared;
          changeRequired = Number.parseFloat(changeRequired.toFixed(2));
          changeCleared && cArray.push([cid[j][0], changeCleared]);
          if (changeRequired == 0) {
            break;
          }
        }
      }
      if (changeRequired == 0) {
        changeObj.status = "OPEN";
        changeObj.change = cArray;
      } else {
        changeObj.status = "INSUFFICIENT_FUNDS";
        changeObj.change = [];
      }
    }
  }

  return changeObj;
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
