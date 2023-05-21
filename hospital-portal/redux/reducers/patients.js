export const patients = (state = [], action) =>{
    switch(action.type){
        case 'ADD_PATIENT':
            return [...state, action.payload];
        case 'ADD_ALL_PATIENTS':
            return [...state, ...action.payload];
        default:
            return state;
    }
}