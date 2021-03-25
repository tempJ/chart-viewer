"use strict";

const DataStorage = require("./DataStorage")

class Data{
    constructor(body){
        this.body = body;
    }

    csvLoad(){
        // const client = this.body;
        try{
            const datas = DataStorage.getCsvData();
            return { success: true, datas };
        }
        catch(err) {
            return { success: false, err };
        }
    }
}

module.exports = Data;