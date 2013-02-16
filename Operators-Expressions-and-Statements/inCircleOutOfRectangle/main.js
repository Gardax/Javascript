x=4; // x of the point
y=4; // y of the point
xk=1; // x of the K
yk=1; // y of the K
rk=3; // radius of the K
top=1; //top of the rectangle 
left=-1; // left point of the rectangle
width=6; // width of the rectangle
height=2; // heiht of the rectangle
if ((x<(xk+rk)) && (x>(xk-rk)) && (y<(yk+rk)) && (y>(yk-rk)) 
 && (((x<left) || (x>(left+width))) || ((y>top) || (y<(top-height)))) )
{
	document.write ("The point is out of the rectangle and in the circle!");
}
else
{
	document.write ("The point is not out of the rectangle and in the circle!");
}