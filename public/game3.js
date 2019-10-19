location_ = 'assets/deseuri/';

const assets = {
  aluminum: 20,
  coffeecup: 6,
  glass: 18,
  organics: 23,
  paper: 17,
  plastic: 15,
  plasticbag: 1,
  refuse: 32,
  ruinedpaper: 20,
  styrofoam: 5,
  tetrapack: 11,
  tin: 19
};
randomTextures = [];

textures = {};

for (material in assets) {
  textures[material] = [];
  for (i = 1; i <= assets[material]; i++) {

    randomTextures.push(PIXI.Texture.from(location_ + material + i + '.svg', { resolution: 300 }));
  }
}

const app = new PIXI.Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);


// Scale mode for pixelation
arr = [];
Dragging = false;
for (let i = 0; i < 10; i++) {
  arr.push(createBunny(
    Math.floor(Math.random() * app.screen.width),
    Math.floor(Math.random() * app.screen.height),
  ));
}

function createBunny(x, y) {
  // create our little bunny friend..
  const bunny = new PIXI.Sprite(randomTextures[Math.floor(Math.random() * randomTextures.length)]);

  // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
  bunny.interactive = true;

  // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
  bunny.buttonMode = true;

  // center the bunny's anchor point
  bunny.anchor.set(0.5);

  // make it a bit bigger, so it's easier to grab
  //bunny.scale.set(3);

  // setup events for mouse + touch using
  // the pointer events
  bunny
    .on('pointerdown', onDragStart)
    .on('pointerup', onDragEnd)
    .on('pointerupoutside', onDragEnd)
    .on('pointermove', onDragMove);

  // For mouse-only events
  // .on('mousedown', onDragStart)
  // .on('mouseup', onDragEnd)
  // .on('mouseupoutside', onDragEnd)
  // .on('mousemove', onDragMove);

  // For touch-only events
  // .on('touchstart', onDragStart)
  // .on('touchend', onDragEnd)
  // .on('touchendoutside', onDragEnd)
  // .on('touchmove', onDragMove);

  // move the sprite to its designated position
  bunny.x = x;
  bunny.y = y;

  // add it to the stage
  app.stage.addChild(bunny);
  return bunny;
}

function onDragStart(event) {
  // store a reference to the data
  // the reason for this is because of multitouch
  // we want to track the movement of this particular touch
  this.data = event.data;
  this.alpha = 0.5;
  this.dragging = true;
  Dragging = true;
}


function onDragEnd() {
  this.alpha = 1;
  this.dragging = false;
  // set the interaction data to null
  this.data = null;
  Dragging = false;
}

function onDragMove() {
  if (this.dragging) {
    const newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }
}
