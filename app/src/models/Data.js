"use strict";

const DataStorage = require("./DataStorage")

class Data{
    constructor(body){
        this.body = body;
    }

    async csvLoad(){
        // console.log(this.body);
        const client = this.body;
        try{
            // console.log(client.fileName);
            const data = await DataStorage.getCsvData(client.fileName);
            // console.log(client.fileName);
            // console.log(data);
            return { success: true, data, msg: "load success" };
        }
        catch(err) {
            return { success: false, err };
        }
    }
}

module.exports = Data;