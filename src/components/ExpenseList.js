import ExpenseItem from "./ExpenseItem"
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
const ExpenseList =() =>{
    
    const {expenses} = useContext(AppContext);

    return(
      <div>
       <h1>Expenses</h1>
       <ul>
         {
            expenses.map((item ) => {
              
                return <ExpenseItem id={item.id} name={item.name} cost={item.cost}/>
            })
         }
       </ul>
      </div>
    )
}
export default ExpenseList