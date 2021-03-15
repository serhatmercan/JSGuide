{/* <form id="user-input">
    <div class="form-control">
        <label for="username">Username</label>
        <input type="text" id="username" />
    </div>
    <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" />
    </div>
    <button type="submit">Create User</button>
</form> */}

class Validator {
    static REQUIRED = "REQUIRED";
    static MIN_LENGTH = "MIN_LENGTH";

    static validate(value, flag, validatorValue) {
        if (flag === this.REQUIRED) {
            return value.trim().length > 0;
        }
        if (flag === this.MIN_LENGTH) {
            return value.trim().length > validatorValue;
        }
    }
}

class User {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }

    greet() {
        console.log("Hi, I am " + this.userName);
    }
}

class UserInputForm {
    constructor() {
        this.form = document.getElementById('user-input');
        this.userNameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');

        this.form.addEventListener('submit', this.signupHandler.bind(this));
    }

    signupHandler(event) {
        event.preventDefault();
        const enteredUserName = this.userNameInput.value;
        const enteredPassword = this.passwordInput.value;

        if (
            !Validator.validate(enteredUserName, Validator.REQUIRED) ||
            !Validator.validate(enteredPassword, Validator.MIN_LENGTH, 5)
        ) {
            alert("Invalid Input - Username or Password is Wrong (Password should be at least six characters).");
            return;
        }

        const newUser = new User(enteredUserName, enteredPassword);
        newUser.greet();
    }
}

new UserInputForm();