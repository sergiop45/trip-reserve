import produce from 'immer';

function reserve(state = [], action) {
    
    switch(action.type){
        case "ADD_RESERVA":
            return produce(state, draft => {

                const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);

                if(tripIndex >= 0) {
                    draft[tripIndex].amount += 1;
                } else {
                    draft.push({
                        ...action.trip,
                        amount: 1,
                    });
                }

            });
        case "DELETE_RESERVA":
            return produce(state, draft => {
                
                const tripIndex = draft.findIndex(trip => trip.id === action.id);

                if(tripIndex >= 0){
                    draft.splice(tripIndex, 1);
                } else {

                }

            })    
        default:
            return state;
              
    }
    
};

export default reserve;