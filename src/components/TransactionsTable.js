import '../App.css'
function TransactionTable({transactions}){

    console.log("THIS IS THE TRANSACTION TABLE",JSON.stringify(transactions))
    return(
        <div className='App'>
            <table className='table table-responsive table-hover table-dark'>
                 <thead>
                     <tr>
                        <th>NO</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Category</th>
                     </tr>
                 </thead>
                 <tbody>
                      {/* loop the transaction array so that i render out each object in the array */}
                      {transactions.map((transaction) => (
                           <tr key={transaction.id}>
                              <td>{transaction.id}</td>
                              <td>{transaction.description}</td>
                              <td>{transaction.amount}</td>
                              <td>{transaction.date}</td>
                              <td>{transaction.category}</td>
                           </tr>
                      ))}
                 </tbody>
                 <tfoot>

                 </tfoot>
            </table>
        </div>
    )
}

export default TransactionTable;