function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    if (username =='alief' && password =='123') {
        message.innerHTML = 'Login berhasil!';
        message.style.color = '#008000';
    } else {
        message.innerHTML = 'Login gagal. Periksa kembali username dan password.';
        message.style.color = '#FF0000'; 
    }
}
