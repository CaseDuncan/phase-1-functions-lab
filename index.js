// Code your solution in this file!

function distanceFromHqInBlocks(p) {
  if(p< 42){
    return (42-p)
  }
  else{
    return(p-42)
  }

  }
distanceFromHqInBlocks(50);


function distanceFromHqInFeet (p) {
  return distanceFromHqInBlocks(p) * 264;
}

function distanceTravelledInFeet (x, y) {
  if (x < y) {
    return (y - x) * 264;
  } else {
    return (x - y) * 264;
  }
}
function calculatesFarePrice (start, destination) {
  const p = distanceTravelledInFeet(start, destination);

  if (p <= 400) {
    return 0;
  } else if (p > 400 && p<= 2000) {
    return .02 * (p - 400);
  } else if (p > 2000 && p < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}