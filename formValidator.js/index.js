const form = document.getElementById("form");
const usename = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(input.value)){
    showSuccess(input);
  }else{
    showError(input,'Email is not valid');
  }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    })
}

function checkLength(input,min,max){
    if(input.value.length< min){
        showError(input, `${getFieldName(input)} < ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} > ${max} characters`);
    } else{
        showSuccess(input);
    }
}

function checkPassword(input1,input2){
   if(input1.value!==input2.value){
    showError(input2,'Passwords do not match');
   }else{
       showSuccess(input1);
       showSuccess(input2);
   }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() +input.id.slice(1);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username,email,password,confirmPassword]);
  checkLength(username, 5, 18);
  checkLength(password, 7, 18);
  checkEmail(email);
  checkPassword(password,confirmPassword);
});
