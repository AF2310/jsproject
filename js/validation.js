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

// 2. Add submit event listener with e.preventDefault()
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function (e) {
        // Stop the form from reloading the page
        e.preventDefault();
        
        console.log("Form submission prevented. Ready to implement validation logic.");
    });
}
