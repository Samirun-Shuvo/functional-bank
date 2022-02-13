document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const passField = document.getElementById('user-password');
    const userPassword = passField.value;
    //checked email and password
    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
})

