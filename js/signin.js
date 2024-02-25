// Penghubung 
document.addEventListener('DOMContentLoaded',  () => {
    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
           const usernameByInput = document.getElementById('username').value;
        const result = userManager.signUser(usernameByInput);
        if(result.succes) {
            alert('Loin Succes')
            return window.location.href = '../add-task.html';
        } else {
            alert(result.massage)
            console.log(result.massage);
        }
        // console.log(userData);
    })
});