var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg;
var leaf,leafImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbitpng");
  appleImg = loadImage ("apple.png");
  leafImg = loadImage ("leaf.png");
}

function Setup(){

 createCanvas(400,400);

 //moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

 //creating rabbit running
 rabbit = createSprite(180,340,30,30);
 rabbit.scale = 0.09;
 rabbit.addImage("rabbitImg")
}


function draw(){
  background(0);

  edges = createEdgeSprites();
  rabbit.colloid(edges);
  rabbit.X=World.MouseX
  var selest_sprites = Math.round(random(1,3));
  if(freamCount % 80 == 0){
    if(select_sprites == 1 ) 
    {   createApples() ; }
    else if(create_sprite == 2){   createApples();}
    else{createApples ();} }
   drawSprites();

   var select_sprites = math.round(rendom(1,3));
   if (freamCount % 100== 0){
     if (select_sprites == 1)
     {createLeaves();}
     else if (select_sprites == 5) {
       createLeaves();}
       else{ createLeaves();} }
      deawSprites();
     }
   function createApples(){
     apple=createSprite(random(50,350),40,10,10)
     apple.addImage(appleImg);
     apple.scale=0.08;
     apple.velocityY=5;
     apple.lifetime=150;
   }
  
   function createLeaves(){
    leaf=createSprite(random(50,350),40,10,10)
    leaf.addImage(LeafImg);
    leaf.scale=0.08;
    leaf.velocityY=5;
    leaf.lifetime=150;
  }
