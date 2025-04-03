document.getElementById("addmoney").classList.add("hidden");
document.getElementById("cashout").classList.add("hidden");
document.getElementById("transfermoney").classList.add("hidden");
document.getElementById("getbonus").classList.add("hidden");
document.getElementById("Pay-Bill").classList.add("hidden");


// Add Money Toggle

const addMoneyBtn = document.getElementById("addmoneybtn");
addMoneyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("transactions").classList.add("hidden");
    document.getElementById("transfermoney").classList.add("hidden");
    document.getElementById("addmoney").classList.remove("hidden");
    document.getElementById("cashout").classList.add("hidden");
    document.getElementById("getbonus").classList.add("hidden");
    document.getElementById("Pay-Bill").classList.add("hidden");
})

 
// Cash Out Toggle

const cashOut = document.getElementById("cashOut");
cashOut.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("addmoney").classList.add("hidden");
    document.getElementById("cashout").classList.remove("hidden");
    document.getElementById("transactions").classList.add("hidden");
    document.getElementById("getbonus").classList.add("hidden");
    document.getElementById("Pay-Bill").classList.add("hidden");
    document.getElementById("transfermoney").classList.add("hidden");

})


// Transfar Money Toggle

const transfarMoney = document.getElementById("transfarMoney");
transfarMoney.addEventListener('click', (e) => {
    e.preventDefault();

    document.getElementById("transactions").classList.add("hidden");
    document.getElementById("transfermoney").classList.remove("hidden");
    document.getElementById("addmoney").classList.add("hidden");
    document.getElementById("cashout").classList.add("hidden");
    document.getElementById("getbonus").classList.add("hidden");
    document.getElementById("Pay-Bill").classList.add("hidden");
})


// getBonus toggle

const getBonus = document.getElementById("getBouns");
getBonus.addEventListener('click', (e) => {
    e.preventDefault();

    document.getElementById("transactions").classList.add("hidden");
    document.getElementById("transfermoney").classList.add("hidden");
    document.getElementById("addmoney").classList.add("hidden");
    document.getElementById("cashout").classList.add("hidden");
    document.getElementById("getbonus").classList.remove("hidden");
    document.getElementById("Pay-Bill").classList.add("hidden");
})


// Pay Bill Toggle

const payBill = document.getElementById("payBill");
payBill.addEventListener('click', (e) => {
    e.preventDefault();

    document.getElementById("transactions").classList.add("hidden");
    document.getElementById("transfermoney").classList.add("hidden");
    document.getElementById("addmoney").classList.add("hidden");
    document.getElementById("cashout").classList.add("hidden");
    document.getElementById("getbonus").classList.add("hidden");
    document.getElementById("Pay-Bill").classList.remove("hidden");
})


// Transactions

const transactions = document.getElementById("transactionsToggle");
transactions.addEventListener('click', (e) => {
    e.preventDefault();

    document.getElementById("transactions").classList.remove("hidden");
    document.getElementById("transfermoney").classList.add("hidden");
    document.getElementById("addmoney").classList.add("hidden");
    document.getElementById("cashout").classList.add("hidden");
    document.getElementById("getbonus").classList.add("hidden");
    document.getElementById("Pay-Bill").classList.add("hidden");
})


