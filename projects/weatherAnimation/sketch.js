let raindrops;
let sun; 

let weatherdata; 

let key; 
let url; 

//preload runs before setup() and draw() 
function preload(){
  key = "get key later at open weather maps "
  url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=" + key;
}
//runs before first draw and prepares the state
function setup() {
  createCanvas(1000, 1000);

  raindrops = populateWithObject(100, Raindrop);
  sun = new Sun();  
}
//runs for each frame 
function draw() {
  
  if(true){//adjust backgrond if sun is not visble 
    applyCyclus(); 
  }
  if (true) { //if raining TODO: add snow and wind (mov x)
    applyRain();
  }
  if(true) { //if sun
    applySun(); 
  }
  if (false) { //if cloudy
    applyClouds(); 
  }
}

/** 
 * displays different sky colors depending on suns position (TODO: time of day)
*/
let applyCyclus = () => {
  console.log("height:" + height); 
  console.log("y     :" + sun.y); 
  if (sun.y > height || sun.x > width + width/5) {
    background("#001848"); 
  } else {
    background("#87CEEB"); 
  }
}

/** 
 * Turns raindrops into visible rain on screen
*/
let applyRain = () => {
  for (raindrop of raindrops) {
    raindrop.fall();
    raindrop.draw();
  }
};

/**
 * displays a sun, moving across the sky and back (TODO based on time of day)
 */
let applySun = () => {
  sun.move(); 
  sun.draw(); 
}

/**
 * displays clouds, moving across the sky and back
 */
let applyClouds = () => {
  //TODO: implement
}



/**
 * returns array populated with objects of specified type
 * @param amount The amount of raindrops
 * @param type The class of which to instanciate objects
 */
let populateWithObject = (amount, type) => {
  let arr = new Array(amount);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new type();
  }
  return arr;
};
