console.log('load');

const COLORS = ['red', 'green', 'blue', 'orange', 'black', 'gold', 'fuchsia'];
const COUNT_RECT = 5;
const WIDTH_RECT = 10;
const HEITH_RECT = 100;

//FIRST CANVAS
let canvas_1 = document.getElementById('_1');
//FOR DRAWING AREA
canvas_1.width = WIDTH_RECT * COLORS.length * COUNT_RECT;
canvas_1.height = HEITH_RECT;
//FOR STYLE CSS
canvas_1.style.width = canvas_1.width;
canvas_1.style.height = canvas_1.height;
//DRAWING
COLORS.forEach((elem, index) => 
{
    for(let i = 0; i < COUNT_RECT; i++)
    {
        let context = canvas_1.getContext('2d');
        context.fillStyle = elem;
        context.globalAlpha = i / COUNT_RECT;
        // console.log(index + 1);  
        context.fillRect((i + index * COUNT_RECT) * WIDTH_RECT, 0, WIDTH_RECT, HEITH_RECT);
    }
});

const COUNT_BALLS = 30;
const MIN_RADIUS = 10;//px
const MAX_RADIUS = 20;//px
let canvas_2 = document.getElementById('_2');
//FOR DRAWING AREA
canvas_2.width = window.innerWidth;
canvas_2.height = window.innerHeight;
//FOR STYLE CSS
canvas_2.style.width = canvas_2.width;
canvas_2.style.height = canvas_2.height;
for(let i = 0; i < COUNT_BALLS; i++)
{
    let context = canvas_2.getContext('2d');
    context.beginPath();
    context.arc
    (
        (canvas_2.width - 200) * Math.random() + 100, 
        (canvas_2.height - 200) * Math.random() + 100, 
        Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,
        0, Math.PI * 2
    );
    context.fillStyle = COLORS[parseInt(Math.random() * COLORS.length)];
    context.fill();
}
