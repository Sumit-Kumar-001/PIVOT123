const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true, 
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
  });
 function goToSignupPage() {
    window.location.href = "signup.html";
 }
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const buyerChecked = document.getElementById('buyer').checked;
    const sellerChecked = document.getElementById('seller').checked;

    // Validation
    if (!buyerChecked && !sellerChecked) {
        document.getElementById('errorMessage').textContent = "You must select at least one role (Buyer or Seller).";
        return;
    }

    if (password !== confirmPassword) {
        document.getElementById('errorMessage').textContent = "Passwords do not match.";
        return;
    }

    if (password.length < 6) {
        document.getElementById('errorMessage').textContent = "Password must be at least 6 characters long.";
        return;
    }

    // Show success message or process the form data (e.g., send to the backend)
    alert(`Account created successfully! Welcome, ${name}. You are a ${buyerChecked ? 'Buyer' : ''} ${sellerChecked ? 'Seller' : ''}.`);
    document.getElementById('signupForm').reset(); // Reset form after submission
    document.getElementById('errorMessage').textContent = ''; // Clear error message
});
function goToMarketplace() {
    window.open("marketplace.html", "_blank");
}