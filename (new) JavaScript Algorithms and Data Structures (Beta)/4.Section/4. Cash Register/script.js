let cash_input = document.getElementById("cash");
let purchase_button = document.getElementById("purchase-btn");

let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
let cashConversionSizes = {
    "PENNY":        0.01 , 
    "NICKEL":       0.05 ,
    "DIME":         0.1 ,
    "QUARTER":      0.25 ,
    "ONE":          1 ,
    "FIVE":         5 ,
    "TEN":          10 ,
    "TWENTY":       20 ,
    "ONE HUNDRED":  100 
}
let cash = 0;

function calculateCashRegister(price, cash, cid){
    if(price > cash){
        alert("Customer does not have enough money to purchase the item");
    }
    let targetChange = parseFloat(cash - price).toFixed(2);
    let openChange = targetChange;
    let changes = []
    console.log(cid)
    let total_cid = Math.round(cid.map(item => item[1]).reduce((a, b) => a + b) * 100) / 100;
    console.log(total_cid)

    for(let i = cid.length-1; i >= 0; i--){
        let unitSize = cid[i][0]
        console.log(unitSize+"("+cashConversionSizes[unitSize]+")")
        console.log(Math.floor(openChange / cashConversionSizes[unitSize]));
        let takeable = Math.round(Math.floor(openChange / cashConversionSizes[unitSize])*cashConversionSizes[unitSize]*100)/100
        takeable = takeable <= cid[i][1] ? takeable : cid[i][1];
        openChange = Math.round((openChange - takeable)*100)/100;

        if(takeable != 0){
            changes.push(`${unitSize}: $${takeable}`)
        }
        if(openChange == 0){
            break;
        }
        
    }
    if(openChange == 0){
        if(targetChange == total_cid){
          return {"status": "CLOSED", "change": changes}
        }else{
            return {"status": "OPEN", "change": changes}
        }
    }else{
        return {"status": "INSUFFICIENT_FUNDS", change: []}
    }
}

purchase_button.addEventListener("click", () => {
    const cash = parseFloat(cash_input.value);
    const changeDueElement = document.getElementById("change-due");

    if (cash < price) {
        alert("Customer does not have enough money to purchase the item");
        changeDueElement.textContent = "";
        return;
    } else if (cash === price) {
        changeDueElement.textContent = "No change due - customer paid with exact cash";
        return;
    } else {
        const change = calculateCashRegister(price, cash, cid);
        if (change.status === "OPEN") {
            changeDueElement.textContent = `Status: OPEN ${change.change}`;
        } else if (change.status === "CLOSED") {
            changeDueElement.textContent = `Status: CLOSED ${change.change}`;
        } else {
            changeDueElement.textContent = `Status: ${change.status}`;
        }
    }
});



