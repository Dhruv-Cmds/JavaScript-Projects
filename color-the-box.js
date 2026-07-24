// let colors = ["red", "green", "Blue", "Brown", "black", "grey", "orange", "purple"]

// const change_color_of_box = () => {

//     let random_color = document.querySelectorAll(".box");

//     random_color.forEach(color => {
//         color.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
//     });

// }

// change_color_of_box()


const change_color_of_box = () => {

    let random_color = document.querySelectorAll(".box");

    random_color.forEach(color => {

        let red = Math.floor(Math.random() * 255);
        let greem = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);
        
        color.style.backgroundColor = `rgb( ${red}, ${greem},${blue})`
    })

    random_color.forEach(color => {
        color.addEventListener("click", () => {

            let red = Math.floor(Math.random() * 255);
            let green = Math.floor(Math.random() * 255);
            let blue = Math.floor(Math.random() * 255);

            color.style.backgroundColor = `rgb(${red},${green},${blue})`
        })
    });

}

change_color_of_box()



/* 
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>

            .box {
                height: 180px;
                width: 180px;
                border: 2px solid black;
                color: rgb(255, 255, 255);

                display: flex;
                justify-content: center;
                align-items: center;
                transition: transform 0.2s ease
            }

            .box:hover {
                transform: scale(1.2);
                transform: 300ms;
            }

            .container {
                margin-top: 20%;

                display: flex;
                justify-content: center;
                align-items: center;
                gap: 23px;

                font-family: monospace;
                font-size: 40px;
                font-weight: 600;
            }

        </style>
    </head>

    <body>
        <!-- 
            Given 5 boxes, Assign a random color and a random background to each box using DOM concepts
        -->

        <div class="container">
            <div class="box">Box 1</div>
            <div class="box">Box 2</div>
            <div class="box">Box 3</div>
            <div class="box">Box 4</div>
            <div class="box">Box 5</div>
        </div>

        <script src="color-the-box.js"></script>
    </body>

    </html>
*/