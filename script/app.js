class App {
    appendUserPage(id) {
        let userPage = new UserPage(id);
        this.element.append(userPage.render());
    }

    appendUserList(usersList) {
        let userListComponent = new UserList(usersList);
        userListComponent.onUserSelected( this.appendUserPage.bind(this) );
        this.element.append(userListComponent.render());
        //userListComponent.addEventListeners(this.appendUserPage.bind(this));
    }

    getAllUsers() {
        userService
            .getAllUsers()
            .then(this.appendUserList.bind(this));
    }

    render() {
        this.element = $(`<div></div>`);
        this.getAllUsers();
        return this.element;
    }
}

function createApp() {
    let app = new App();
    $(document.body).append(app.render());
}

createApp();