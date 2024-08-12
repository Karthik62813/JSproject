
// Initial balance
var balance = 5000;

// Function to update balance display
function updateBalance() {
    document.getElementById("bal").textContent =("Available Balance:"+balance)
}

// Debit button functionality
if(document.getElementById("sub")){
document.getElementById("sub").addEventListener("click", () => {
    let pin = +prompt("Enter Pin")
    if(pin == 4444){
        let amount = parseInt(document.getElementById("deb_amt").value);
        if (!isNaN(amount) && amount > 0 && amount <= balance) {
            alert(amount+" debitted successfully")
            balance -= amount;
            updateBalance();
        } 
        else if(isNaN(amount)){
            alert("Please enter a valid amount");
        }
        else
            alert("Please ensure sufficient balance")
    }
    else
        alert("enter correct pin")
});
}

// Credit button functionality
else if(document.getElementById("add")){
    document.getElementById("add").addEventListener("click", () => {
        let pin = +prompt("Enter Pin")
        if(pin == 4444){
            let amount = parseInt(document.getElementById("cre_amt").value);
            if (!isNaN(amount) && amount > 0) {
                alert(amount+" creditted successfully")
                balance += amount;
                updateBalance();
            } 
            else {
                alert("Please enter a valid amount");
            }
        }
        else
            alert("enter correct pin")
    
    });
    }

else{
    document.getElementById("acc").addEventListener("click",()=>{
        let pin = +prompt("Enter Pin")
        if(pin == 4444){
            location.href=("account.html")
            updateBalance();
        }
        else
            alert("enter correct pin")
    })

}