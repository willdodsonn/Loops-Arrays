let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
let state = {occupiedSlots: 0, availableSlots: 0, totalSlots: 0};
function getParkingLotState() {
  for (item of parking_state) {
    for (parkspace of item) {
      if (parkspace === 1) {
        state.occupiedSlots++;
      }
      else if (parkingSpace === 2) {
        state.availableSlots++;
      }
      if (!parkspace) {
        state.totalSlots++;
      }
    }
  }
}
console.log(getParkingLotState(parking_state))

occupiedSlots (1) = 5;
availableSlots (2) = 1;
totalSlots () = 6;