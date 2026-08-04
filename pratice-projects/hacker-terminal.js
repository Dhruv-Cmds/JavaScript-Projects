/* Create a hacking simulator which has green background and it shows these messages with random delay of 1 to 7 seconds

Initializing Hacking...
Reading your Files...
Password files Detected...
Sending all passwords and personal files to server...
Cleaning up...

the threee dots must blink so taht it looks like a real terminal
*/



let names = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all passwords and personal files to server",
    "Cleaning up",
];

async function hacker() {
    for (let i = 0; i < names.length; i++) {
        await new Promise((resolve) => {
            setTimeout(() => {
                document.getElementById(`n${i + 1}`).innerHTML = `<span>${names[i]}</span><span class="dots"></span>`;
                resolve();
            }, (Math.floor(Math.random() * 7) + 1) * 1000);
        });
    }
}
  
hacker();






















/*
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                background-color: rgb(0, 0, 0);
            }

            p, h3 {
                margin-bottom: 120px;
                margin: 3px;
                padding: 3px;

                color: rgb(142, 56, 255);
                font-width: 600;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .dots::after {
        content: "";
        display: inline-block;
        width: 1.5em;
        text-align: left;
        animation: blinkDots 1s steps(4, end) infinite;
    }

    @keyframes blinkDots {
        0%   { content: ""; }
        25%  { content: "."; }
        50%  { content: ".."; }
        75%,
        100% { content: "..."; }
    }

        </style>
    </head>

    <body>

        <h3>Hacker's Terminal</h3>

        <p id="n1"></p>
        <p id="n2"></p>
        <p id="n3"></p>
        <p id="n4"></p>
        <p id="n5"></p>

        <script src="hacker-terminal.js"></script>
    </body><!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                background-color: rgb(0, 0, 0);
            }

            p, h3 {
                margin-bottom: 120px;
                margin: 3px;
                padding: 3px;

                color: rgb(142, 56, 255);
                font-width: 600;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            .dots::after {
        content: "";
        display: inline-block;
        width: 1.5em;
        text-align: left;
        animation: blinkDots 1s steps(4, end) infinite;
    }

    @keyframes blinkDots {
        0%   { content: ""; }
        25%  { content: "."; }
        50%  { content: ".."; }
        75%,
        100% { content: "..."; }
    }

        </style>
    </head>

    <body>

        <h3>Hacker's Terminal</h3>

        <p id="n1"></p>
        <p id="n2"></p>
        <p id="n3"></p>
        <p id="n4"></p>
        <p id="n5"></p>

        <script src="hacker-terminal.js"></script>
    </body>

    </html>

    </html>
*/