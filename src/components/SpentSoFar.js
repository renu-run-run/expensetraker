import React from 'react'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

const SpentSoFar = () => {
    const {expenses} = useContext(AppContext);
    function calculatSoFar() {
        let totalExpenses = expenses.reduce((acc, curr)=>{
            acc += curr.cost
            return acc;
        },0)
        return totalExpenses
    }
    return(
        <div className='alert alert-secondary'>
           <span>SpentSoFar: Rs {calculatSoFar()}</span>
        </div>
    )
}

export default SpentSoFar