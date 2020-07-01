class Circle 
{
    constructor(xPos, yPos, radius) 
    {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
     move(xOffset, yOffset)
     {
        this.xPos = this.xPos + xOffset; /* version opti mettre "this.xPos += xOffset;" */
        this.yPos = this.yPos + yOffset; /* version opti mettre "this.yPos += yOffset;" */
     }
     get surface()
     {
         return Math.PI*(Math.pow(this.radius, 2));
     }
}
let cercle = new Circle(10, 20, 3);
console.log(cercle);
cercle.move(10,20);
console.log(cercle);
console.log(cercle.surface);