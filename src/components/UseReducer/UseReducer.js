import React, { useReducer } from 'react';

const initialState = {count:0}
// const reducer = (state,action) =>{
//     switch(action.type){
//         case 'INCRIMENT':
//              return {count: state.count + 1};
//         case 'DECRIMENT':
//             return {count : state.count - 1};             
//       default:
//         return state;
//     }
// }
const reducer = (state,action) =>{
    console.log(state,action);
    switch(action.type){
        case 'INCRIMENT':
            return {count: state.count + 1};
        case 'DECREMENT':
            return { count : state.count - 1};
        default: 
            return state;
    }
}

const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <h1>Count Number Of {state.count}</h1>
            <button onClick={()=>dispatch({type:'INCRIMENT'})}>incriment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
        </div>
    );
};

export default UseReducer;