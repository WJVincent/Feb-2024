class User {
    constructor(firstName, lastName, password, username){
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.username = username;
    };

    login(password){
        if(password === this.password){
            return true;
        }
        return false;
    }
};

class Stack {
    constructor(){
        this.data = [];
    };

    push(firstName, lastName, password, username){
        const newNode = new User(firstName, lastName, password, username);
        this.data.push(newNode);
        return this.data.length;
    };

    pop(){
        const popped = this.data.pop();
        return popped;
    };

    traverse(){
        for(let i = this.data.length - 1; i >= 0; i--){
            console.log(this.data[i]);
        };
    };

    searchByUsername(targetUsername){
        for(let i = this.data.length - 1; i >= 0; i--){
            if(this.data[i].username === targetUsername){
                return this.data[i];
            }
        };
        return false;
    }

    peek(){
        return this.data[this.data.length - 1];
    };
};