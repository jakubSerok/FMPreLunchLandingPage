const submitButton = document.querySelector("#submit");
const input = document.querySelector("#email");
const errorText = document.querySelector(".errorText");

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
submitButton.addEventListener("click",function(){
    if(input.value==""||!input.value.match(validRegex)){
        errorText.classList.remove("hidden");
        input.classList.add("error");
    }
    else{
        errorText.classList.add("hidden");
        input.classList.remove("error");
        input.classList.add("active");
    }
})