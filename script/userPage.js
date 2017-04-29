class UserPage {
    constructor(id) {
        this.id = id;
    }

    appendUserDetail(user) {
        let userDetail = new UserDetail(user);
        $(this.element).empty();
        this.element.append(userDetail.render());
    }
    
    getUserDetail(id) {
        userService
            .getUser(id)
            .then(this.appendUserDetail.bind(this));
    }

    render() {
        this.element = $(`<main></main>`);
        this.getUserDetail(this.id);
        return this.element;
    }
}

// function appendUserPage(id) {
//     let userPage = new UserPage(id);
//     $(document.body).append(userPage.render());
// }

// appendUserPage(3);