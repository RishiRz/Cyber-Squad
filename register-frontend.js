document.addEventListener('DOMContentLoaded', function() {
  const createAccountBtn = document.querySelector('.btn.primary');
  
  if (createAccountBtn) {
    createAccountBtn.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent form submission
      window.location.href = 'donate.html'; // Navigate to donate page
    });
  }
});
