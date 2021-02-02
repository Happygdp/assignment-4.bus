


var firstClassIncrement = document.getElementById("firstClassIncrement");


firstClassIncrement.addEventListener("click", function(){
    var firstClassValue = document.getElementById("firstClassValue").value;
    var firstClassInt = parseInt(firstClassValue);
    firstClassInt = firstClassInt + 1;
    document.getElementById("firstClassValue").value = firstClassInt;

    //subtotal

    var subTotalString = document.getElementById("subTotal").innerText;
    var subTotalInt = parseInt(subTotalString);
    subTotalInt = subTotalInt + 150;
    document.getElementById("subTotal").innerText = subTotalInt;

    // vat

    // var subTotalAmount = document.getElementById("subTotal").innerText;
    // var subTotalNumber = parseInt(subTotalAmount);
    // subTotalNumber = subTotalNumber * 0.1;
    // document.getElementById("vatId").innerText = subTotalNumber;

    vatCalculate();
    totalAmount();

   












    

});

var firstClassDecrement = document.getElementById("firstClassDecrement");


firstClassDecrement.addEventListener("click", function(){
    var firstClassValue = document.getElementById("firstClassValue").value;
    var firstClassInt = parseInt(firstClassValue);
    if(firstClassInt > 0){
        firstClassInt = firstClassInt - 1;
        document.getElementById("firstClassValue").value = firstClassInt;

        // subtotal
        var subTotalString = document.getElementById("subTotal").innerText;
        var subTotalInt = parseInt(subTotalString);
        subTotalInt = subTotalInt - 150;
        document.getElementById("subTotal").innerText = subTotalInt;
        vatCalculate();
        totalAmount();
    }


   

});




var economyClassIncrement = document.getElementById("economyClassIncrement");

economyClassIncrement.addEventListener("click", function(){
    var economyClassValue = document.getElementById("economyValue").value;
    var economyClassInt = parseInt(economyClassValue);
    economyClassInt = economyClassInt + 1;
    document.getElementById("economyValue").value = economyClassInt;


    // subtotal
    var subTotalString = document.getElementById("subTotal").innerText;
    var subTotalInt = parseInt(subTotalString);
    subTotalInt = subTotalInt + 100;
    document.getElementById("subTotal").innerText = subTotalInt;


    vatCalculate()
    totalAmount();

})


var economyClassDecrement = document.getElementById("economyClassDecrement");

economyClassDecrement.addEventListener("click", function(){

    var economyClassValue = document.getElementById("economyValue").value;
    var economyClassInt = parseInt(economyClassValue);
    if(economyClassInt > 0){
        economyClassInt = economyClassInt - 1;
        document.getElementById("economyValue").value = economyClassInt;


        // subtotal

    var subTotalString = document.getElementById("subTotal").innerText;
    var subTotalInt = parseInt(subTotalString);
    subTotalInt = subTotalInt - 150;
    document.getElementById("subTotal").innerText = subTotalInt;


    vatCalculate();
    totalAmount();

    }
    
})


function vatCalculate(){
    var subTotalAmount = document.getElementById("subTotal").innerText;
    var subTotalNumber = parseInt(subTotalAmount);
    subTotalNumber = subTotalNumber * 0.1;
    document.getElementById("vatId").innerText = subTotalNumber;
}




function totalAmount(){
    var subTotalStr = document.getElementById("subTotal").innerText;
    var subTotalIn = parseInt(subTotalStr);
    var vatChar = document.getElementById("vatId").innerText;
    var vatCharge = parseInt(vatChar);
    var subTotalIn = subTotalIn + vatCharge;
    document.getElementById("total").innerText = subTotalIn;
}


var submit = document.getElementById("submitButton");
submit.addEventListener("click", function(){
document.getElementById("welcome").style.display = "block";
document.getElementById("mainDiv").style.display = "none";

});