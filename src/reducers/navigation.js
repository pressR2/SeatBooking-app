const navigation = (state = { step: 1 }, action) => {
    switch(action.type) {
        case 'HALL_VIEW':
            return {
                ...state,
                step: 2,
                numberOfSeats: action.values.numberOfSeats,
                seatCloseOption: action.values.seatCloseOption,
          
        }
        case 'BOOKING_INFO':
            return {
                ...state,
                step: 3
            }
        default:
            return state;
    }
}

export default navigation;