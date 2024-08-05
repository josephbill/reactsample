import { useEffect, useState } from 'react';
import '../App.css'
import TransactionTable from './TransactionsTable';
function Home(){
//    data fetching and also handle state from this component. 
// a state to hold the transactions data 
const [transactions,setTransactions] = useState([])
// useEffect(callback function, observe the run of that callback function)
useEffect(() => {
    // fetch method
    fetchTransactions();
},[])


const fetchTransactions = async () => {
    try{
       const response = await fetch("http://localhost:3000/transactions");
       const data = await response.json()
       console.log(JSON.stringify(data))
    //   store this data into a state so that it can manage the component 
       setTransactions(data)
    } catch(error){
        console.error(error)
    }
}

    return(
        <div className='App'>

            {/* load in the transaction table, search component , form component */}
            <p>Transactions List</p>
            <TransactionTable transactions={transactions}/>
        </div>
    )
}

export default Home;