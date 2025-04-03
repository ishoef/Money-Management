

document.getElementById("login-section").classList.remove("hidden");
const addMoney = document.getElementById('add-money');

// addMoney input fields

addMoney.addEventListener('click', (e) => {
    e.preventDefault();

    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedBalance = parseFloat(mainBalance);
    const addedAmount = document.getElementById("amount-for-add").value;
    const convertedAmount = parseFloat(addedAmount);
    
    const addPin = document.getElementById("addPin").value;
    const convertedPin = parseInt(addPin);

    const bankAccountNumber = document.getElementById("addBankAccount").value;
    const covnertedBankAcocuntNumber = bankAccountNumber;
    console.log(covnertedBankAcocuntNumber);
    const sum = convertedBalance + convertedAmount;

    if (convertedPin === 1234 && covnertedBankAcocuntNumber.length === 11) {
        document.getElementById("mainBalance").innerText = sum;
        Swal.fire({
            title: `Added ${convertedAmount} Tk to the balance`,
            text: `your balance is ${sum} Tk`,
            icon: "success",
            draggable: true
        });
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "আপনার সঠিক তথ্য দিন",
        });
    }

    document.getElementById("addBankAccount").value = '';
    document.getElementById("amount-for-add").value = '';
    document.getElementById("addPin").value = '';
})