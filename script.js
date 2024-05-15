document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    
    const foodOptions = document.querySelectorAll('input[name="food"]:checked');
    if (foodOptions.length < 2) {
        alert('Please select at least two food options.');
        return;
    }
    const food = Array.from(foodOptions).map(option => option.value).join(', ');

    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    
    const table = document.getElementById('recordsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = gender;
    newRow.insertCell(6).innerText = food;
    newRow.insertCell(7).innerText = state;
    newRow.insertCell(8).innerText = country;

    
    document.getElementById('userForm').reset();
});
