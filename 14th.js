
 const myCheckBox = document.getElementById("myCheckBox");
 const visaBtn = document.getElementById("visaBtn");
 const masterCardBtn = document.getElementById("masterCardBtn");
 const payPalBtn = document.getElementById("payPalBtn");
 const mySubmit = document.getElementById("mySubmit");
 const subResult = document.getElementById("subResult");
 const payMentResalt = document.getElementById("payMentResalt");

 mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `you are subscribed`;
    }
    else{
        subResult.textContent = `you are not subscribed`;
    }
    if(visaBtn.checked){  
        payMentResalt.textContent = `your are paying with visa`;
    }
    else if(masterCardBtn.checked){
        payMentResalt.textContent = `you are paying with mastercard`;
    }
    else if(payPalBtn.checked){
        payMentResalt.textContent = `you are paying with paypal`;
    }
    else{
        payMentResalt.textContent = `you must select payment method`;
    }

 }