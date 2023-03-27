
import './App.css';
import AddExpenseForm from './components/AddExpenseForm';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import Remaining from './components/Remaining';
import SpentSoFar from './components/SpentSoFar';
import { AppProvider } from './components/context/AppContext';
import { createContext } from 'react';

function App() {
  return (

    <AppProvider>
    <div className="container">
    <h1 className='mt-3'>My Budget Planner</h1>
    <div className='row mt-3'>

      <div className='col-sm'>
      <Budget/>
      </div>

      <div className='col-sm'>
      <Remaining/>
      </div>

      <div className='col-sm'>
      <SpentSoFar/>
      </div>
      
    </div>
   <div>
    <ExpenseList/>
   </div>
   <div className='mt-3 '>
    <AddExpenseForm/>
   </div>
 </div>
    </AppProvider>
    
  );
}

export default App;
