let interest, amount, principal, currentValue, prevValue,i;
let arr = [];
let obj = {};


const onFormSubmit = (e)=>{
    // This clears what is rendered on the screen on every input update
    arr = [];
    e.preventDefault();
    var interestVal = document.getElementById("interest").value;
    obj.interest = interestVal;
    var amountVal = document.getElementById("amount").value;
    obj.amount = amountVal;
    var tenureVal = document.getElementById("tenure").value;
    obj.tenure = tenureVal;

    interest = parseInt(obj.interest);
    amount = parseInt(obj.amount);
    tenure = parseInt(obj.tenure);
    principal = amount/tenure;

    firstRepayment = (interest*amount)/100 + principal;
    arr.push({'1':firstRepayment});

    if(tenure > 1){
    for(i = 1; i < tenure;i++){
        currentValue = (interest * (amount-(parseInt(Object.keys(arr[i-1]))*principal))/100)+principal;
        arr.push({[i+1]:currentValue});
    }}

   document.getElementById('container').innerHTML = arr.map((val, i)=>(
        Object.keys(val).map(function(key){
            return val[key] != NaN? ` Month ${key} = ${val[key]}<br/>`: ''
        })
    ))
}

let form_dat = document.getElementById('form-sub').addEventListener('submit', onFormSubmit); 

