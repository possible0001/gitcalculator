// function addition(){
//             let firstno = Number (document.getElementById("firstno").value);
//             let secondno = Number (document.getElementById("secondno").value);
//             let symbol = document.getElementById("symbol")
//             let myresult = document.getElementById("myresult")
//             symbol.innerHTML="+";
//             myresult.innerHTML = `Answer is ${firstno+secondno}`
//             symbol.style.color ="white"
//             symbol.style.fontSize ="20px"
//             myresult.style.fontSize ="16px"
//         }
//         let plus = document.getElementById('plus')
//         plus.addEventListener('click',addition)
//         function sub(){ 
//             let firstno = document.getElementById("firstno").value;
//             let secondno = document.getElementById("secondno").value;
//             let symbol = document.getElementById("symbol")
//             let myresult = document.getElementById("myresult")
//             symbol.innerHTML="-";
//             myresult.innerHTML = `Answer is ${firstno-secondno}`
//              symbol.style.color ="white"
//             symbol.style.fontSize ="20px"
//             myresult.style.fontSize ="16px"  
//         }
//         function mut(){
//             let firstno = document.getElementById("firstno").value;
//             let secondno = document.getElementById("secondno").value;
//             let symbol = document.getElementById("symbol")
//             let myresult = document.getElementById("myresult")
//             symbol.innerHTML="*";
//             myresult.innerHTML = `Answer is ${firstno*secondno}`
//              symbol.style.color ="white"
//             symbol.style.fontSize ="20px"
//             myresult.style.fontSize ="16px"
//         }
//          function div(){
//             let firstno = document.getElementById("firstno").value;
//             let secondno = document.getElementById("secondno").value;
//             let symbol = document.getElementById("symbol")
//             let myresult = document.getElementById("myresult")
//             symbol.innerHTML="/";
//             myresult.innerHTML = `Answer is ${firstno/secondno}`
//              symbol.style.color ="white"
//             symbol.style.fontSize ="20px"
//             myresult.style.fontSize ="16px"
//         }
        function calculateInvestment() {
            const amount = Number(document.getElementById("investAmount").value);
            const years = Number(document.getElementById("investYears").value);
            const rate = 0.25; // 15%
            const result = document.getElementById("investResult");

            if (!amount || amount <= 0) {
                result.textContent = "Please enter a valid amount.";
                return;
            }

            else {
                const total = amount * Math.pow(1 + rate, years);
                result.textContent = `After ${years} Month(s), you ll have ₦${total.toFixed(2)}`;
            }
            investResult.style.fontSize ="17px"
        }
    function loan() {
        let loanamount = Number (document.getElementById("loanAmount").value);
        let duration = Number(document.getElementById("loanYears").value)
        let yearinterest = loanamount * 0.25;
        let totalInterest = yearinterest * duration;
        let totalPayment = loanamount + totalInterest;
        let feedback = document.getElementById("loanResult")
        feedback.textContent =  `You borrowed ₦${loanamount}. 
                                The interest rate is 25%. 
                                You will pay ₦${yearinterest} every Month as interest.`;
        feedback.style.fontSize ="14px"
    }





let btn = document.querySelectorAll('.plus')

for(let i=0; i<btn.length; i++){
    btn[i].addEventListener('click',()=>{
        let firstno = Number (document.getElementById("firstno").value);
                                  let secondno = Number (document.getElementById("secondno").value);
                                    let symbol = document.getElementById("symbol")
                                    let myresult = document.getElementById("myresult") 
                                
                                
    if(btn[i].value=="plus"){
   symbol.innerHTML="+";
    myresult.innerHTML = `Answer is ${firstno+secondno}`
    symbol.style.color ="white"
    symbol.style.fontSize ="20px"
    myresult.style.fontSize ="16px"
}else if(btn[i].value=="sub"){
   symbol.innerHTML="-";
    myresult.innerHTML = `Answer is ${firstno-secondno}`
    symbol.style.color ="white"
    symbol.style.fontSize ="20px"
    myresult.style.fontSize ="16px"
}else if(btn[i].value=="mut"){
   symbol.innerHTML="*";
    myresult.innerHTML = `Answer is ${firstno*secondno}`
    symbol.style.color ="white"
    symbol.style.fontSize ="20px"
    myresult.style.fontSize ="16px"
}else if(btn[i].value=="div"){
   symbol.innerHTML="/";
    myresult.innerHTML = `Answer is ${firstno/secondno}`
    symbol.style.color ="white"
    symbol.style.fontSize ="20px"
    myresult.style.fontSize ="16px"
}






})
                                    
    
        
}
