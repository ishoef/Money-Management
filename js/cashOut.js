

const withDrawBtn = document.getElementById("cash-out")
.addEventListener('click', (e) => {
    e.preventDefault();
    const agentNumber = document.getElementById("agentNumber").value;
    const convertedAgentNumber = agentNumber;

    const withdorawAmmount = document.getElementById("withdrawAmmount").value;
    const convertedWithAmmount = parseFloat(withdorawAmmount);

    const withdrowPin = document.getElementById("withdrawPin").value;
    const convertedwithdrawPin = parseInt(withdrowPin);

    const mainBalance = document.getElementById("mainBalance").innerText;
    const convertedBalance = parseFloat(mainBalance);

    const sum = convertedBalance - convertedWithAmmount;
    if (convertedAgentNumber.length === 11) {
        if(convertedwithdrawPin === 1234 ){
            if (mainBalance === "0"){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Your Balance is Zero",
                });
            } else{
                document.getElementById("mainBalance").innerText = sum;
                Swal.fire({
                    title: `withdraw ${convertedWithAmmount} Tk to the ${convertedAgentNumber}`,
                    text: `Now your balance is ${sum} Tk`,
                    icon: "success",
                    draggable: true
                });
            }
        }
        else{
            alert('apnar pin thik nai')
        }
        
    }
    else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "apnar agent number thik nai",
        });
    }
    
    document.getElementById("agentNumber").value = '';
    document.getElementById("withdrawAmmount").value = '';
    document.getElementById("withdrawPin").value = '';
})


