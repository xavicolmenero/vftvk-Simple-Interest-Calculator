function compute()
{
    //Calculates the amount that the user will receive. 
    //Shows a text with the with the provided values by the user and the amount received.
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <strong>"+principal+"</strong>,\<br\>at an interest rate of <strong>"+rate+"%</strong>\<br\>You will receive an amount of <strong>"+interest+"</strong>,\<br\>in the year <strong>"+year+"<strong>\<br\>"
}
       
function updateRate() 
{
    //To refresh the value shown next to the range scroll
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}

function checkPrincipal()
{
    //Will check if the principal value is greater than 0. Must convert to an integer to compare to 0.
    var principalValue = parseInt(document.getElementById("principal").value);
    if (principalValue<=0) 
    {
        alert("Amount value not valid. Must be greater than 0");
        //Reset the value and returns the focus to the principal field
        document.getElementById("principal").value='';
        principal.focus(); //Return focus to principal
    }    
}