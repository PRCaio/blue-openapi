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

      var newItems =  items.reverse()

    response.json({
       newItems
    } 
    )
  }

export default handler;