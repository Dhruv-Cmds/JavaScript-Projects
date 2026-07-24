// let boxes = document.getElementsByClassName("box");

// console.log(boxes);

// boxes[2].style.backgroundColor = "red";

// document.body.firstElementChild.childNodes[5].style.backgroundColor = "red";



// let middelBox = document.getElementById("middle-box");

// middelBox.style.backgroundColor = "red";

// document.getElementById("middle-box").style.backgroundColor = "purple";


// document.querySelector(".box").style.backgroundColor = "green";



let color = document.querySelectorAll(".box")

color.forEach(e => {
    e.style.backgroundColor = "red"
});

// for (let i = 0; i < color.length; i++){
//     color[i].style.backgroundColor = "red"
// };

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor = "red"
});



/*

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>

            .box{
                height: 34px;
                width: 34px;
                padding: 34px;
                margin: 34px;
                border: 2px solid black
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="box">Box 1</div>
            <div class="box">Box 2</div>
            <div id=" middle-box" class="box">Box 2.5</div>
            <div class="box">Box 3</div>
            <div class="box">Box 4</div>
            <div class="box">Box 5</div>
        </div>

        <script src="JavaScript-practice/day_6.js"></script>
    </body>
    </html>

*/