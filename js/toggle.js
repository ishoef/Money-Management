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

    addMoneyBtn.classList.add("active");
    cashOut.classList.remove("active");
    transfarMoney.classList.remove("active");
    getBonus.classList.remove("active");
    payBill.classList.remove("active");
    transactions.classList.remove("active");
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

    addMoneyBtn.classList.remove("active");
    cashOut.classList.add("active");
    transfarMoney.classList.remove("active");
    getBonus.classList.remove("active");
    payBill.classList.remove("active");
    transactions.classList.remove("active");
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

    addMoneyBtn.classList.remove("active");
    cashOut.classList.remove("active");
    transfarMoney.classList.add("active");
    getBonus.classList.remove("active");
    payBill.classList.remove("active");
    transactions.classList.remove("active");
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
    
    addMoneyBtn.classList.remove("active");
    cashOut.classList.remove("active");
    transfarMoney.classList.remove("active");
    getBonus.classList.add("active");
    payBill.classList.remove("active");
    transactions.classList.remove("active");
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
    
    addMoneyBtn.classList.remove("active");
    cashOut.classList.remove("active");
    transfarMoney.classList.remove("active");
    getBonus.classList.remove("active");
    payBill.classList.add("active");
    transactions.classList.remove("active");
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
    
    addMoneyBtn.classList.remove("active");
    cashOut.classList.remove("active");
    transfarMoney.classList.remove("active");
    getBonus.classList.remove("active");
    payBill.classList.remove("active");
    transactions.classList.add("active");
})


