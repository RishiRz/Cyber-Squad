document.addEventListener('DOMContentLoaded', function() {
  const bloodRequestItem = document.querySelector('.steps:nth-child(2)');
  
  if (bloodRequestItem) {
    bloodRequestItem.addEventListener('click', function() {
      window.location.href = 'bloodRequest.html'; // Navigate to Blood Request page
    });
  }

  const donarItem = document.querySelector('.steps:nth-child(1)');
  if (donarItem) {
    donarItem.addEventListener('click', function() {
      window.location.href = 'authentication.html'; // Navigate to Authentication page
    });
  }
});
