var initialPrice = document.querySelector('#intial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click',submitHandler);

function submitHandler(){
    var ip = (initialPrice.value);
    var qty = (stockQuantity.value);
    var curr = (currentPrice.value);

    calaculateProfitAndLoss(ip,qty,curr);
    outputBox.classList.toggle("output-box");
}



function calaculateProfitAndLoss(initial, quantity, current){
        if(!initial)
        showOutput(`Invalid Initial Price`);
    
    if(!quantity)
        showOutput(`Invalid Quantity`);
    
    if(!current)
        showOutput(`Invalid current Price`);
    
    
    if(initial > current){
        var loss = ((initial - current) * quantity).toFixed(2);
        var lossPercentage = Math.trunc((loss / initial) * 100) ;

        showOutput(`the loss is ${loss} and the losspercent is ${lossPercentage}%`);
        
         if(!initial)
        showOutput(`Invalid Initial Price`);
    
    if(!quantity)
        showOutput(`Invalid Quantity`);
    
    if(!current)
        showOutput(`Invalid current Price`);
        
    }
    else if(current > initial ){
         var profit = ((current - initial) * quantity).toFixed(2);
         var profitPercentage = Math.trunc((profit / initial) * 100);
        

         showOutput(`the profit is ${profit} and the profit-percentage is ${profitPercentage}`);
        
         if(!initial)
        showOutput(`Invalid Initial Price`);
    
    if(!quantity)
        showOutput(`Invalid Quantity`);
    
    if(!current)
        showOutput(`Invalid current Price`);
        
    }
    else {
        showOutput(`No pain no gain no gain no pain`);
        
         if(!initial)
        showOutput(`Invalid Initial Price`);
    
    if(!quantity)
        showOutput(`Invalid Quantity`);
    
    if(!current)
        showOutput(`Invalid current Price`);


    }
}



function showOutput(message){
    
    outputBox.innerHTML= message;
}
