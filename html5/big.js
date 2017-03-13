var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var copycanvas = document.getElementById('copycanvas');
var copycontext = copycanvas.getContext('2d');

var square = document.getElementById('square');
var squaredata={};
var box=canvas.getBoundingClientRect();
//alert(box);
var img=new Image();
img.src='1.png';
img.onload=function(){
	canvas.width=img.width;
	canvas.height=img.height;
	context.drawImage(img,0,0);
}

canvas.onmouseover = function(e){
	var x = e.clientX,
		y = e.clientY;
		createSquare(x,y);
		
}

window.onmousemove = function(e) {
	var x = e.clientX,
		y = e.clientY;
		if (x >= canvas.offsetLeft&& x<=canvas.offsetLeft+canvas.width && y>=canvas.offsetTop && y<=canvas.offsetTop+canvas.height) {
			createSquare(x,y);
		} else {
			hideSquare();
			hideCanvas();
		}
		
}


function showSquare(){
	square.style.display='block';
}

function showCanvas(){
	copycanvas.style.display='inline';
}

function hideSquare(){
	square.style.display='none';
}

function hideCanvas(){
	copycanvas.style.display='none';
}

function createSquare(x, y){
    x = x - 45 < canvas.offsetLeft ? canvas.offsetLeft:x - 45;
    y = y - 45 < canvas.offsetTop ? canvas.offsetTop:y - 45;

    x = x + 90 < canvas.width+canvas.offsetLeft ? x:canvas.width+canvas.offsetLeft - 90;
    y = y + 90 < canvas.height+canvas.offsetTop ? y:canvas.height+canvas.offsetTop - 90;

    //alert(canvas.offsetLeft+' '+canvas.offsetTop+' '+box.right+' '+box.bottom);
    //alert(x+y);
    squaredata.left = x;
    squaredata.top = y;
    moveSquare(x,y);
    copy();
}

function moveSquare(x,y){
    square.style.left = x + "px";
    square.style.top = y + "px";
    showCanvas();
    showSquare();
}

function copy(){
	
    copycontext.drawImage(
        canvas,                  
        squaredata.left - canvas.offsetLeft,
        squaredata.top - canvas.offsetTop,
        90,
        90,
        0,0,copycanvas.width,copycanvas.height
    );
}