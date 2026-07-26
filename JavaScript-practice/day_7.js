let btn  = document.getElementById("btn")

btn.addEventListener("click", () => {
    document.querySelector(".box").innerHTML = "HI";
})

document.addEventListener("click", (e) => {
    e.stopPropagation()
    let a = document.getElementsByClassName("box").length;
    console.log(a);
})


/*
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
        <div class="container">
            <div class="box">Hey I am a box</div>       
        </div>

        <button id="btn">Change content</button>
        <script src="JavaScript-practice/day_7.js"></script>
    </body>
    </html>
*/