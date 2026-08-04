// IT DEPENDS ON YOU HOW LONG YOU WOULD LIKE TO RUN THE LOOP THIS IS JUST A LEARNING PROJECT,

class Library {
    constructor() {
        this.storeBook = [];
        this.is_issued = false;
    }

    addBook(title, author) {

        this.storeBook.push({ title, author, is_issued: false });
        console.log('Book added successfully');

    }

    listBooks() {

        if (this.storeBook.length === 0) {
            console.log("No books in library");
            return;
        }
        let i = 1;
        for (let book of this.storeBook) {
            let status = book.is_issued ? "Issued" : "Available";
            console.log(`${i} ${book.title} by ${book.author} [${staus}]`)
            i++;
        }
    }

    issueBook(title) {
        for (let book of this.storeBook) {
            if (book.title == title && !book.is_issued) {
                book.is_issued = true;
                console.log('Book issued');
                return;
            }
        }
        console.log("Book not found or already issued");
    }

    returnBook(title) {
        for (let book of this.storeBook) {
            if (book.title == title && book.is_issued) {
                book.is_issued = false;
                console.log('Book returned');
                return;
            }
        }
        console.log("Book not found or not issued");
    }

    seasonMenu() {

        let i = 1;

        while (i < 20000000000) {

            console.log("\n===== Library Menu =====");
            console.log("1. Add Book");
            console.log("2. Show Books");
            console.log("3. Issue Book")
            console.log("4. Return Book");
            console.log("5. Exit");


            let userChoice = Number(prompt("Choce any one option")).trim();

            i++;

            if (userChoice == 1) {

                let title = prompt("Book title: ").trim();
                let author = prompt("Author: ").trim();
                this.addBook(title, author)
            }

            else if (userChoice == 2) {
                this.listBooks();
            }

            else if (userChoice == 3) {
                let title = prompt("Book title to issue: ").trim();
                this.issueBook(title);
            }

            else if (userChoice == 4) {
                let title = prompt("Book title to issue: ").trim();
                this.returnBook(title);
            }

            else if (userChoice == 5) {
                console.log("Good Bye!");
                break;
            }

            else {
                alert("Invalid choice try again");
            }
        }
    }
}

let lib = new Library();
lib.seasonMenu();