// Untuk mengurus busies logic 
// File untuk di gunakan mengelola data seperti. create, update, delete etc

class User {

    constructor(){
        this.users = this.getUser() || [];
    }

    saveUser(userData){
        const newUser = {
            id: Date.now(),
            ...userData,
        };
        this.users.push(newUser)
        localStorage.setItem('users', JSON.stringify(this.users));
        // return window.location.href = '../signin.html';
        // console.log(userData);
        return {
            succes: true,
        }
    };

    signUser(usernameByInput){
        // Perikasa data di database lokal
        const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());
        if(userExists){
            // Pengembalian data ke lokal storage
            return {
                succes: true,
                username,
            } 
        }else {
            // Pengembalian data ke lokal storage
            return {
                succes: false,
                massage: 'Username tidak di temukan',
            }
        }
        // console.log(username);

    
    }

    getUser(){
        return JSON.parse(localStorage.getItem('users')) || []
    }
}