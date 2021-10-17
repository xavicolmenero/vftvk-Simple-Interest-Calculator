function compute()
{
    //Calculates the amount that the user will receive. 
    //Shows a text with the with the provided values by the user and the amount received.
    if (parseInt(document.getElementById("principal").value)<=0 || document.getElementById("principal").value=='')  //Validate if it has a value
    {
        alert("Amount must be positive");
        //Reset the value and returns the focus to the principal field
        document.getElementById("principal").value='';
        principal.focus(); //Return focus to principal
    }
    else
    {
        var principalValue = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
        var interest = principalValue * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="If you deposit <mark>"+principalValue+
                "</mark>,\<br\>at an interest rate of <mark>"+rate+
                "%</mark>\<br\>You will receive an amount of <mark>"+interest+
                "</mark>,\<br\>in the year <mark>"+year+"<mark>\<br\>"
    }
}
       
function updateRate() 
{
    //To refresh the value shown next to the range scroll
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval+"%";
}

function checkPrincipal()
{
    //Will check if the principal value is greater than 0. Must convert to an integer to compare to 0.
    var principalValue = parseInt(document.getElementById("principal").value);
    if (principalValue<=0) 
    {
        alert("Amount must be positive");
        //Reset the value and returns the focus to the principal field
        document.getElementById("principal").value='';
        principal.focus(); //Return focus to principal
    }    
}

function instructions(instructions)
{
    document.getElementById("amountInstructions").innerHTML = instructions;
}

function instructionsReset()
{
    document.getElementById("amountInstructions").innerHTML = "Browse over the fields for more information";
} 
