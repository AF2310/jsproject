// js/validation.js

// 1. Select form elements using const
const feedbackForm = document.getElementById('feedback-form');

// Inputs
const fullNameInput = document.getElementById('full-name');
const emailInput = document.getElementById('email');
const topicSelect = document.getElementById('topic');
const commentsInput = document.getElementById('comments');
const websiteInput = document.getElementById('website');

// Error message containers
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const topicError = document.getElementById('topic-error');
const commentsError = document.getElementById('comments-error');
const websiteError = document.getElementById('website-error');

// Other form elements
const charCount = document.getElementById('char-count');
const formStatus = document.getElementById('form-status');
const clearBtn = document.getElementById('clear-btn');

// Helper functions for showing and clearing errors
function showFieldError(inputElement, errorElement, message) {
    inputElement.classList.add('is-invalid');
    inputElement.classList.remove('is-valid');
    errorElement.textContent = message;
}

function clearFieldError(inputElement, errorElement) {
    inputElement.classList.remove('is-invalid');
    inputElement.classList.add('is-valid');
    errorElement.textContent = '';
}

// Validation function for Full Name
function validateFullName() {
    const value = fullNameInput.value.trim();
    // \p{L} matches any letter from any language.
    // Also allows spaces, apostrophes, and hyphens.
    const nameRegex = /^[\p{L}\s\-']+$/u;

    if (value.length < 2) {
        showFieldError(fullNameInput, nameError, "Name must be at least 2 characters long.");
        return false;
    } else if (!nameRegex.test(value)) {
        showFieldError(fullNameInput, nameError, "Name contains invalid characters.");
        return false;
    } else {
        clearFieldError(fullNameInput, nameError);
        return true;
    }
}

// Validation function for Email
function validateEmail() {
    const value = emailInput.value.trim();
    // A simple regex to check for something@something.domain
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value === "") {
        showFieldError(emailInput, emailError, "Email is required.");
        return false;
    } else if (!emailRegex.test(value)) {
        showFieldError(emailInput, emailError, "Please enter a valid email address.");
        return false;
    } else {
        clearFieldError(emailInput, emailError);
        return true;
    }
}

// Validation function for Topic
function validateTopic() {
    const value = topicSelect.value;

    if (!value || value === "") {
        showFieldError(topicSelect, topicError, "Please select a topic.");
        return false;
    } else {
        clearFieldError(topicSelect, topicError);
        return true;
    }
}

// Validation function for optional Website
function validateWebsite() {
    const value = websiteInput.value.trim();

    // Optional field: if empty, clear errors and valid indicator
    if (value === "") {
        websiteInput.classList.remove('is-invalid');
        websiteInput.classList.remove('is-valid');
        websiteError.textContent = '';
        return true;
    }

    let isValid = false;
    try {
        const url = new URL(value);
        isValid = url.protocol === "http:" || url.protocol === "https:";
    } catch (_) {
        isValid = false;
    }

    if (!isValid) {
        showFieldError(websiteInput, websiteError, "Please enter a valid URL (e.g. https://www.example.com).");
        return false;
    } else {
        clearFieldError(websiteInput, websiteError);
        return true;
    }
}

// 2. Add submit event listener with e.preventDefault()
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
        // Stop the form from reloading the page
        e.preventDefault();
        
        let isValid = true;

        if (!validateFullName()) {
            isValid = false;
        }

        if (!validateEmail()) {
            isValid = false;
        }

        if (!validateTopic()) {
            isValid = false;
        }

        if (!validateWebsite()) {
            isValid = false;
        }

        if (isValid) {
            console.log("Form is valid so far!");
        }
    });
}
