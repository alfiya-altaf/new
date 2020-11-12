var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e46fb653-833c-444b-a992-c38e3c52aab1","da49275e-49cb-4824-bb5a-8f042a5d01ac","4f764309-b25d-4322-aa6a-259f23e284ac","b8cba109-3187-45c4-9dd8-c8ff937c029c","8e62afb4-5faf-4341-9ac5-accb0a49eb2a","2ceedf6e-e09d-4694-9e96-5ef5ab28fc50","83be9cb7-eaa2-4c94-8245-dc3827337bba","920a5a53-5c5f-4fe9-a2e0-7b96016a5256"],"propsByKey":{"e46fb653-833c-444b-a992-c38e3c52aab1":{"name":"court_1","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":10,"looping":true,"frameDelay":5,"version":"I5oHwRY3A_nVQynayRqBz.C128HGLTsy","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":2456},"rootRelativePath":"assets/e46fb653-833c-444b-a992-c38e3c52aab1.png"},"da49275e-49cb-4824-bb5a-8f042a5d01ac":{"name":"banana.png_1","sourceUrl":"assets/v3/animations/77yQtkBk9FzWJN1Kg5Meh9cHYl0yjoHZDl51qt9Te0s/da49275e-49cb-4824-bb5a-8f042a5d01ac.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"Ek7_QI8mLOxZJ2OVFqLHyjULxOK8tk7Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/77yQtkBk9FzWJN1Kg5Meh9cHYl0yjoHZDl51qt9Te0s/da49275e-49cb-4824-bb5a-8f042a5d01ac.png"},"4f764309-b25d-4322-aa6a-259f23e284ac":{"name":"farm_land_1","sourceUrl":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8RkOLYC69Uhn.b7A1GaLNOBfPiC_hGvT/category_backgrounds/farm_land.png"},"b8cba109-3187-45c4-9dd8-c8ff937c029c":{"name":"stone.png_1","sourceUrl":"assets/v3/animations/77yQtkBk9FzWJN1Kg5Meh9cHYl0yjoHZDl51qt9Te0s/b8cba109-3187-45c4-9dd8-c8ff937c029c.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"VF8f7qVPy8dNH.BG3rEBdUPaH2v0fnBw","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/77yQtkBk9FzWJN1Kg5Meh9cHYl0yjoHZDl51qt9Te0s/b8cba109-3187-45c4-9dd8-c8ff937c029c.png"},"8e62afb4-5faf-4341-9ac5-accb0a49eb2a":{"name":"apple_1","sourceUrl":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png"},"2ceedf6e-e09d-4694-9e96-5ef5ab28fc50":{"name":"fries_1","sourceUrl":"assets/api/v1/animation-library/gamelab/TU5wY_Y1zGemmV7XTHIEOQVLiwnROXHE/category_food/fries.png","frameSize":{"x":300,"y":253},"frameCount":1,"looping":true,"frameDelay":2,"version":"TU5wY_Y1zGemmV7XTHIEOQVLiwnROXHE","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":253},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TU5wY_Y1zGemmV7XTHIEOQVLiwnROXHE/category_food/fries.png"},"83be9cb7-eaa2-4c94-8245-dc3827337bba":{"name":"burger_1","sourceUrl":null,"frameSize":{"x":300,"y":262},"frameCount":1,"looping":true,"frameDelay":12,"version":"tebpoxvOIOP_FYKrEUnhoN8Qxk8kNzvT","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":262},"rootRelativePath":"assets/83be9cb7-eaa2-4c94-8245-dc3827337bba.png"},"920a5a53-5c5f-4fe9-a2e0-7b96016a5256":{"name":"RMIs0gk.png_1","sourceUrl":null,"frameSize":{"x":1920,"y":1080},"frameCount":1,"looping":true,"frameDelay":12,"version":"uEvrRuRcQIYE2W3nC9TXfGmADiXCVapc","loadedFromSource":true,"saved":true,"sourceSize":{"x":1920,"y":1080},"rootRelativePath":"assets/920a5a53-5c5f-4fe9-a2e0-7b96016a5256.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSound("assets/category_background/fantasy.mp3",true);
var survival = 0;
var score = 0;
//var farmland = createSprite(200,200,400,400);
//farmland.setAnimation("farm_land_1");

var monkey = createSprite(51,321,20,20);
monkey.setAnimation("court_1");
monkey.scale = 0.1;

var ground = createSprite(51,355,800,10);
ground.x = ground.width/2;
ground.visible = false;

var foodGroup = createGroup();
var enemyGroup = createGroup();



function draw() {
  background("lightgreen");
 if (keyDown("space") && monkey.y >=255) {
   monkey.velocityY = -5;
 }
 
 if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(monkey.isTouching(foodGroup)){
    score = score + 2;
    foodGroup.destroyEach();
  }
  
  if(monkey.isTouching(enemyGroup)){
    enemyGroup.destroyEach();
    score = score - 2;
  }
  
  if(World.frameCount % 60 ===0){
    survival = survival + 1;
  }
  
  fill("black");
  text("Score : " + score,189,61);
  
  text("Survival Time : " + survival,170,100);
  
  switch(score){
    case 10: monkey.scale = 0.12;
            break;
    case 20: monkey.scale = 0.14;
            break;
    case 30: monkey.scale = 0.16;
            break;
    case 40: monkey.scale = 0.18;
           break;
  }
 
 spawnEnemy();
 spawnFood();
 spawnFood1();
 spawnFood2();
 spawnFood3();
 
 ground.velocityX = -6;

 monkey.velocityY = monkey.velocityY + 0.35; 
 monkey.collide(ground);
  
  drawSprites();
}

function spawnEnemy() {
  if(World.frameCount % 80===0){
    var stone = createSprite(300,332,20,20);
    stone.setAnimation("stone.png_1");
    stone.velocityX = -6;
    stone.scale = 0.1;
    stone.lifetime = 100;
    enemyGroup.add(stone);
    }
}

function spawnFood() {
  if(World.frameCount % 100===0){
    var banana = createSprite(300,270,20,20);
    banana.setAnimation("banana.png_1");
    banana.y = randomNumber(200,320);
    banana.scale = 0.04;
    banana.velocityX = -6;
    banana.lifetime = 100;
    foodGroup.add(banana);
  }
}

function spawnFood1() {
  if(World.frameCount % 120===0){
    var apple = createSprite(300,270,20,20);
    apple.setAnimation("apple_1");
    apple.y = randomNumber(200,320);
    apple.scale = 0.3;
    apple.velocityX = -6;
    apple.lifetime = 100;
    foodGroup.add(apple);
  }
}

function spawnFood2() {
  if(World.frameCount % 520===0){
    var fries = createSprite(300,270,20,20);
    fries.setAnimation("fries_1");
    fries.y = randomNumber(200,320);
    fries.scale = 0.1;
    fries.velocityX = -6;
    fries.lifetime = 100;
    foodGroup.add(fries);
  }
}

function spawnFood3() {
  if(World.frameCount % 1000===0){
    var burger = createSprite(300,270,20,20);
    burger.setAnimation("burger_1");
    burger.y = randomNumber(200,320);
    burger.scale = 0.1;
    burger.velocityX = -6;
    burger.lifetime = 100;
    foodGroup.add(burger);
  }
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
