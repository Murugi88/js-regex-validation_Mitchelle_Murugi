document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Sign-inform");

    // Validation Functions
    function validateFullName(name) {
        return /^[A-Za-z\s]+$/.test(name);
    }

    function validateEmailAddress(emailaddress) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailaddress);
    }

    function validatePhoneNumber(phonenumber) {
        return /^[0-9]{10,15}$/.test(phonenumber);
    }

    function validatePasscode(passcode) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(passcode);
    }

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.innerText = message;
        input.style.border = "3px solid blue";
    }

    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.innerText = "";
        input.style.border = "3px solid grey";
    }

    form.addEventListener("input", function (event) {
        const input = event.target;
        const value = input.value;
        let isValid = false;

        if (input.id === "fullName") isValid = validateFullName(value);
        if (input.id === "emailaddress") isValid = validateEmailAddress(value);
        if (input.id === "phonenumber") isValid = validatePhoneNumber(value);
        if (input.id === "passcode") isValid = validatePasscode(value);

        if (isValid) clearError(input);
        else showError(input, "Invalid input");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName");
        const emailaddress = document.getElementById("emailaddress");
        const phonenumber = document.getElementById("phonenumber");
        const passcode = document.getElementById("passcode");
        const validationMessage = document.getElementById("validationMessage");

        let isValid = true;

        if (!validateFullName(fullName.value)) {
            showError(fullName, "Only letters and spaces are allowed");
            isValid = false;
        }
        if (!validateEmailaddress(emailaddress.value)) {
            showError(emailaddress, "Enter a valid email");
            isValid = false;
        }
        if (!validatePhone(phone.value)) {
            showError(phone, "Only numbers, 10-15 characters");
            isValid = false;
        }
        if (!validatePasscode(passcode.value)) {
            showError(passcode, "Must have 8+ chars, 1 uppercase, 1 lowercase, 1 number");
            isValid = false;
        }

        if (isValid) {
            validationMessage.innerText = "The submission was successful";
            validationMessage.style.color = "green";
            form.reset();
        } else {
            validationMessage.innerText = "";
        }
    });
});
