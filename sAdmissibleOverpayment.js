function solution(prices, notes, x) {
    let price_sensitivity = 0
       for(let i=0; i<prices.length; i++){
           let token = notes[i].split(' ')
           
           if(token[1]=="higher"){
                   if(parseFloat(token[0]) != 0){
                       let shopprice = 0;
                       let per = parseFloat(token[0])
                       shopprice = (prices[i]*10)/((100+per)/10)
                       let change = prices[i] - shopprice
                       price_sensitivity += change
               }
           }
           else if(token[1]=="lower"){
                   if(parseFloat(token[0]) != 0){
                       let shopprice = 0;
                       let per = parseFloat(token[0])
                       shopprice = (prices[i]*10)/((100-per)/10)
                       let change = shopprice - prices[i]
                       price_sensitivity -= change
                   }
           }
           
       }
       if(price_sensitivity<=x) {
           return true
       }
       return false
   }
   