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
        return obj.organizationName === items[i].organizationName
        });

        if(current === undefined){
        totalExpenses.push({"organizationName": items[i].organizationName, "amount": items[i].amount})
        }else{
        if(current.organizationName == 'Instituição Financeira 01'){
            current.amount = current.amount + items[i].amount;
        }
        if(current.organizationName == 'Instituição Financeira 09'){
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