/*
Author: George Khankeldian
Project: CS 559 Programming Assignment 1
File: p1.js
*/

function setup() { "use strict";
  var canvas = document.getElementById('myCanvas');
  var slider1 = document.getElementById('slider1');
  slider1.value = 0;
  var slider2 = document.getElementById('slider2');
  slider2.value = 0;

  var movement = 0;
  function draw() {
    var context = canvas.getContext('2d');
    canvas.width = canvas.width;

    // use the sliders to get the angles
    var mouthSlider = slider1.value;
    var moveSpeed = slider2.value;

    context.save();

    //timer that allow the animations to play in real time
    movement = (movement + (1 * moveSpeed)) % 1200;

    context.save();

    //creates the text that says Poyo Time in different sizes based on movement
    context.font = "100px Impact";

    if(movement % 300 < 150) {
        context.scale(2, 2);
        context.fillText("POYO TIME", 20, 100);
    } else {
        context.fillText("POYO TIME", 240, 170);
    }

    context.restore();
    
    //constantly moves Kirby to the right based on movement
    context.translate(movement, 0);

    //draws/Animates Kirby
    function kirby() {
        context.lineWidth = 3;

        context.save();
        context.translate(-100, 170);

        context.save();

        //back hand
        context.beginPath();
        context.strokeStyle = "#000000";
        context.fillStyle = "#fd99a7";
        context.lineWidth = 3;
        context.rotate(((movement % 60) * Math.PI / 180 ) - 220);
        context.ellipse(-100, 0, 30, 20, 0, Math.PI / 3, Math.PI * 1.65);
        context.fill();
        context.stroke();
        context.closePath();

        context.restore();

        context.save();

        //back leg
        context.beginPath();
        context.fillStyle = "#dd0459";
        context.rotate(((movement % 60) * Math.PI / 180) - 70);
        context.ellipse(0, 100, 50, 30, 0, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.closePath();
        

        context.restore();

        //torso
        context.beginPath();
        context.fillStyle = "#fd99a7";
        context.arc(0, 0, 100, 0, Math.PI * 2);
        context.closePath();
        context.fill();
        context.stroke();

        //creates Kirby's mouth
        kirbyMouth();

        context.save();

        //front hand
        context.beginPath();
        context.fillStyle = "#fd99a7";
        context.rotate(((-movement % 60) * Math.PI / 180 ) - 200);
        context.ellipse(-100, 0, 30, 20, 0, Math.PI / 3, Math.PI * 1.65);
        context.fill();
        context.stroke();
        context.closePath();

        context.restore();

        context.save();

        //front leg
        context.beginPath();
        context.fillStyle = "#dd0459";
        context.rotate(((-movement % 60) * Math.PI / 180) - 270);
        context.ellipse(0, 100, 50, 30, 0, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        context.closePath();

        context.restore();

        //creates Kirby's eyes
        kirbyEyes();

        context.restore();
    }

    //Creates Kirby's eyes and moves the eyes when the mouth opens
    function kirbyEyes() {
        var kirbyEyeX = 80;
        var kirbyEyeY = 0;

        context.save();

        context.rotate((-mouthSlider - 10) * Math.PI / 180);

        context.beginPath();
        context.fillStyle = "#000000";
        context.ellipse(kirbyEyeX, kirbyEyeY, 10, 20, 0, 0, Math.PI * 2);
        context.fill();
        context.closePath();

        context.beginPath();
        context.fillStyle = "#007dff";
        context.ellipse(kirbyEyeX, kirbyEyeY, 7, 17, 0, 0, Math.PI * 2);
        context.fill();
        context.closePath();

        context.beginPath();
        context.fillStyle = "#000000";
        context.arc(kirbyEyeX, kirbyEyeY, 9, 0, Math.PI * 2);
        context.fill();
        context.closePath();

        context.beginPath();
        context.fillStyle = "#ffffff";
        context.ellipse(kirbyEyeX, kirbyEyeY - 8, 6, 9, 0, 0, Math.PI * 2);
        context.fill();
        context.closePath();

        context.restore();
    }

    //creates Kirby's mouth and changes the size of Kirby's mouth
    function kirbyMouth() {
        context.save();

        context.scale(Math.max(mouthSlider / 2.5, 0), Math.max(mouthSlider, 0));

        context.beginPath();
        context.fillStyle = "#000000";
        context.ellipse((90 - mouthSlider / 2.5) / Math.max(mouthSlider / 2.5, 0), 0, 1.1, 1.05, 0, 0, Math.PI * 2);
        context.fill();
        context.closePath();

        context.beginPath();
        context.fillStyle = "#aa1751";
        context.ellipse((90 - mouthSlider / 2.5) / Math.max(mouthSlider / 2.5, 0), 0, 1, 1, 0, 0, Math.PI * 2);
        context.fill();
        context.closePath();

        context.restore();
    }

    //call to create Kirby
    kirby();

    context.restore();

    window.requestAnimationFrame(draw);
  }
  window.requestAnimationFrame(draw);
}
window.onload = setup;