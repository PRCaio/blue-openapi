import next from "next";
import account from "./account";

function handler(request, response) {
    const accountClient = account
    var items = accountClient
    items.sort(function (a, b) {
        if (a.transactionDate > b.transactionDate) {
            return 1;
        }
        if (a.transactionDate < b.transactionDate) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });

    var newItems = items.reverse()
    var totalExpenses = []
    var totalValue = 0
    var i = 0
    var a= 0
    var list = []


    for ( ; i < items.length; i++) {
        var current = totalExpenses.find(obj => {
            return obj.transactionName === items[i].transactionName
          });

          if(current === undefined){
            totalExpenses.push({"transactionName": items[i].transactionName, "amount": items[i].amount})
          }else{
            if(current.transactionName == items[i].transactionName){
                current.amount = current.amount + items[i].amount;
            }
          }
       
    }

    response.json({
        totalExpenses
    }
    )
}

export default handler;