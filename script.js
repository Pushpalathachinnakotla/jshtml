document.getElementById('loginForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Both fields are required!');
        event.preventDefault(); // Prevent form submission
    } else if (password.length < 6) {
        alert('Password must be at least 6 characters long!');
        event.preventDefault();
    }
    else{
        alert("form submitted")
    }
});
