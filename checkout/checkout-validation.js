document.getElementById('checkout-container').onsubmit = function(e) {
    e.preventDefault();  // Prevent the default form submission
    window.location.href = '/confirmation';  // Redirect to the confirmation page
};

