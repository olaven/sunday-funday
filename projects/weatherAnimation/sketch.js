let raindrops;

let weatherdata; 

let key; 
let url; 

//preload runs before setup() and draw() 
function preload(){
  url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&APPID=" + key;
  weatherdata = loadJSON(url); 
  console.log(weatherdata); 
}
//runs before first draw and prepares the state
function setup() {
  createCanvas(500, 500);

  raindrops = populateWithObject(40, Raindrop);
}
//runs for each frame 
function draw() {
  background(0,0,0);

  if (true) {
    applyRain();
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
