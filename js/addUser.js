// Penghubung 
document.addEventListener('DOMContentLoaded',  () => {
    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userData = {
            username: document.getElementById('username').value,
        }
        const result = userManager.saveUser(userData);
        if(result.succes) {
            return window.location.href = '../signin.html';
        } else {
            alert('Gagal Mendaftar silahkan coba lagi')
        }
        // console.log(userData);
    })
});