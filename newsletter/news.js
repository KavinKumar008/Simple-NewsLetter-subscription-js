document.getElementById("subscriptionForm").addEventListener('submit',function(event){
    event.preventDefault();//prevent the form from submitting

    const emailInput=document.getElementById("email");
    const email=emailInput.value;

    const emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if(emailPattern.test(email)){
        //display success message
        document.getElementById("successMessage").style.display="block";

        emailInput.value="";
    }
    else{
        alert("Please enter valid email address")
    }
})