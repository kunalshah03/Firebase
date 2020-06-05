const userId = document.getElementById('userId');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');
const addBtn = document.getElementById('addBtn');
const updateBtn = document.getElementById('updateBtn');
const removeBtn = document.getElementById('removeBtn');

const database = firebase.database();

addBtn.addEventListener('click',(e) => {
    e.preventDefault();
    database.ref('/users'+userId.value).set({
        first_name: firstname.value,
        last_name: lastname.value,
        age: age.value
    });
})