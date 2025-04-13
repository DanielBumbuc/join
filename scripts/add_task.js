// let listNames = [
//     {
//         'name' : 'Kevin',
//         'checkbox' : false
//     }, 

//     {
//         'name' : 'Oliver',
//         'checkbox' : false
//     },

//     {
//         'name' : 'Daniel',
//         'checkbox' : false
//     }
// ];
let contactArr = [];
let listNames = ['Kevin', 'Oliver', 'Daniel'];
let prioBtn = 'medium';
let subtasksArr = [];
let currentTaskId = 0;
let contacts;

function checkCheckbox(nameIndex) {
    let myCheckbox = document.getElementById(`checkbox${nameIndex}`);
    myCheckbox.checked = false;
}


function toggleDropdownName() {
    let customDropdownName = document.getElementById('customDropdownName');
    let dropdown = document.getElementById('dropdownListName');
    let dropdownIcon = document.getElementById('dropdownIconName');
    customDropdownName.classList.add('activeBorder');
    dropdown.classList.toggle('dNone');
    dropdownIcon.classList.toggle('rotate');
    getContact();
}



function toggleDropdownCategory() {
    let customDropdownCategory = document.getElementById('customDropdownCategory');
    let dropdown = document.getElementById('dropdownListCategory');
    let dropdownIcon = document.getElementById('dropdownIconCategory');
    customDropdownCategory.classList.toggle('activeBorder');
    dropdown.classList.toggle('dNone');
    dropdownIcon.classList.toggle('rotate');
}

function toggleAnimation(dropdown) {


    if (dropdown.classList.contains("visible")) {
        dropdown.classList.remove("visible");
        setTimeout(() => {
            dropdown.classList.add("hidden");
        }, 300); // Timeout auf die Transition-Dauer setzen
    } else {
        dropdown.classList.remove("hidden");
        dropdown.classList.add("visible");
    }
}

function selectPriority(priority) {
    let urgentBtn = document.getElementById('priorityUrgentBtn');
    let mediumBtn = document.getElementById('priorityMediumBtn');
    let lowBtn = document.getElementById('priorityLowBtn');
    let urgentIcon = document.getElementById('urgentIcon');
    let mediumIcon = document.getElementById('mediumIcon');
    let lowIcon = document.getElementById('lowIcon');
    let urgentIconWhite = document.getElementById('urgentIconWhite');
    let mediumIconWhite = document.getElementById('mediumIconWhite');
    let lowIconWhite = document.getElementById('lowIconWhite');
    resetPriorityClassList(urgentBtn, mediumBtn, lowBtn, urgentIcon, mediumIcon, lowIcon, urgentIconWhite, mediumIconWhite, lowIconWhite);
    setPriorityClassList(priority, urgentBtn, mediumBtn, lowBtn, urgentIcon, mediumIcon, lowIcon, urgentIconWhite, mediumIconWhite, lowIconWhite);
}

function resetPriorityClassList(urgentBtn, mediumBtn, lowBtn, urgentIcon, mediumIcon, lowIcon, urgentIconWhite, mediumIconWhite, lowIconWhite) {
    urgentBtn.classList.add('hoverBtn');
    urgentBtn.classList.remove('activeUrgentBtn');
    urgentIcon.classList.remove('dNone');
    urgentIconWhite.classList.add('dNone');
    mediumBtn.classList.add('hoverBtn');
    mediumBtn.classList.remove('activeMediumBtn');
    mediumIcon.classList.remove('dNone');
    mediumIconWhite.classList.add('dNone');
    lowBtn.classList.add('hoverBtn');
    lowBtn.classList.remove('activeLowBtn');
    lowIcon.classList.remove('dNone');
    lowIconWhite.classList.add('dNone');
}

function setPriorityClassList(priority, urgentBtn, mediumBtn, lowBtn, urgentIcon, mediumIcon, lowIcon, urgentIconWhite, mediumIconWhite) {
    if (priority === 'urgent') {
        urgentBtn.classList.remove('hoverBtn');
        urgentBtn.classList.add('activeUrgentBtn');
        urgentIcon.classList.add('dNone');
        urgentIconWhite.classList.remove('dNone');
        prioBtn = 'urgent';
    } else if (priority === 'medium') {
        mediumBtn.classList.remove('hoverBtn');
        mediumBtn.classList.add('activeMediumBtn');
        mediumIcon.classList.add('dNone');
        mediumIconWhite.classList.remove('dNone');
        prioBtn = 'medium';
    } else if (priority === 'low') {
        lowBtn.classList.remove('hoverBtn');
        lowBtn.classList.add('activeLowBtn');
        lowIcon.classList.add('dNone');
        lowIconWhite.classList.remove('dNone');
        prioBtn = 'low';
    }
}

function formatDate(input) {
    let value = input.value.replace(/\D/g, "");
    let formattedValue = "";
    if (value.length > 0) {
        formattedValue += value.substring(0, 2);
    }
    if (value.length > 2) {
        formattedValue += "/" + value.substring(2, 4);
    }
    if (value.length > 4) {
        formattedValue += "/" + value.substring(4, 8);
    }
    input.value = formattedValue;
}

function selectCategory(myCategory) {
    let selectedCategory = document.getElementById('selectedCategory');
    selectedCategory.innerHTML = `${myCategory}`;
    toggleDropdownCategory();
}

function getSubtask() {
    let subtaskInput = document.getElementById('subtaskInput');
    let subtaskList = document.getElementById('subtaskList');
    subtaskList.innerHTML += `<li>${subtaskInput.value}</li>`;
    subtasksArr.push(`${subtaskInput.value}`);
    subtaskInput.value = '';
}

function checkValidation() {
    let titleInput = document.getElementById('titleInput');
    let requiredTitle = document.getElementById('requiredTitle');
    let dateInput = document.getElementById('dateInput');
    let requiredDate = document.getElementById('requiredDate');

    if (titleInput.value == '') {
        titleInput.classList.add('required');
        requiredTitle.innerHTML = `<p class="fontRed requiredFont">This field is required</p>`;
    } else if (dateInput.value.length < 10) {
        dateInput.classList.add('required');
        requiredDate.innerHTML = `<p class="fontRed requiredFont">This field is required</p>`;
    } else {
        for (let contactIndex = 0; contactIndex < listNames.length; contactIndex++) {
            contacts = listNames[contactIndex]; 
        }
        pushTasks();
        showAddedBoardImg();
    }
}

function showAddedBoardImg() {
    let addedBoardImg = document.getElementById('addedBoardImg');
    addedBoardImg.classList.remove('dNone');
    setTimeout(() => {
        window.location.href = "./board.html";;
    }, 3000);
}

async function getContact() {
    let contacts = await getData("/contacts");
    let dropdownListName = document.getElementById('dropdownListName');
    dropdownListName.innerHTML = '';
    for (let key in contacts) {
        if (contacts.hasOwnProperty(key)) {
            contactArr.push(contacts[key])
        }
        dropdownListName.innerHTML += `<li id="listName${contacts[key].name}" class="listElement">
                                        <p id="myContactName="${contacts[key].name}">${contacts[key].name}</p>
                                        <input type="checkbox" id="checkbox${0}" class="checkbox" name="selectedNames">
                                    </li>`; 
    }
}