class Rectangle
{   
    constructor (topLeftXPos, topLeftYPos, width, length)
    {
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
    }
    collides(otherRec)
    {
        if (this.topLeftXPos < otherRec.topLeftXPos + otherRec.width &&
            this.topLeftXPos + this.width > otherRec.topLeftXPos &&
            this.topLeftYPos + otherRec.length &&
            this.length + this.topLeftYPos > otherRec.topLeftYPos)
            {
             return(true);
            }
        else
        {
            return(false);
        }
    }
}