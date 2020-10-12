import API from "../utils/API"

export default {
    authenticate: function () {
        API.getUser().then(res => {
            let isAuthenticated = true;
            console.log(res.data);
            if (res.data) {
                isAuthenticated = true
                console.log("In IF statement")
                console.log(isAuthenticated)
                return isAuthenticated;
            } else {
                isAuthenticated = false
                console.log("In else statement")
                console.log(isAuthenticated)
                return isAuthenticated;
            }
        })

    },
}

// const Auth = {
//     isAuthenticated: false,
//     authenticate() {
//         this.isAuthenticated = true;
//     },
//     signout() {
//         this.isAuthenticated = false;
//     },
//     getAuth() {
//         return this.isAuthenticated;
//     }
// };
// export default Auth;