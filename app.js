function testSize(num) {
    // Only change code below this line
  if (num < 5){
    return "Tiny"
  }else if (num < 10){
    return "Small"
  }else if (num < 15){
    return "Medium"
  }else if (num < 20){
    return "Large"
  }else if (num >= 20){
    return "Huge"
  }
  
    return "Change Me";
    // Only change code above this line
  }
  
  // Change this value to test
  testSize(7);



  
  var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if(strokes == 1){
  return names[0];

}else if(strokes <= par-2){
  return names[1];

}else if(strokes == par - 1){
  return names[2];

}else if(strokes == par){
  return names[3];

}else if(strokes == par + 1){
  return names[4];

}else if (strokes == par + 2){
  return names[5];

}else {
  return names[6];
}
  
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);