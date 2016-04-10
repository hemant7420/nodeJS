//This is a bank account project 

var account = {
	balance : 0
};
//function deposit
function deposit(account,amount){
	account.balance+=amount;
	console.log("Your account has been credited. New account balance "+account.balance);
}
//function withdraw
function withdraw(account,amount){
	account.balance-=amount;
	console.log("Your account has been debited. New account balance "+account.balance);
}
//function get_bal
function get_bal(account){
	console.log("Your account balance is "+account.balance);
}

deposit(account,10000);
withdraw(account,5000);
get_bal(account);
deposit(account,10000);