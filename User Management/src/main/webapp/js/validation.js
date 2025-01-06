document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (!validateEmail(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value.trim() === '') {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }

    if (validateEmail(email.value) && password.value.trim() !== '') {
        alert('Form submitted successfully!');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
