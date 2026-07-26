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