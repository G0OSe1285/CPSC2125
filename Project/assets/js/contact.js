const form = document.getElementById("contact-form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorMessage = document.getElementById("error-message");

const subjectInput = document.getElementById("subject");
const reasonInput = document.getElementById("reason");

const errorSubject = document.getElementById("error-subject");
const errorReason = document.getElementById("error-reason");


function clearErrors() {
  errorName.textContent = "";
  errorEmail.textContent = "";
  errorMessage.textContent = "";
  errorSubject.textContent = "";
  errorReason.textContent = "";
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearErrors();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    errorName.textContent = "Please enter your name.";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    errorEmail.textContent = "Please enter your email.";
    isValid = false;
  } else if (!emailPattern.test(emailInput.value)) {
    errorEmail.textContent = "Please enter a valid email address.";
    isValid = false;
  }

    if (subjectInput.value.trim() === "") {
    errorSubject.textContent = "Please enter a subject.";
    isValid = false;
  }

  if (reasonInput.value === "") {
    errorReason.textContent = "Please select a reason.";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    errorMessage.textContent = "Please enter a message.";
    isValid = false;
  }

  if (isValid) {
  form.submit();
}
});
