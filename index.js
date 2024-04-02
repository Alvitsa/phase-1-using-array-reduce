const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(batches) {
    let totalBatteries = 0;
    for (const batch of batches) {
        totalBatteries += batch;
      }
      return totalBatteries;
}

const totalBatteries = reducer(batteryBatches);
console.log(totalBatteries);
