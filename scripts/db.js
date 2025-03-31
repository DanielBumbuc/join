// let users = {
//     'name' : 'Testname',
//     'password' : '1234',
//     'email' : 'Testname@dev.com'
// };
// let tasks = {};
// let contacts = {};

const BASE_URL = 'https://join-439-default-rtdb.europe-west1.firebasedatabase.app/';

async function getData(path='') {
    try {
        let response = await fetch(BASE_URL + path + '.json');
        if (!response.ok)
            throw new Error(`problem while fetching, ${response.status}`);
            let data = await response.json();
            return data;
    } catch (error) {
        console.warn(error.message);
    }
}

async function putData(path='', users, userId) {
        let response = await fetch(`${BASE_URL}${path}/${userId}.json`,{
            method : 'PUT',
            headers : {
                'Content-type' : 'application/json',
            }, 
            body : JSON.stringify(users),     
        });
        let data = await response.json();
        return data;
}

function pushUsers() {
    let path = '/users';
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let userId = adjustEmail(email.value);
    let userData = ({
        name:email.value.trim(),
        email:email.value.trim(),
        password:password.value.trim()
    
    });
    putData(path, userData, userId);
}

function pushTasks(contacts) {
    let path = '/tasks';
    let title = document.getElementById('titleInput');
    let description = document.getElementById('taskDescription');
    let date = document.getElementById('dateInput');
    // let priority = 
    
    let category = document.getElementById('selectedCategory');
    // let subTask = 
    let taskId = 'test Task';
    let userData = ({
        title:title.value,
        description:description.value,
        date:date.value,
        contact:contacts,
        category:category.innerHTML
    
    });
    putData(path, userData, taskId);
}

function pushContacts() {
    let path = '/contacts';
    let contactName = document.getElementById('contactName');
    let contactEmail = document.getElementById('contactEmail');
    let contactPhone = document.getElementById('contactPhone');
    let contactId = adjustEmail(contactEmail.value);
    let userData = ({
        name:contactName.value,
        email:contactEmail.value,
        phone:contactPhone.value
    });
    putData(path, userData, contactId);
}


function adjustEmail(email) {
    return email.replace(/\./g, "_").replace(/@/g, "-at-");
}