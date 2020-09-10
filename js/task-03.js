const findBestEmployee = function(employees) {
  const array = Object.entries(employees);
  let bestName = array[0][0];
  let bestScore = array[0][1];

  for ( let i = 1; i < array.length; i++ ) {
    const totalArray = array[i];
    let name = totalArray[0];
    let score = totalArray[1];
    if (bestScore < score) {
      bestName = name;
      bestScore = score;
    }
  }
  return bestName
};