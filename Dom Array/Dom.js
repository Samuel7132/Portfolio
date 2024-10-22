const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

async function fetchUsers() {
    let response = await fetch('https://randomuser.me/api/');
    let data = await response.json();
        console.log(data);
    }
fetchUsers();


function displayUsers(users) {
    const usersContainer =
    document.getElementById('usersContainer'); users.forEach(user => {
    const userElement = document.createElement('div');
    userElement.innerHTML = `
        <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
        <img src="${user.picture.medium}" alt="${user.name.first}">
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city}, ${user.location.state}</p> `;
    
        usersContainer.appendChild(userElement);
    });
    }

async function fetchMultipleUsers(num) {
    try {let response = await fetch(`https://randomuser.me/api/?results=${num}`);
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
}
    let data = await response.json(); 
    displayUsers(data.results);
    } catch (error) {
    console.error('Fetch error: '  + error.message);
    }
}

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);