var start = true;
function Draw () {
var canvas = document.getElementById ("canvas");
var ctx = canvas.getContext ("2d");
var tank = [1,2,3,4];
var randomX, randomY;

function createTank () {
	//alert (tank.length);
	for (var i = Math.round (Math.random () * canvas.width), close = false; i < canvas.width - 60 && i > 0 && close != true; i++) {
        randomX = i;
        close = true;
    }
    for (var i = Math.round (Math.random () * canvas.height), close = false; i < canvas.height - 60 && i > 0 && close != true; i++) {
        randomY = i;
        close = true;
    }
	tank [tank.length] = {
		color: "rgb(" + Math.round (Math.random () * 255) + "," + Math.round (Math.random () * 255) + "," + Math.round (Math.random () * 255) +")",
		color_2: "rgb(" + Math.round (Math.random () * 255) + "," + Math.round (Math.random () * 255) + "," + Math.round (Math.random () * 255) +")",
		x: randomX,
		y: randomY,
		stop: true
	};
	//alert (tank[tank.length - 1].color);
	//alert (tank.length);
	//alert (tank);
	//alert (randomX + "            " + randomY);
	//alert (canvas.width);
	drawTank();
}
function drawTank () {
	ctx.beginPath();
	ctx.fillStyle = tank[tank.length - 1].color;
	ctx.fillRect (tank[tank.length - 1].x, tank[tank.length - 1].y, 15, 60);
	ctx.fillRect (tank[tank.length - 1].x + 45, tank[tank.length - 1].y, 15, 60);
	ctx.fillRect (tank[tank.length - 1].x + 15, tank[tank.length - 1].y + 15, 30, 40);
	ctx.fillStyle = tank[tank.length - 1].color_2;
	ctx.fill (ctx.arc(tank[tank.length - 1].x + 30,tank[tank.length - 1].y + 30,12,0,2 * Math.PI));
	ctx.fillRect (tank[tank.length - 1].x + 26, tank[tank.length - 1].y, 8, 30);
	ctx.closePath();
}
function drawShell () {
	ctx.fillStyle = "green";
	ctx.fillRect (250,500,100,100);
}
    for (;start;) {
        var result = confirm ("Добавить еще танк?");
            if (result) {
                createTank ();
            }
            if (!result ) {
                start = false;
            }
    }
}