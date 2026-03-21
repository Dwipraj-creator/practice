 function bankAccountClosures(balance) {
        return {
            deposite: function (amount){
                balance += amount;
                return balance; 
            },
            withdraw: function(amount){
                if(balance < amount){
                    console.log("Insufficient balance")
                }else{
                    balance -= amount;
                    return balance
                }
            },
            getBalance :
            function(){
                return balance;
            }
                      
        }
 }

 const account = bankAccountClosures(100);

 console.log(account.deposite(20))
 console.log(account.withdraw(30))
 console.log(account.getBalance())