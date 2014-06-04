(function () {
    var ctx = document.getElementById("mainCanvas").getContext("2d");
    ctx.strokeStyle = "#61848c";
    ctx.lineWidth = 2;
    
    //bike
    ctx.arc(60, 250, 40, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#90cad7";
    ctx.fill();
    ctx.stroke();

    ctx.moveTo(60, 250);
    ctx.lineTo(140, 250);
    ctx.stroke();
    ctx.moveTo(155, 250);
    ctx.arc(140, 250, 15, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.moveTo(140, 250);
    ctx.lineTo(240, 190);
    ctx.lineTo(110, 190);
    ctx.stroke();
    ctx.moveTo(100, 170);
    ctx.lineTo(140, 250);
    ctx.moveTo(85, 170);
    ctx.lineTo(115, 170);
    ctx.moveTo(129, 242);
    ctx.lineTo(119, 231);
    ctx.moveTo(152, 258);
    ctx.lineTo(164, 267);
    ctx.moveTo(235, 160);
    ctx.lineTo(205, 167);
    ctx.moveTo(235, 160);
    ctx.lineTo(260, 140);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.arc(260, 250, 40, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#90cad7";
    ctx.fill();
    ctx.moveTo(235, 160);
    ctx.lineTo(260, 250);
    ctx.closePath();
    ctx.stroke();

    //face
    ctx.beginPath();
    ctx.arc(110, 100, 40, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#90cad7";
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(90, 90);
    drawEllipseByCenter(ctx, 90, 90, 16, 10);
    drawEllipseByCenter(ctx, 88, 90, 3, 8);
    ctx.fillStyle = "#61848c";
    ctx.fill();
    //eyes
    drawEllipseByCenter(ctx, 124, 90, 16, 10);
    drawEllipseByCenter(ctx, 122, 90, 3, 8);
    ctx.fillStyle = "#61848c";
    ctx.fill();
    //nose
    ctx.moveTo(105, 90);
    ctx.lineTo(97, 105);
    ctx.lineTo(105, 105);
    ctx.stroke();
    //mouth
    ctx.moveTo(105, 123);
    drawEllipseByCenter(ctx, 105, 123, 30, 10);
    //hat
    ctx.strokeStyle = "black"
    ctx.fillStyle = "#396693";
    ctx.lineWidth = 2;
    ctx.moveTo(110, 60);
    drawEllipseByCenter(ctx, 110, 60, 100, 20);
    ctx.fill();
    ctx.moveTo(89, 10);
    ctx.lineTo(89, 50);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(90,50);
    ctx.bezierCurveTo(90, 50, 105, 70, 135, 52);
    ctx.lineTo(135, 10);
    ctx.lineTo(90, 10);
    ctx.fill();
    ctx.stroke();
    ctx.lineWidth = 3;
    drawEllipseByCenter(ctx, 112, 10, 44, 16);
    ctx.fill();

    //house
    // walls
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = "#975b5b";
    ctx.strokeStyle = "#000000";
    ctx.fillRect(400, 200, 305, 230);
    ctx.strokeRect(400, 200, 305, 230);
    ctx.closePath();

    // roof
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.moveTo(400, 200);
    ctx.lineTo(552, 35);
    ctx.lineTo(703, 200);
    ctx.lineTo(400, 200);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();

    // windows
    // window 1
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#975b5b";
    ctx.lineWidth = 4;
    ctx.fillRect(420, 225, 105, 70);
    ctx.moveTo(472, 225);
    ctx.lineTo(472, 295);
    ctx.moveTo(420, 260);
    ctx.lineTo(525, 260);
    ctx.stroke();
    ctx.closePath();

    // window 2
    ctx.beginPath();
    ctx.fillRect(570, 225, 105, 70);
    ctx.moveTo(622, 225);
    ctx.lineTo(622, 295);
    ctx.moveTo(570, 260);
    ctx.lineTo(675, 260);
    ctx.stroke();
    ctx.closePath();

    // window 3
    ctx.beginPath();
    ctx.fillRect(570, 325, 105, 70);
    ctx.moveTo(622, 325);
    ctx.lineTo(622, 395);
    ctx.moveTo(570, 360);
    ctx.lineTo(675, 360);
    ctx.stroke();
    ctx.closePath();

    // door
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = "#975b5b";
    ctx.lineWidth = 2;
    ctx.save();
    ctx.scale(1, 0.6);
    ctx.arc(473, 565, 40, Math.PI + 0.1, Math.PI * 2 - 0.1, false);
    ctx.restore();
    ctx.moveTo(433, 335);
    ctx.lineTo(433, 429);
    ctx.moveTo(513, 335);
    ctx.lineTo(513, 429);
    ctx.moveTo(473, 315);
    ctx.lineTo(473, 429);
    ctx.stroke();
    ctx.closePath();

    // left doorknob
    ctx.beginPath();
    ctx.arc(460, 395, 5, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    // right doorknob
    ctx.beginPath();
    ctx.arc(485, 395, 5, 0, Math.PI * 2, false);
    ctx.stroke();
    ctx.closePath();

    // chimney
    ctx.fillRect(625, 80, 30, 85);
    ctx.fill();
    ctx.moveTo(625, 79);
    ctx.lineTo(625, 165);
    ctx.moveTo(655, 79);
    ctx.lineTo(655, 165);
    ctx.save();
    ctx.scale(1, 0.3);
    ctx.arc(640, 260, 15, 0, Math.PI * 2, false);
    ctx.restore();
    ctx.fill();
    ctx.stroke();

}());

function drawEllipseByCenter(ctx, cx, cy, w, h) {
    drawEllipse(ctx, cx - w / 2.0, cy - h / 2.0, w, h);
}

function drawEllipse(ctx, x, y, w, h) {
    var kappa = .5522848,
        ox = (w / 2) * kappa, // control point offset horizontal
        oy = (h / 2) * kappa, // control point offset vertical
        xe = x + w,           // x-end
        ye = y + h,           // y-end
        xm = x + w / 2,       // x-middle
        ym = y + h / 2;       // y-middle

    ctx.beginPath();
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    ctx.closePath();
    ctx.stroke();
}