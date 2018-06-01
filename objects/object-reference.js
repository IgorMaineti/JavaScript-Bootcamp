let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
    return account;
}

let addIncome = function(account, amount) {
    account.income = account.income + amount
    return account
}


let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
    return account
}

let getAccountSummary = function(account) {
    let totalAmount = account.income - account.expenses
    return `Account for ${account.name} has $${totalAmount}. $${account.income} in income. ${account.expenses} in expenses.`
}


addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))




