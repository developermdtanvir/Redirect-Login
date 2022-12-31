import React, { useReducer, useRef } from 'react';
import { patientReducer, PatientState } from '../../reducers/PatientReducer';

const PatientManagement = () => {
    const [state,dispatch] = useReducer(patientReducer,PatientState);
    const nameRef = useRef();
    console.log(state.patient.length);
    const handleSubmit = event =>{
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name:nameRef.current.value,
            id:state.patient.length +1
        })
        nameRef.current.value = '';
    }
    return (
        <div>
            <h1>Total Patient{state.patient.length} </h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef}>
                    
                </input>
            </form>
            {
                state.patient.map(pt => <li
                     key={pt.id}
                     onClick={()=>dispatch({type:'REMOVE_PATIENT',id:pt.id})}   
                >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;