const firstName = document.getElementById("firstName"),
  lastName = document.getElementById("lastName"),
  email = document.getElementById("email"),
  phone = document.getElementById("phoneNumber"),
  leadForm = document.getElementById("leadForm"),
  leadBtn = document.getElementById("leadBtn");

function setDisabled() {
  if (
    (firstName.value == "") &
    (lastName.value == "") &
    (email.value == "") &
    (phone.value.length != 10)
  ) {
    leadBtn.style.background = "#35363a";
    leadBtn.style.border = "1px solid #35363a";
    leadBtn.style.pointerEvents = "none";
  }
}

function enableForm() {
  if (
    (firstName.value != "") &
    (lastName.value != "") &
    (email.value != "") &
    (phone.value.length == 10)
  ) {
    leadBtn.style.background = "black";
    leadBtn.style.color = "white";
    leadBtn.style.border = "1px solid black";
    leadBtn.style.pointerEvents = "auto";
  }
}
setDisabled();
leadForm.addEventListener("keyup", enableForm);
