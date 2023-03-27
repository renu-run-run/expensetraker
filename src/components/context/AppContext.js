import { useReducer } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from 'uuid';

let initialState = {
    budget: 2000,
    expenses: [
        { id: 12, name: 'shopping', cost: 40 },
        { id: 13, name: 'holiday', cost: 400 },
        { id: 14, name: 'car service', cost: 50},
    ],
};

  if(localStorage.getItem('state'))
    initialState = JSON.parse(localStorage.getItem('state'));

function reducer(state, action) {
    switch(action.type){
        case 'ADD_ITEM':
        //    const newExpenses = state.expenses.push({id:15,name:action.payload.name, cost:action.payload.cost})
             const newState = {...state};
             newState.expenses.push({id:uuidv4(), name:action.payload.name, cost:parseInt(action.payload.cost)});
             localStorage.setItem('state', JSON.stringify(newState));
             return newState;
        case 'DELETE_ITEM':
             const newState2 = {...state};
              newState2['expenses'] = newState2.expenses.filter((item)=>{
                if(item.id!==action.payload)
                   return item;
              });
              localStorage.setItem('state', JSON.stringify(newState2));
             return newState2;   

        default:
            return state;
    }
}
export const AppContext = createContext();

export const AppProvider = (props) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
         <AppContext.Provider value={{
            budget : state.budget,
            expenses : state.expenses,
            dispatch 
         }
            
         }>
         
           {props.children}
         </AppContext.Provider>
    )
}