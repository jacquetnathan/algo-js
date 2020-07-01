class Rectangle
{   
    constructor (topLeftXPos, topLeftYPos, width, length)
    {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
    }
    collides(rec2)
    {
        if (this.topLeftXPos < rec2.topLeftXPos + rec2.width &&
            this.topLeftXPos + this.width > rec2.topLeftXPos &&
            this.topLeftYPos + rec2.length &&
            this.length + this.topLeftYPos > rec2.topLeftYPos)
            {
             return(true);
            }
        else
        {
            return(false);
        }
    }
}
let rec1 = new Rectangle (20, 50, 8, 15);
let rec2 = new Rectangle (20, 50, 8, 15);
rec1.collides(rec2);
console.log(rec1.collides(rec2))