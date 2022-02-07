let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
const getParkingLotState = () => {
    let parkSum = function (){
      let numberPark = 0;
      for(let i = 0; i < parking_state.length; i++){
        numberPark += parking_state[i][2];
      }
      return numberPark;
      
    }

    let result = {
      totalSlots : parking_state.length,
      availableSlots: parkSum(available),
      occupiedSlots : parkSum(occupied)
    };
    return result;
}


console.log(getParkingLotState(parking_state.length, parking_state));