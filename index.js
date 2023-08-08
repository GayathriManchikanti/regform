const registrationForm = document.getElementById('registrationForm');
const userTable = document.getElementById('userTable');

registrationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const acceptedTerms = document.getElementById('acceptedTerms').checked;

  const newRow = userTable.insertRow();
  const nameCell = newRow.insertCell(0);
  const emailCell = newRow.insertCell(1);
  const dobCell = newRow.insertCell(2);
  const acceptedTermsCell = newRow.insertCell(3);

  nameCell.textContent = name;
  emailCell.textContent = email;
  dobCell.textContent = dob;
  acceptedTermsCell.textContent = acceptedTerms ? 'Yes' : 'No';

  // Clear the form
  registrationForm.reset();
});
