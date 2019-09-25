function init() {
    var cv = document.querySelector('#cv');

    var c = cv.getContext('2d');

    var container = {
        x: 100,
        y: 100,
        width: cv.width,
        height: cv.height
    }
    var circles = [{
            x: 400,
            y: 400,
            r: 50,
            color: 25,
            vx: 6,
            vy: 10
        },
        {
            x: 500,
            y: 300,
            r: 100,
            color: 125,
            vx: 2,
            vy: -8
        },
        {
            x: 800,
            y: 350,
            r: 25,
            color: 285,
            vx: 20,
            vy: -20
        },
        {
            x: 800,
            y: 700,
            r: 75,
            color: 325,
            vx: 13,
            vy: -8
        },
        {
            x: 400,
            y: 500,
            r: 120,
            color: 175,
            vx: -4,
            vy: -6
        },

    ];

    // console.log(circle);

    var previusFrameTime = 0;
    //    
    function draw(time) {

        var fps = document.querySelector('#fps');


        var FPS = Math.floor(1000 / (time - previusFrameTime));
        fps.textContent = `${FPS} FPS`;

        previusFrameTime = time;
        // console.log(FPS);

        // c.font = 'normal bold 4em courier';

        //   context.clearRect(0, 0, canvas.width, canvas.height)
        // c.fillText(FPS, 200, 200);




        c.fillStyle = 'black';
        c.strokeStyle = 'black';
        c.fillRect(container.x, container.y, container.width, container.height);
        //c.clearRect(container.x,container.y,container.width,container.height);
        //c.strokeRect(container.x,container.y,container.width,container.height);

        for (var i = 0; i < circles.length; i++) {
            c.fillStyle = 'hsl(' + circles[i].color + ',100%,50%)';
            c.beginPath();
            c.arc(circles[i].x, circles[i].y, circles[i].r, 0, 2 * Math.PI, false);
            c.fill();

            if ((circles[i].x + circles[i].vx + circles[i].r > container.x + container.width) || (circles[i].x - circles[i].r + circles[i].vx < container.x)) {
                circles[i].vx = -circles[i].vx;
            }
            if ((circles[i].y + circles[i].vy + circles[i].r > container.y + container.height) || (circles[i].y - circles[i].r + circles[i].vy < container.y)) {
                circles[i].vy = -circles[i].vy;
            }
            circles[i].x += circles[i].vx;
            circles[i].y += circles[i].vy;
        }



        requestAnimationFrame(draw);

    }


    requestAnimationFrame(draw);
}


window.addEventListener('load', init, false);