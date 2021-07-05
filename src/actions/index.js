export const hallView = (values) => {
    return {
        type: 'HALL_VIEW',
        values: values
    }
}

export const getSeats = (data, numberOfSeats, seatCloseOption) => {
    return {
        type: 'GET_SEATS',
        arrayOfSeats: data,
        seatCloseOption: seatCloseOption,
        numberOfSeats: numberOfSeats
    }
}

export const chooseSeats = (item) => {
    return {
        type: 'CHOOSE_SEATS',
        item: item
    }
}

export const reservation = () => {
    return {
        type: 'BOOKING_INFO'
    }
}