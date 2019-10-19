var P;

const points = {
  aluminum: 20,
  coffeecup: -5,
  glass: 18,
  organics: 23,
  paper: 17,
  plastic: 15,
  plasticbag: 1,
  refuse: -20,
  ruinedpaper: 20,
  styrofoam: -5,
  tetrapack: -11,
  tin: 19
}


const assets = {
  aluminum:20,
  coffeecup:6,
  glass:18,
  organics:23,
  paper:17,
  plastic:15,
  plasticbag:1,
  refuse:32,
  ruinedpaper:20,
  styrofoam:5,
  tetrapack:11,
  tin:19
}

randomTextures = []

location = ''

var textures = {};

for(material in assets){
  for(i=1;i<=assets[material];i++){

  }
}

const app = new PIXI.Application({
  width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});
document.body.appendChild(app.view);

const container = new PIXI.Container();

app.stage.addChild(container);

// Create a new texture
const texture = PIXI.Texture.from('assets/bottle2small.png');

// Create a 5x5 grid of bunnies
for (let i = 0; i < 1; i++) {
  const bunny = new PIXI.Sprite(texture);
  bunny.anchor.set(0.5);
  bunny.x = (i % 5) * 40;
  bunny.y = Math.floor(i / 5) * 40;
  container.addChild(bunny);
}

acc = 0.6;
speed = -20;

// Move container to the center
container.x = app.screen.width / 2;
container.y = app.screen.height;

// Center bunny sprite in local container coordinates
container.pivot.x = container.width / 2;
container.pivot.y = container.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
  // rotate the container!
  // use delta to create frame-independent transform
  // container.rotation -= 0.01 * delta;
  speed += acc;
  container.y += speed;
});
