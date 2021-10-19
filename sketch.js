const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block=[], block2 =[];

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(600, 605, 300, 20);
    platform2 = new Ground(900, 405, 300, 20);
    poly = new poly(100,100,20,20);
    Slingshot = new SlingShot(poly.body,{x:200, y:600});

    var x = 445,y=600,k=11;
    var c = x;
    // for platform 1
    for(var j =0;j<5;j++){
        c=c+30;
        x=c;
        k =k-2;
        y = y-35;
    for(var i = 0;i<k; i++){
        block[i+(k+2)*j]= new box(x,y,30,30);
        x= x+30;
    }
    }

     x = 745,y=400,k=11;
     c = x;
    // for platform 2
    for(var j =0;j<5;j++){
        c=c+30;
        x=c;
        k =k-2;
        y = y-35;
    for(var i = 0;i<k; i++){
        block2[i+(k+2)*j]= new box(x,y,30,30);
        x= x+30;
    }
    }
}

function draw(){

    background("black");   
    text( mouseX+','+ mouseY,20,20);

    Engine.update(engine);
   ground.display();
   platform1.display();
   platform2.display();
   poly.display();
   // for platform1
   var k =11;
   for(var j =0;j<5;j++){   
    k =k-2;
   for(var i=0;i<k;i++ ){
    if((i+(k+2)*j)%2==0){
        block[i+(k+2)*j].shapeColor = "BLUE";   // mam this color is not applying and some blocks are missing.
       }
       block[i+(k+2)*j].display();
       
   }
}
// for platform1
var k =11;
for(var j =0;j<5;j++){   
 k =k-2;
for(var i=0;i<k;i++ ){
 if((i+(k+2)*j)%2==0){
     block2[i+(k+2)*j].shapeColor = "BLUE";  
    }
    block2[i+(k+2)*j].display();
    
}
}
}
function mouseDragged(){
    Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}

