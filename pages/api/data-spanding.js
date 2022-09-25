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
    let n = strings.length;
    let q = queries.length;
    let cont = 0;

    for ( ; i < items.length; i++) {
        totalValue = 0
            //for ( ; a < items.length; a++) {
                if (totalExpenses.includes(items[i].transactionName) == true) {
                //if(items[i].transactionName == items[a].transactionName){
              //  totalValue = totalValue + 1}
            //}
            //totalExpenses.push({"transactionName":`${items[i].transactionName}`, "totalAmount": totalValue})
            totalValue = 0
            
           
            }else{ 
                
                for ( ; a < items.length; a++) {
                    if (list.includes(items[a].transactionName) == true) {
                    totalValue = totalValue + 1
            }else{list.push( items[a].transactionName)
                    totalExpenses.push({"transactionName": items[a].transactionName, "value": totalValue})
                }
                
            }
            
        }
            
                
       // }
    }


    response.json({
        totalExpenses
    }
    )
}

export default handler;