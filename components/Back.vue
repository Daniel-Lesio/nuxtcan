<template>
    <canvas>
    </canvas>
</template>
<script>
export default {
    mounted(){
        'use strict'
            const canvas = document.querySelector('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            const c = canvas.getContext('2d')

            const mouse = {
                x: undefined,
                y : undefined,
}
window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
})
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})
const maxRadius = 10;
const minRadius = 5;
const colorArray = [
    '#00E597',
    '#00cf89',
    '#00ba7b',
    '#00a46d',
    '#008f5f',
]
function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = () => {
        c.beginPath();
        c.arc(this.x,this.y , this.radius, Math.PI / 180 * 0, Math.PI  * 2,false);
        c.fillStyle = this.color;
        c.fill()
    }
    this.update = () =>{
        if(this.x + this.radius >innerWidth || this.x < 0 ){
            this.dx = -this.dx    
        }
        if(this.y + this.radius >innerHeight || this.y < 0 ){
            this.dy = -this.dy    
        }
        this.x += this.dx;
        this.y += this.dy;
        //interaction
        if(mouse.x - this.x<50 && mouse.x-this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 ){
            if(this.radius < maxRadius){
                
                this.radius += 1;
            }
            
        }
        else if(this.radius > minRadius) {
            this.radius -= 1
        }
        this.draw();

    }
}

var circleArray = [];

function init(){
 circleArray = [];
    for (let i = 0 ; i< 500 ; i++){
        let radius = Math.random() * 3 + 1;
        let x = Math.random() * (innerWidth -radius * 2 ) + radius;
        let y = Math.random() * (innerHeight - radius * 2) + radius  ;
        let dx = (Math.random() - 0.5) *4 ;
        let dy = (Math.random() - 0.5) *4 ;
        circleArray.push(new Circle(x,y,dx,dy,radius))
    }
}
init()

function animate(){
    c.clearRect(0,0,innerWidth,innerHeight)
    circleArray.forEach(circle => {
        circle.update();
    });
    requestAnimationFrame(animate);
}
animate();
    }
}
</script>
<style lang="scss">
canvas{
    position: fixed;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
    margin: 0px;
    padding: 0px;
    background: radial-gradient(rgba(#007a51,1),#1c1c1c);
}
</style>

