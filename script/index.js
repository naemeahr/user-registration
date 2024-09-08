document.addEventListener("DOMContentLoaded",function() {
const form = document.querySelector("#RegistrationForm");
form.addEventListener("submit", function(event) {
  
    event.preventDefault();
    validateForm();  
  });
})



function validateForm() {
  const formData = {
    name: nameValue.value,
    userName: userNameValue.value ,
    age: ageValue.value ,
    email: emailValue.value,  
    password: passwordValue.value,
    confirmPassword: confirmPasswordValue.value,
  };
  
 
  const errorList = [];
  let isValid = true;

  if (formData.name.length < 3){ errorList.push("name invalid"); isValid = false ;}
  if (formData.userName.length < 3){ errorList.push("username invalid"); isValid = false;}
  if (isNaN(formData.age) || ageValue < 1 || ageValue > 90) { errorList.push("age invalid!"); isValid = false ;}
  if (!isValidEmail(formData.email)){ errorList.push("Valid email is required"); isValid = false;}
  if (formData.password.length < 8) { errorList.push( "Password must be at least 8 characters long"); isValid = false ;}
  if (formData.password !== formData.confirmPassword){ errorList.push("passwords do not match."); isValid = false;}
 


  displayErrors(errorList);

  if (isValid) {
    const url = `home.html?userName=${encodeURIComponent(formData.userName)}&email=${encodeURIComponent(formData.email)}`;
    window.location.href = url; 
  }

}
 

  
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function displayErrors(errorList) {
  const errorBox = document.getElementById('errorBox'); 
  errorBox.innerHTML = ''; 

  if (errorList.length > 0) {
    errorBox.style.display = 'block'; 
    errorList.forEach(function(error) {
     const errorItem = document.createElement('p'); 
    errorItem.textContent = error; 
    errorBox.appendChild(errorItem); 
    });
  } else {
    errorBox.style.display ='none';
  }
}