const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalAmountExpenses = 0
        let totalAmountIncome = 0
        this.income.forEach(function(income) {
            totalAmountIncome = income.amount + totalAmountIncome
        })
        this.expenses.forEach(function(expense){
            totalAmountExpenses = expense.amount + totalAmountExpenses
        })
        const totalAmountBalance = totalAmountIncome - totalAmountExpenses
        return (`${this.name} has a balance of $${totalAmountBalance}. $${totalAmountIncome} in income. $${totalAmountExpenses} in expenses.`)
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffe', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())

//Expense -> description, amount
//addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Andrew Mead has $1250 in expenses.