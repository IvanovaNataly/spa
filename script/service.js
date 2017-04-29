class UserService {
    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/users/";
    }

    getAllUsers(){
         return $.get(this.url); 
    }

    getUser(id){
        return $.get(this.url+id);
    }
}

let userService = new UserService();
