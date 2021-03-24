"use strict";

const UserStorage = require("./UserStorage")

class User{
    constructor(body){
        this.body = body;
    }

    chart(){
        const client = this.body;
        try{
            const response = UserStorage.save(client);
            return response;
        }
        catch(err) {
            return { success: false, err };
        }
    }
}

module.exports = User;