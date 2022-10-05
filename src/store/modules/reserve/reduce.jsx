function reserve(state = [], action) {
    console.log(state)
    switch(action.type){
        case "ADD_RESERVA":
            return [ ...state, action.trip ];
        default:
            return state;
              
    }
    
};

export default reserve;