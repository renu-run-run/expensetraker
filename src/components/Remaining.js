import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

const Remaining =() =>{
    const {budget, expenses} = useContext(AppContext);
    
   function calculationRemaining() {
    let totalExpenses = expenses.reduce((acc, curr)=>{
      acc+= curr.cost;
      return acc;
      
    },0);
    
    return budget-totalExpenses;
   }
    return(
        <div className=" alert alert-info ">
           <span>Remaining: Rs{calculationRemaining()}</span>
        </div>
    )
}

export default Remaining