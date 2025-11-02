function addition(){
            let firstno = Number (document.getElementById("firstno").value);
            let secondno = Number (document.getElementById("secondno").value);
            let symbol = document.getElementById("symbol")
            let myresult = document.getElementById("myresult")
            symbol.innerHTML="+";
            myresult.innerHTML = `Answer is ${firstno+secondno}`
            symbol.style.color ="white"
            symbol.style.fontSize ="20px"
            myresult.style.fontSize ="16px"
        }
        function sub(){
            let firstno = document.getElementById("firstno").value;
            let secondno = document.getElementById("secondno").value;
            let symbol = document.getElementById("symbol")
            let myresult = document.getElementById("myresult")
            symbol.innerHTML="-";
            myresult.innerHTML = `Answer is ${firstno-secondno}`
             symbol.style.color ="white"
            symbol.style.fontSize ="20px"
            myresult.style.fontSize ="16px"
        }
        function mut(){
            let firstno = document.getElementById("firstno").value;
            let secondno = document.getElementById("secondno").value;
            let symbol = document.getElementById("symbol")
            let myresult = document.getElementById("myresult")
            symbol.innerHTML="*";
            myresult.innerHTML = `Answer is ${firstno*secondno}`
             symbol.style.color ="white"
            symbol.style.fontSize ="20px"
            myresult.style.fontSize ="16px"
        }
         function div(){
            let firstno = document.getElementById("firstno").value;
            let secondno = document.getElementById("secondno").value;
            let symbol = document.getElementById("symbol")
            let myresult = document.getElementById("myresult")
            symbol.innerHTML="/";
            myresult.innerHTML = `Answer is ${firstno/secondno}`
             symbol.style.color ="white"
            symbol.style.fontSize ="20px"
            myresult.style.fontSize ="16px"
        }
        function calculateInvestment() {
            const amount = Number(document.getElementById("investAmount").value);
            const years = Number(document.getElementById("investYears").value);
            const rate = 0.15; // 15%
            const result = document.getElementById("investResult");

            if (!amount || amount <= 0) {
                result.textContent = "Please enter a valid amount.";
                return;
            }

            else {
                const total = amount * Math.pow(1 + rate, years);
                result.textContent = `After ${years} year(s), you ll have ₦${total.toFixed(2)}`;
            }
            investResult.style.fontSize ="17px"
        }
    function loan() {
        let loanamount = Number (document.getElementById("loanAmount").value);
        let duration = Number(document.getElementById("loanYears"))
        let yearinterest = loanamount * 0.25;
        let totalInterest = yearinterest * duration;
        let totalPayment = loanamount + totalInterest;
        let feedback = document.getElementById("loanResult")
        feedback.textContent =  `You borrowed ₦${loanamount}. 
                                The interest rate is 25%. 
                                You will pay ₦${yearinterest} every year as interest. 
                                In ${duration} years, your total interest is ₦${totalInterest}. 
                                So you will pay ₦${totalPayment} in total.`;
        feedback.style.fontSize ="14px"
    }