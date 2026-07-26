// IT DEPENDS ON YOU HOW LONG YOU WOULD LIKE TO RUN THE LOOP THIS IS JUST A LEARNING PROJECT,

class Bank {
    constructor(acc_no, name, balance) {

        this.acc_no = acc_no;
        this.name = name;
        this.balance = balance;
    }

    deposit() {

        let i = 1;

        while (i < 2) {

            let amount = Number(prompt("Enter amount for deposit"));

            i++;

            if (amount > 0) {

                this.balance += amount;
                console.log(`Deposited ${amount}. New balance: ${this.balance}`);
            }

            else {
                console.log("Deposit amount must be positive.");
            }
        }
    }

    withdraw() {

        let i = 1;

        while (i < 2) {

            let amount = Number(prompt("Enter amount for deposit."));
            
            i++;

            if (amount <= 0) {
                console.log("Amount must be greater then 0.");
                return;
            }
            
            if (amount > this.balance) {
                console.log("Insufficient funds.")
                return;
            }

            this.balance -= amount;
            console.log(`Withdraw ${amount}. New balance: ${this.balance}`);
        }
            
    }

    showBalance() {

        console.log("Account No:", this.acc_no);
        console.log("Name:", this.name);
        console.log("Balance:", this.balance);
    }

    seasonMenu() {

        let i = 1;

        while (i < 2) {

            console.log("\n---SEASON MENU---");
            console.log("1. Deposit");
            console.log("2. Withdraw");
            console.log("3. Show Balance");
            console.log("4. Logout");

            let userChoice = Number(prompt("Choce any one option"));

            i++;

            if (userChoice == 1) {
                this.deposit();
            }

            else if (userChoice == 2) {
                this.withdraw();
            }

            else if (userChoice == 3) {
                this.showBalance();
            }

            else if (userChoice == 4) {
                console.log("Good Bye!");
                break;
            }

            else {
                alert("Invalid choice try again");
            }
        }
    }
}

let b = new Bank(101, "Alice", 1000);
b.seasonMenu();