
var edges;
var jet;
var goldCoin;
var aestroid1, aestroid2;
 var bullet;  


function preload(){
 
  jet_image = loadImage("jet.png");
  goldCoin_img = loadImage("gold coins.png");
  aestroid1_img = loadImage("aestroid1.png");
  aestroid2_img= loadImage("aestroid2.png");
  background_img = loadImage("space background.png");
  bullet_img= loadImage("bullet.png");
}

function setup(){
  createCanvas(1300,750);
  
  aestroid1Group = new Group();
  
  jet= createSprite(1100,400,200,200);
  jet.addImage(jet_image);
  jet.scale=0.25;
  



  bg=createSprite(1300,750);
  bg.addImage(background_img);
  

  

  aestroid2=createSprite(300,650);
  aestroid2.addImage(aestroid2_img);

  goldCoin=createSprite(300,400);
  goldCoin.addImage(goldCoin_img);
  goldCoin.scale=0.75;

  bullet=createSprite(600,400);
  bullet.addImage(bullet_img);
  bullet.scale=(0.15);

}

function draw() {
  background("red")
  jet.y=World.mouseY;
  jet.depth=bg.depth;
  jet.depth=jet.depth+1;

  


  if(World.frameCount%120===0){
    var aestroid1=createSprite(300,200);
    aestroid1.y=Math.round(random(200,500));
    aestroid1.addImage(aestroid1_img);
    aestroid1.scale=0.45;
    aestroid1.velocityX=7;
    aestroid1Group.add(aestroid1);
    edges=createEdgeSprites();
    aestroid1.bounceOff(edges);
    
    var edges=createEdgeSprites();
    aestroid1.bounceOff(edges);
  }
  drawSprites();
}

