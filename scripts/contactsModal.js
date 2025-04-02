function openContactsModal() {
    document.getElementById('modalOverlay').classList.remove('dNone');
    document.getElementById('contactsModal').classList.remove('dNone');
    getContactsModalStructure();
}

function getContactsModalStructure() {
    let container = document.getElementById('contactsModal');
    container.innerHTML = `
    <div class="modalMainContent">
        <div class="headlineSection">
            <img class="contactsModalImage" src="./assets/img/joinLogoSidebar.svg" alt="">
            <div class="headlineContainer">
                <h1>Add contact</h1>
                <h2>Tasks are better with a team!</h2>
            </div>
            <p class="blueUnderline"></p>
        </div>
        <div class="contentSection">
            <div class="modalIconContainer">
                <div class="contactsModalIcon">
                <img src="./assets/img/whitePerson.svg" alt="">
                </div>
            </div>
            <div class="modalContentContainer">
                <div class="modalCloseButtonWrapper">
                    <button class="modalCloseButton" onclick="closeContactsModal()"><img src="./assets/img/closeIcon.svg"></button>
                </div>
                <div class="inputFieldContainer">
                    <div class="inputFieldWrapper">
                        <input class="inputFields" type="text" placeholder="Name" id="contactName" required>
                        <img class="inputIcon" src="./assets/img/person.svg">
                    </div>
                    <div class="inputFieldWrapper">
                        <input class="inputFields" type="email" placeholder="Email" id="contactEmail" required>
                        <img class="inputIcon" src="./assets/img/mail.svg">
                    </div>
                    <div class="inputFieldWrapper">
                        <input class="inputFields" type="text" placeholder="Phone" id="contactPhone" required>
                        <img class="inputIcon" src="./assets/img/phone.svg">
                    </div>
                </div>
                <div class="buttonsContainer">
                <button onclick="clearInputFields()" class="modalCancelButton">Cancel <img src="./assets/img/closeIcon.svg"></button>
                <button onclick="pushContacts()" class="modalCreateButton" type="submit">Create Contact <img src="./assets/img/createIcon.svg"></button>
                </div>
            </div>
        </div>
    </div>`
}

function closeContactsModal() {
    document.getElementById('modalOverlay').classList.add('dNone');
    document.getElementById('contactsModal').classList.add('dNone');
}

function clearInputFields() {
    document.getElementById('contactName').value = "";
    document.getElementById('contactEmail').value = "";
    document.getElementById('contactPhone').value = "";
}

/// Formvalidation ///

async function validateContactInput() {
    let nameInput = document.getElementById('contactName').value.trim().toLowerCase()
    let emailInput = document.getElementById('contactEmail').value.trim().toLowerCase()
    let phoneInput = document.getElementById('contactPhone').value.trim();

    let existingContacts = await getData('/contacts');

    if (!existingContacts) existingContacts = {};

    for (let key in existingContacts) {
        let contact = existingContacts[key];

        if (
            contact.name.trim().toLowerCase() === nameInput ||
            contact.email.trim().toLowerCase() === emailInput ||
            contact.phone.trim() === phoneInput
        ) {
            showValidationError("Contact already exists")
            return false;
        }
    }

    return true;
}

function showValidationError(message) {
    alert(message);
}