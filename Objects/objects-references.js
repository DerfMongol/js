//lesson
let myAccount = {
    name: 'Lee Martin',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}
let addIncome = function (account, amount) {
    account.income = account.income + amount
}
let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}
let getAccountSummary = function (account) {
    let balance = account.income - account.expenses
    console.log(`Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`)
}
addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)