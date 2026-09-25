
class BankAccount {

    accountHolder = "Rimjhim";
    accountno="2456";
    balance = 5000;

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
        console.log("Current Balance:", this.balance);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
            console.log("Current Balance:", this.balance);
        } else {
            console.log("Insufficient Balance");
        }
    }

    display() {
        console.log("Account Holder:", this.accountHolder);
        console.log("Balance:", this.balance);
        console.log("accountno. :",this.accountno)
    }
}

let acc1 = new BankAccount();

acc1.display();
acc1.deposit(2000);
acc1.withdraw(1000);