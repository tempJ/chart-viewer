"use strict";

const fs = require("fs").promises;

class UserStorage{
    //변수 앞에 # 붙이면 public이 아닌 private 변수
    static getUsers(isAll, ...fields){
        return fs
            .readFile("./src/db/users.json")
            .then((data) =>{
                return this.#getUsers(data, isAll, fields);
            })
            .catch(console.error);
    }

    static getUsersInfo(id){
        return fs
            .readFile("./src/db/users.json")
            .then((data) =>{
                return this.#getUserInfo(data, id);
            })
            .catch(console.error);
    }

    static async save(userInfo){
        const users = await this.getUsers(true);

        if(users.id.includes(userInfo.id)) throw "already exist";

        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        fs.writeFile("./src/db/users.json", JSON.stringify(users));
        return { success: true };
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;

        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, pw, name]
        const userInfo = usersKeys.reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;