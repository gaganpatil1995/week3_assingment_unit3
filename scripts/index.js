// Store the wallet amount to your local storage with key "amount"
function getVal(val){
 return document.querySelector(val)
}

function addAmount(){
    addtowal = document.querySelector("#amount").value
// console.log(addtowal)
total1 = localStorage.getItem("amount")
 total2 = +(total1) + +(addtowal)
    localStorage.setItem("amount",total2)
    window.location.reload()
    // localStorage.clear()
}
 currenBal = localStorage.getItem("amount")|| []
 amount = getVal("#wallet")
 amount.innerText = currenBal