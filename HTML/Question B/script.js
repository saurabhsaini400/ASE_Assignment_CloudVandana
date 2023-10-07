// script.js
const form = document.getElementById("surveyForm");
const resetButton = document.getElementById("resetButton");
const submitButton = document.getElementById("submitButton");
const popup = document.getElementById("popup");
const closePopupButton = document.getElementById("closePopup");
const popupList = document.getElementById("popup-list");

resetButton.addEventListener("click", function() {
    form.reset();
});

submitButton.addEventListener("click", function() {
    if (form.checkValidity()) {
        // Form is valid, display popup with form data
        displayPopup();
    } else {
        alert("Please fill in all required fields.");
    }
});

closePopupButton.addEventListener("click", function() {
    // Close the popup and reset the form
    popup.style.display = "none";
    form.reset();
});

function displayPopup() {
    // Get form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(checkbox => checkbox.value);
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Create a list of form data
    const formData = [
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Date of Birth: ${dob}`,
        `Country: ${country}`,
        `Gender: ${gender.join(", ")}`,
        `Profession: ${profession}`,
        `Email: ${email}`,
        `Mobile Number: ${mobile}`
    ];

    // Populate the popup
    popupList.innerHTML = "";
    formData.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        popupList.appendChild(listItem);
    });

    // Display the popup
    popup.style.display = "block";
}
