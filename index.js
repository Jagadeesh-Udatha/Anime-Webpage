var changeBox = document.querySelectorAll(".input-text").forEach((input) => {
  input.onfocus = function () {
    var label = this.closest('.input-label').querySelector('label');
    label.classList.add('input-labelled');
  }

  input.onblur = function () {
    var label = this.closest('.input-label').querySelector('label');
    label.classList.remove('input-labelled');
  }
})


var imageShowing = document.getElementById("letPassword");
imageShowing.onfocus = function() {
  console.log(imageShowing);
  var label = this.closest('.input-label').querySelector('label');
    label.classList.add('input-labelled');
  setTimeout(()=> {
    document.body.style.backgroundImage = "url('https://wallpapercave.com/wp/wp11068436.jpg')";
    var showPasswordPoints = document.querySelector(".password-points");
    showPasswordPoints.classList.add("show-password-points");
  }, 200);
}

imageShowing.onblur = function() {
  var label = this.closest('.input-label').querySelector('label');
    label.classList.remove('input-labelled');
  setTimeout(()=> {
    document.body.style.backgroundImage = "url('https://w.wallha.com/ws/14/hsJSDi9p.png')";
    var showPasswordPoints = document.querySelector(".password-points");
    showPasswordPoints.classList.remove("show-password-points");
  }, 200);

  var passCritElement = document.getElementById("pass-crit");

  if (lowerThere && upperThere && specThere && numbersThere && lengthThere) {
    passCritElement.classList.add("password-matches-criteria");
    passCritElement.innerHTML = "Password Matches the requirements";
    setTimeout(() => {
      passCritElement.innerHTML = "";
      passCritElement.classList.remove("password-matches-criteria");

    },1000);
    
    
  } else {
    passCritElement.classList.add("password-no-matches-criteria");
    passCritElement.innerHTML = "Password did not match the requirements";
    setTimeout(() => {
    passCritElement.classList.remove("password-no-matches-criteria");
      passCritElement.innerHTML = "";
    },1000); 
  }

}

var lowerThere = false;
var upperThere =false;
var specThere = false;
var numbersThere  = false;
var lengthThere = false;
let passwordVerify = "";
imageShowing.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;
  var uppercaseLetters = /[A-Z]/g;
  var numbers = /\d/g;
  var specialCharacters = /[!@#$%^&*(),.?":{}|<>]/g;
  passwordVerify = imageShowing.value;
  console.log(passwordVerify);
  if (imageShowing.value.match(lowerCaseLetters)) {
    document.querySelector('.small-letter').innerHTML =   
    `<p class="change-color-password-points">&#10004; Password must contain one LowerCase Character.</p>`;
    lowerThere = true;
  } else {
    document.querySelector('.small-letter').innerHTML = '&#10006; Password must contain one LowerCase Character.';
    lowerThere = false;
  }

  if (imageShowing.value.match(uppercaseLetters)) {
    document.querySelector('.capital-letter').innerHTML =   
    `<p class="change-color-password-points">&#10004; Password must contain one UpperCase Character.</p>`;
    upperThere = true;
  } else {
    document.querySelector('.capital-letter').innerHTML = '&#10006; Password must contain one UpperCase Character.';
    upperThere = false;
  }

  if (imageShowing.value.match(numbers)) {
    document.querySelector('.digit').innerHTML =   
    `<p class="change-color-password-points">&#10004; Password must contain one or more Digits.</p>`;
    numbersThere = true;
  } else {
    document.querySelector('.digit').innerHTML = '&#10006; Password must contain one or more Digits.';
    numbersThere = false;
  }

  if (imageShowing.value.match(specialCharacters)) {
    document.querySelector('.speical-character').innerHTML =   
    `<p class="change-color-password-points">&#10004; Password must contain one Special Character.</p>`;
    specThere = true;
  } else {
    document.querySelector('.speical-character').innerHTML = '&#10006; Password must contain one Special Character.';
    specThere = false;
  }

  if (imageShowing.value.length > 8 && imageShowing.value.length < 15) {
    document.querySelector('.tot-length').innerHTML =   
    `<p class="change-color-password-points">&#10004; Password must be 8-15 Characters Long.</p>`;
    lengthThere = true;
  } else {
    document.querySelector('.tot-length').innerHTML = '&#10006; Password must be 8-15 Characters Long.';
    lengthThere = false;
  }
};


var confirmedPassword = document.getElementById("letConfPassword");
confirmedPassword.onkeyup = function () {
  console.log(confirmedPassword.value);

  if(confirmedPassword.value === passwordVerify && confirmedPassword.value.length != 0) {
    var password_config = document.getElementById("pass-conf");
    password_config.classList.add("password-matches-confirm-password");
    password_config.innerHTML = `Matches with the Password`;
    setTimeout(() => {
      password_config.classList.remove("password-matches-confirm-password");
      password_config.innerHTML = ``;
    },2000);

  } else {
    var password_config = document.getElementById("pass-conf");
    password_config.classList.remove("password-matches-confirm-password");
    password_config.innerHTML = ``;


  }
}


function togglePassword(inputId) {
var passwordInput = document.getElementById(inputId);
var eyeIcon = document.querySelector(`#${inputId} + i`);

if (passwordInput.type === 'password') {
  passwordInput.type = 'text';
  eyeIcon.classList.remove('fa-eye');
  eyeIcon.classList.add('fa-eye-slash');
} else {
  passwordInput.type = 'password';
  eyeIcon.classList.remove('fa-eye-slash');
  eyeIcon.classList.add('fa-eye');
}
}



