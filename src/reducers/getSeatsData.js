const getSeatsData = (state = {}, action) => {
    switch(action.type) {
        case 'GET_SEATS':
            let choice = [];
            let hallViewModel = [];
            for (let i = 0; i < 10; i++) {
                let row = [];
                for (let j = 0; j < 15; j++) {
                  let seat = action.arrayOfSeats.filter(item => {
                    return item.cords.x === i && item.cords.y === j;
                  });
                  if (seat.length === 0) {
                    row.push({});
                  } else {
                    row.push(seat[0]);
                  }
                }
               hallViewModel.push(row);
              }

              let seatsSum = 0;
              let flag = true;
              let numberOfSeats = Number(action.numberOfSeats);
            
              hallViewModel.forEach((row) => {
                let seatBySeat = [];
                row.forEach((cell) => {
                    let invisibleSeat = cell.cords === undefined;
                    let bookedSeat = cell.reserved === true;
                    let visibleSeat = !bookedSeat && !invisibleSeat;

                    if (bookedSeat) {
                        cell.className = "booked-td"
                    } else if (invisibleSeat) {
                        cell.className = "empty-td"
                    } else {
                        cell.className = "visible-td"
                        seatsSum ++
                    }
                    
                    if (visibleSeat && seatsSum <= action.numberOfSeats && action.seatCloseOption === undefined) {
                        choice.push(cell);
                    }

                    if (visibleSeat) {
                        seatBySeat.push(cell);
                    } else {
                        seatBySeat = [];
                    }

                    if (seatBySeat.length === numberOfSeats && flag && action.seatCloseOption === true) {
                        seatBySeat.forEach((item) => {
                            choice.push(item);
                            flag = false;
                        })
                    }
                })
              })     
            return {hallViewModel: hallViewModel, choice: choice};
            
            case 'CHOOSE_SEATS':
            let choiceByUser = [];
                    let found = false;
                    if (state.choice.length !== undefined) {
                    for (let i = 0; i < state.choice.length; i++) {
                        if(action.item.id !== state.choice[i].id) {
                            choiceByUser.push(state.choice[i]);
                        } else {
                            found = true;
                        }      
                    }
                    if (found !== true && action.item.cords !== undefined && action.item.reserved !== true) {
                        choiceByUser.push(action.item);
                    }
                }
            return {hallViewModel: state.hallViewModel, choice: choiceByUser};
        default:
            return state;
    }
}

export default getSeatsData;