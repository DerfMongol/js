const account = {
    name: 'Lee Martin',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalOut = 0
        let totalIn = 0
        this.expenses.forEach(function (item) {
            totalOut += item.amount
        })
        this.income.forEach(function (item) {
            totalIn += item.amount
        })
        return `${this.name} has a balance of $${totalIn  - totalOut}. $${totalIn} in income. $${totalOut} in expenses.`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())
console.log(account)
