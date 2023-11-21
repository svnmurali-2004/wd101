
const userTableBodyElement = document.getElementById('userTableBody');

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('user_')) {
      const userData = JSON.parse(localStorage.getItem(key));
      createUserTableRow(userTableBodyElement, userData);
    }
  }
});

const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const dobInput = registrationForm.elements.dob;
  const dob = new Date(dobInput.value);
  const currentYear = new Date().getFullYear();
  const age = currentYear - dob.getFullYear();

  if (age < 18 || age > 55) {
    alert('Age must be between 18 and 55.');
    return;
  }

  const userKey = `user_${Date.now()}`;
  const userData = {
    name: registrationForm.elements.name.value,
    email: registrationForm.elements.email.value,
    password: registrationForm.elements.password.value,
    dob: dobInput.value,
    acceptedTerms: registrationForm.elements.acceptedTerms.checked,
  };

  localStorage.setItem(userKey, JSON.stringify(userData));
  createUserTableRow(userTableBodyElement, userData);
});

function createUserTableRow(userTableBody, userData) {
  const newRow = userTableBody.insertRow();
  const cellStyle = 'border border-gray-300 p-2';

  newRow.insertCell().textContent = userData.name;
  newRow.insertCell().textContent = userData.email;
  newRow.insertCell().textContent = userData.password;
  newRow.insertCell().textContent = userData.dob;
  newRow.insertCell().textContent = userData.acceptedTerms;

  newRow.querySelectorAll('td').forEach((cell) => {
    cell.className = cellStyle;
  });
}

/*document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('user_')) {
            const userData = JSON.parse(localStorage.getItem(key));
            addRowToTable(userTableBody, userData);
        }
    }
});

const form = document.getElementById('registrationForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const dob = new Date(form.dob.value);
    const currentYear = new Date().getFullYear();
    const age = currentYear - dob.getFullYear();

    // Validate age to accept users between 18 and 55 years old
    if (!(age >=18 || age <=55)){
        alert('Age should be between 18 and 55.');
        return;
    }

    const userKey = 'user_' + Date.now();
    localStorage.setItem(userKey, JSON.stringify({
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        dob: form.dob.value,
        acceptedTerms: form.acceptedTerms.checked
    }));

    const userTableBody = document.getElementById('userTableBody');
    addRowToTable(userTableBody, {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        dob: form.dob.value,
        acceptedTerms: form.acceptedTerms.checked
    });
});

function addRowToTable(tableBody, userData) {
    const newRow = tableBody.insertRow();
    
    // Add borders and padding to each cell
    const cellStyle = 'border border-gray-300 p-2';

    const nameCell = newRow.insertCell();
    nameCell.textContent = userData.name;
    nameCell.className = cellStyle;

    const emailCell = newRow.insertCell();
    emailCell.textContent = userData.email;
    emailCell.className = cellStyle;

    const passwordCell = newRow.insertCell();
    passwordCell.textContent = userData.password;
    passwordCell.className = cellStyle;

    const dobCell = newRow.insertCell();
    dobCell.textContent = userData.dob;
    dobCell.className = cellStyle;

    const acceptedTermsCell = newRow.insertCell();
    acceptedTermsCell.textContent = userData.acceptedTerms;
    acceptedTermsCell.className = cellStyle;
}*/
