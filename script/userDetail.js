class UserDetail {
    constructor(user){
        this.user = user;
    }

    render() {
        return $(`
            <article>
                <h1>${this.user.name}</h1>
                <dl>
                    <dt>Email</dt>
                    <dd>${this.user.email}</dd>
                    <dt>Phone</dt>
                    <dd>${this.user.phone}</dd>
                </dl>
            </article>
        `)
    }
}

// function appendUserDetail(user) {
//     let userDetail = new UserDetail(user);
//     $(document.body).append(userDetail.render());
// }

// function getUserDetail(id) {
//     userService
//         .getUser(id)
//         .then(appendUserDetail);
// }

// getUserDetail(3);
