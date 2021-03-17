
import React from 'react';

const colors = ["#D5C2DE", "#FFFFFF", "#C4AFDA", "#FFFFFF", "#FFFFFF"];

const numBalls = 50;
const balls = [];

///////REFACTOR
// {
//     numBalls.map(ball => (
//         <>
        
//         </>
//     ))
// }

function Stars(){
    
    for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement("div");
        ball.classList.add("ball");
        ball.style.background = colors[Math.floor(Math.random() * colors.length)];
        ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
        ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
        ball.style.transform = `scale(${Math.random()})`;
        ball.style.width = `.25em`;
        ball.style.borderRadius = '100%';
        ball.style.position = 'absolute';
        ball.style.opacity = '50%';
        ball.style.zIndex = 0;
        ball.style.height = ball.style.width;

        
        balls.push(ball);
        document.body.append(ball);
    }
    
    // Keyframes
    balls.forEach((el, i, ra) => {
        let to = {
            x: Math.random() * (i % 2 === 0 ? -11 : 11),
            y: Math.random() * 12
        };
    
        let anim = el.animate(
            [
            { transform: "translate(0, 0)" },
            { transform: `translate(${to.x}rem, ${to.y}rem)` }
            ],
            {
            duration: (Math.random() + 1) * 10000, // random duration
            direction: "alternate",
            fill: "both",
            iterations: Infinity,
            easing: "ease-in-out"
            }
        );
    });
    return(
        <div>
        </div>
    );
};

export default Stars;