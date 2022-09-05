//Variables
let add = 0;
let min = 0;
let ad = 0;
let minu = 0;
let shipu = 148.8;
let tot = 19;
//Variables

///For adding and minus
function Add() {
  //Altenartive {add += 1}
  add = add + 1;
  document.getElementById("new1").innerText = add;

  shipu = shipu + 1;
  document.getElementById("ship").innerText = shipu;

  tot = tot + 1;
  document.getElementById("total").innerText = tot;
}

function Ad() {
  ad = ad + 1;
  document.getElementById("new2").innerText = ad;

  shipu = shipu + 1;
  document.getElementById("ship").innerText = shipu;

  tot = tot + 1;
  document.getElementById("total").innerText = tot;
}

function minus() {
  minu - add;
  document.getElementById("new1").innerText = minu;

  shipu = shipu - 1;
  document.getElementById("ship").innerText = shipu;

  tot = tot - 0;
  document.getElementById("total").innerText = tot;
}

function mi() {
  min - ad;
  document.getElementById("new2").innerText = min;

  shipu = shipu - 1;
  document.getElementById("ship").innerText = shipu;

  tot = tot - 0;
  document.getElementById("total").innerText = tot;
}
///For adding and minus


/// For validation a form 
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");
const postal = document.getElementById("postal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const countryValue = country.value.trim();
  const postalValue = postal.value.trim();

  if (usernameValue === "") {
    setErrorFor(username);
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }

  if (phoneValue === "") {
    setErrorFor(phone);
  } else {
    setSuccessFor(phone);
  }

  if (addressValue === "") {
    setErrorFor(address);
  } else {
    setSuccessFor(addressValue);
  }

  if (cityValue === "") {
    setErrorFor(city);
  } else {
    setSuccessFor(cityValue);
  }

  if (countryValue === "") {
    setErrorFor(country);
  } else {
    setSuccessFor(countryValue);
  }

  if (postalValue === "") {
    setErrorFor(postal);
  } else {
    setSuccessFor(postalValue);
  }
}

function setErrorFor() {
  // If input field is empty i display the icons to hidden to leave the placeholder alert to display well
  document.getElementById("icon1").style.visibility = "hidden";
  document.getElementById("icon2").style.visibility = "hidden";
  document.getElementById("icon3").style.visibility = "hidden";
  document.getElementById("icon4").style.visibility = "hidden";
  document.getElementById("icon5").style.visibility = "hidden";
  // If input field is empty i display the icons to hidden to leave the placeholder alert to display well

  //Error that turn on border color to red to alert a user
  email.style.border = "2px solid red";
  phone.style.border = "2px solid red";
  address.style.border = "2px solid red";
  postal.style.border = "2px solid red";
  city.style.border = "2px solid red";
  country.style.border = "2px solid red";
  username.style.border = "2px solid red";
  //Error that turn on border color to red to alert a user

  //Error in Placeholder change to red
  email.placeholder = "Email cannot be blank";
  phone.placeholder = "Phone number cannot be blank";
  address.placeholder = "Address cannot be blank";
  postal.placeholder = "Postal cannot be blank";
  city.placeholder = "City cannot be blank";
  country.placeholder = "Country cannot be blank";
  username.placeholder = "Name cannot be blank";
  //Error in Placeholder change to red

  //Add a call for an error to change a text color in a placeholder
  email.classList.add("your-class");
  phone.classList.add("your-class");
  address.classList.add("your-class");
  postal.classList.add("your-class");
  city.classList.add("your-class");
  country.classList.add("your-class");
  username.classList.add("your-class");
  // Add a call for an error to change a text color in a placeholder
}

function setSuccessFor() {
  document.getElementById("fresh").style.visibility = "visible";

  document.getElementById("email").style.border = "2px solid blue";
  document.getElementById("phone").style.border = "2px solid blue";
  document.getElementById("address").style.border = "2px solid blue";
  document.getElementById("postal").style.border = "2px solid blue";
  document.getElementById("city").style.border = "2px solid blue";
  document.getElementById("country").style.border = "2px solid blue";
  document.getElementById("username").style.border = "2px solid blue";
}

function isEmail() {
  if (!isEmail(emailValue)) {
    document.getElementById("email").placeholder = "Invalid email";
  }
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
