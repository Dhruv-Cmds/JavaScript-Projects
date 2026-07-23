// 1. Create a navbar and change the color of its first element to red,

document.body.firstElementChild.firstElementChild.firstElementChild.style.backgroundColor = "red"

// 2. Create a table without t body now use "view page source" button to check wheather it has a tbody or not,

// 3. Create an element with 3 children. Now change the color of first and last elememt to green,

document.body.childNodes[5].firstElementChild.style.backgroundColor = "green"
document.body.childNodes[5].lastElementChild.style.backgroundColor = "green"

// 4. Write a JavaScript code to change background of all <li> tags to cyan,

let items = document.getElementsByTagName('li');

for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = 'cyan';
}

// 5. Which of the following is used to look for the far that ancestor that matchs a given CSS selector
// (a). matchs (b). closest (c). Contains (d). none of these

/*

    The closest() method in JavaScript finds the nearest matching ancestor of an element by CSS selector, 
    walking up the DOM tree.  
    It checks the element itself first, then its parent, grandparent, and so on, returning 
    the first match or null if none is found.
    This is distinct from matches(), which tests the element itself without climbing the tree, and contains(), 
    which checks if a node is a descendant of another. 

*/

// ANS = (b). closest

/*
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>

        <style>
            nav ul li {
                height: 45px;
                width: 56px;
                border: 2px solid black;
                margin: 5px;
                padding: 5px;
                text-decoration: none;
                list-style: none;
            }

            .box{
                height: 45px;
                width: 56px;
                border: 2px solid black;
                margin: 5px;
                padding: 5px;
            }
        </style>
    </head>

    <body>

        <nav>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contect</li>
                <li>FAQ</li>
            </ul>
        </nav>

        <table>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
            </tr>
        </table>


        <div class="container">
            <div class="box">Box1</div>
            <div class="box">Box2</div>
            <div class="box">Box3</div>
        </div>

        <script src="JavaScript-practice/practice_6.js"></script>

    </body>

    </html>
*/