
import React from 'react';

const colors = ["#D5C2DE", "#FFFFFF", "#C4AFDA", "#FFFFFF", "#FFFFFF"];

const numBalls = 50;
const balls = [];

function Stars(){
    
    for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `.15em`;
        ball.style.borderRadius = '100%';
        ball.style.position = 'absolute';
        ball.style.opacity = '100%';
        ball.style.zIndex = 0;
        ball.style.height = ball.style.width;

        
        balls.push(ball);
        document.body.append(ball);
    }
    
    return(
        <div>
        </div>
    );
};

export default Stars;