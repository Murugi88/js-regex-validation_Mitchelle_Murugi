document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("Sign-inform");

    // Validation functions
    function validateFullName(name) {
        return /^[A-Za-z\s]+$/.test(name);
    }

    function validateEmailAddress(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    function validatePhoneNumber(phone) {
        return /^[0-9]{10,15}$/.test(phone);
    }

    function validatePasscode(passcode) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(passcode);
    }

    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.innerText = message;
        input.style.border = "3px solid red";
    }

    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.innerText = "";
        input.style.border = "3px solid green";
    }

    form.addEventListener("input", function (event) {
        const input = event.target;
        const value = input.value;
        let isValid = false;

        if (input.id === "fullName") isValid = validateFullName(value);
        if (input.id === "email") isValid = validateEmailAddress(value);
        if (input.id === "phone") isValid = validatePhoneNumber(value);
        if (input.id === "passcode") isValid = validatePasscode(value);

        if (isValid) clearError(input);
        else showError(input, "Invalid input");
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const passcode = document.getElementById("passcode");
        const validationMessage = document.getElementById("validatemessage");

        let isValid = true;

        if (!validateFullName(fullName.value)) {
            showError(fullName, "Only letters and spaces allowed");
            isValid = false;
        }

        if (!validateEmailAddress(email.value)) {
            showError(email, "Enter a valid email");
            isValid = false;
        }

        if (!validatePhoneNumber(phone.value)) {
            showError(phone, "Must be 10–15 digits");
            isValid = false;
        }

        if (!validatePasscode(passcode.value)) {
            showError(passcode, "Min 8 chars, 1 uppercase, 1 lowercase, 1 number");
            isValid = false;
        }

        if (isValid) {
            validationMessage.innerText = "The submission was successful!";
            validationMessage.style.color = "green";
            form.reset();
            document.querySelectorAll("input").forEach(input => clearError(input));
        } else {
            validationMessage.innerText = "";
        }
    });
});
