document.getElementById('submit').addEventListener('click', () => {
  // Get the form field values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const age = document.getElementById('age').value;

  // Check if all fields are filled
  if (name && email && age) {
    // Create a new user element
    const userElement = document.createElement('div');
    userElement.classList.add('user');
    userElement.innerHTML = `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Age: ${age}</p>
    `;

    // Append the user element to the submissions list
    document.querySelector('.submissions-list').appendChild(userElement);

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
  } else {
    alert('Please fill in all fields');
  }
});

