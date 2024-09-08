
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('userName');
const userEmail = urlParams.get('email');

 
document.getElementById('userName').textContent = userName;
document.getElementById('userEmail').textContent = userEmail;