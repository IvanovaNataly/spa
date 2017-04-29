class UserList {
    constructor(usersList) {
        this.usersList = usersList;
    }

    renderAllUsers() {
        let users = this.usersList.map(user => `<li data-id="${user.id}">${user.name}</li>`);
        return users.join("");
    }

    onUserClick(e) {
        this.onCallback(e.target.dataset.id);
    }

    onUserSelected(callback) {
        this.onCallback = callback;
    }

    render() {
         let $html = $(`
            <nav>
                <h3>Users</h3>
                <ul>
                    <li>${this.renderAllUsers()}</li>
                </ul>
            </nav>
        `);

        $html.find("li").on("click", this.onUserClick.bind(this));
        return $html;
    }
}

// function appendUserList(usersList) {
//     let userListComponent = new UserList(usersList);
//     $(document.body).append(userListComponent.render());
// }

// function getAllUsers() {
//     userService
//         .getAllUsers()
//         .then(appendUserList);
// }

// getAllUsers();