export const PatientState = {
    patient:[]
}
export const patientReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatient = {
                id:action.id,
                name:action.name
            }
            const allPatient = [...state.patient,newPatient]
            return {patient:allPatient};
        case 'REMOVE_PATIENT':
            const remanning = state.patient.filter(pt => pt.id !== action.id);
            const newState = {patient: remanning}
            return newState;
        default : 
            return state;
    }
}