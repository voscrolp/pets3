var pet,petImg,petImg2,database,foodS,foodStock;
var feedDog,replaceFood;

var fedTime,lastFed,hour;
var gameStates,gameState;

var Bedroom,Garden,Washroom;

var milk1,milk2,milk3,milk4,milk5,milk6,milk7,milk8,milk9,milk10,milk11,milk21,milk13,milk14,milk15,milk16,milk17,milk18,milk19,milk20;

function preload(){
  petImg = loadImage("images/dogImg.png");
  petImg2 = loadImage("images/dogImg1.png");
  Bedroom = loadImage("images/virtual pet images/Bed Room.png");
  Garden = loadImage("images/virtual pet images/Garden.png");
  Washroom = loadImage("images/virtual pet images/Wash Room.png");

  
}

function setup() {
  createCanvas(500, 500);
  //pet = new dog(250,250,100,100);
  pet = createSprite(250,250,10,10);
  pet.addImage(petImg);
  pet.scale = 0.25

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  fedTime = database.ref('LastFed');
  fedTime.on("value",readTime);

  gameStates = database.ref('gameState');
  gameStates.on("value",readGameState);

  feedDog = createButton("Feed Dog");
  feedDog.position(500,150);
  feedDog.mousePressed(feed_Dog);

  replaceFood = createButton("Restock Food");
  replaceFood.position(600,150);
  replaceFood.mousePressed(replace_Food);


  milk1 = new Milk(40,350,20,50);
  milk2 = new Milk(80,350,20,50);
  milk3 = new Milk(120,350,20,50);
  milk4 = new Milk(160,350,20,50);
  milk5 = new Milk(200,350,20,50);
  milk6 = new Milk(240,350,20,50);
  milk7 = new Milk(280,350,20,50);
  milk8 = new Milk(320,350,20,50);
  milk9 = new Milk(360,350,20,50);
  milk10 = new Milk(400,350,20,50);

  milk11 = new Milk(40,420,20,50);
  milk12 = new Milk(80,420,20,50);
  milk13 = new Milk(120,420,20,50);
  milk14 = new Milk(160,420,20,50);
  milk15 = new Milk(200,420,20,50);
  milk16 = new Milk(240,420,20,50);
  milk17 = new Milk(280,420,20,50);
  milk18 = new Milk(320,420,20,50);
  milk19 = new Milk(360,420,20,50);
  milk20 = new Milk(400,420,20,50);

  

}


function draw() {  
  background(46,139,87);
  milks();
  getTime();
  console.log(lastFed);
  console.log(hour);
  drawSprites();

  if(hour == (lastFed + 1)){
    updateState("Playing");
    garden();
  }else if(hour == (lastFed + 2)){
    updateState("Sleeping");
    bedroom();
  }else if(hour > (lastFed + 2) && hour <= (lastFed + 4)){
    updateState("Bathing");
    washroom();
  }else{
    updateState("Hungry");
    milk1.display();
    milk2.display();
    milk3.display();
    milk4.display();
    milk5.display();
    milk6.display();
    milk7.display();
    milk8.display();
    milk9.display();
    milk10.display();
    milk11.display();
    milk12.display();
    milk13.display();
    milk14.display();
    milk15.display();
    milk16.display();
    milk17.display();
    milk18.display();
    milk19.display(); 
    milk20.display(); 
  }

  if(gameState == "Hungry"){

  push();
  textSize(15);
  fill(255);
  if(lastFed >= 12){
    text("Last Fed: " + lastFed%12 + "PM",350,30);
  }else if(lastFed == 0){
    text("Last Fed: 12 AM", 350,30);
  }else{
    text("Last Fed: " + lastFed%12 + "AM", 350,30);
  }
  pop();

  push();
  fill(255);
  textAlign(CENTER);
  textSize(15);
  text("Food Remaining:" + foodS,250,50);
  pop();
}
}

function readStock(data){
  foodS = data.val();
}

function readTime(data){
  lastFed = data.val();
}

function readGameState(data){
  gameState = data.val();
}



function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



function reverseWriteStock(x){
  if(x>=20){
    x = 20;
  }else{
    x = x+1;
  }

  database.ref('/').update({
    Food:x
  })
}

function writeTime(x){
  database.ref('/').update({
    LastFed:x
  })
}




function feed_Dog(){
  writeStock(foodS);
  pet.addImage(petImg2);
  writeTime(hour);
}



function replace_Food(){
  reverseWriteStock(foodS);
}

function milks(){
  if(foodS == 0){
    milk1.x = 3000;
  }else{
    milk1.x = 40;
  }


  if(foodS <= 1){
    milk2.x = 3000;
  }else{
    milk2.x = 80;
  }


  if(foodS <= 2){
    milk3.x = 3000;
  }else{
    milk3.x = 120;
  }


  if(foodS <= 3){
    milk4.x = 3000;
  }else{
    milk4.x = 160;
  }


  if(foodS <= 4){
    milk5.x = 3000;
  }else{
    milk5.x = 200;
  }


  if(foodS <= 5){
    milk6.x = 3000;
  }else{
    milk6.x = 240;
  }


  if(foodS <= 6){
    milk7.x = 3000;
  }else{
    milk7.x = 280;
  }


  if(foodS <= 7){
    milk8.x = 3000;
  }else{
    milk8.x = 320;
  }


  if(foodS <= 8){
    milk9.x = 3000;
  }else{
    milk9.x = 360;
  }


  if(foodS <= 9){
    milk10.x = 3000;
  }else{
    milk10.x = 400;
  }





  if(foodS <= 10){
    milk11.x = 3000;
  }else{
    milk11.x = 40;
  }


  if(foodS <= 11){
    milk12.x = 3000;
  }else{
    milk12.x = 80;
  }


  if(foodS <= 12){
    milk13.x = 3000;
  }else{
    milk13.x = 120;
  }


  if(foodS <= 13){
    milk14.x = 3000;
  }else{
    milk14.x = 160;
  }


  if(foodS <= 14){
    milk15.x = 3000;
  }else{
    milk15.x = 200;
  }


  if(foodS <= 15){
    milk16.x = 3000;
  }else{
    milk16.x = 240;
  }


  if(foodS <= 16){
    milk17.x = 3000;
  }else{
    milk17.x = 280;
  }


  if(foodS <= 17){
    milk18.x = 3000;
  }else{
    milk18.x = 320;
  }


  if(foodS <= 18){
    milk19.x = 3000;
  }else{
    milk19.x = 360;
  }


  if(foodS <= 19){
    milk20.x = 3000;
  }else{
    milk20.x = 400;
  }
}

function updateState(state){
  database.ref('/').update({
    gameState:state
  })
}

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  hour = datetime.slice(11,13);

  //http://worldtimeapi.org/api/timezone/Asia/Kolkata
  
}

function bedroom(){
  background(Bedroom,550,500);
  feedDog.hide();
  replaceFood.hide();

  
}

function garden(){
  background(Garden,550,500);
  feedDog.hide();
  replaceFood.hide();
}

function washroom(){
  background(Washroom,550,500);
  feedDog.hide();
  replaceFood.hide();
}

