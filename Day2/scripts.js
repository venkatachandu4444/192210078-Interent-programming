function validateForm() {
  const dob = document.getElementById('dob').value;
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  if (age < 18) {
    document.getElementById('ageError').style.display = 'block';
    return false;
  } else {
    document.getElementById('ageError').style.display = 'none';
    return true;
  }
}
