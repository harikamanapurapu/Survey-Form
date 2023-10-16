//Script.js
const form = document.getElementById('survey-form');
const popup = document.getElementById('popup');
const popupCloseButton = document.getElementById('popup-close');

document.getElementById('submit-button').addEventListener('click', function () {
    // Check if any required field is empty
    const requiredFields = document.querySelectorAll('[required]');
    let hasEmptyFields = false;
    requiredFields.forEach(field => {
        if (field.value.trim() === '') {
            hasEmptyFields = true;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });

    if (hasEmptyFields) {
        // Show an error message
        document.getElementById('error-message').style.display = 'block';
        return; // Do not proceed if there are empty fields
    }

    // All required fields are filled, proceed to display the popup
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const genderElements = document.querySelectorAll('input[name="gender"]:checked');
    const genderValues = Array.from(genderElements).map(gender => gender.value);
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;

    document.getElementById('popup-first-name').textContent = firstName;
    document.getElementById('popup-last-name').textContent = lastName;
    document.getElementById('popup-date-of-birth').textContent = dateOfBirth;
    document.getElementById('popup-country').textContent = country;
    document.getElementById('popup-gender').textContent = genderValues.join(', ');
    document.getElementById('popup-profession').textContent = profession;
    document.getElementById('popup-email').textContent = email;
    document.getElementById('popup-mobile-number').textContent = mobileNumber;

    popup.style.display = 'block';
    // Hide the error message
    document.getElementById('error-message').style.display = 'none';
});

popupCloseButton.addEventListener('click', function () {
    popup.style.display = 'none';
    form.reset();
});

document.getElementById('reset-button').addEventListener('click', function () {
    form.reset();
});
