class Milk{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.image = loadImage("images/bottle.png");

        this.bedroom = loadImage("images/virtual pet images/Bed Room.png");
        this.garden = loadImage("images/virtual pet images/Garden.png");
        this.washroom = loadImage("images/virtual pet images/Wash Room.png");

    }

    display(){
        push();
        image(this.image,this.x,this.y,this.width,this.height);
        pop();
    }

}