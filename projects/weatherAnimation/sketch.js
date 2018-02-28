let raindrops;

function setup() {
  createCanvas(500, 500);

  raindrops = populateWithObject(40, Raindrop);
}

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
