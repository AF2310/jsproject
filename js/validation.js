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

// 2. Add submit event listener with e.preventDefault()
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
        // Stop the form from reloading the page
        e.preventDefault();
        
        let isValid = true;

        if (!validateFullName()) {
            isValid = false;
        }

        if (isValid) {
            console.log("Form is valid so far!");
        }
    });
}
