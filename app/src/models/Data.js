"use strict";

const DataStorage = require("./DataStorage")

class Data{
    constructor(body){
        this.body = body;
    }

    async dataLoad(){
        const client = this.body;

        try{
            const binIndex = client.fileName.lastIndexOf(".bin");
            const csvIndex = client.fileName.lastIndexOf(".csv");
            const len = client.fileName.length;
            // console.log(client.fileName);
            // console.log(csvIndex);
            // console.log(len);

            if(binIndex == len-4){
                const data = await DataStorage.getBinData(client.fileName);
                return { success: true, data, msg: "load bin data" };
            }
            if(csvIndex == len-4){
                const data = await DataStorage.getCsvData(client.fileName);
                return { success: true, data, msg: "load csv data" };
            }
            return { success: false, err: "invalid data format" };
        }
        catch(err){
            return { success: false, err };
        }
    }

//     async binLoad(){
//         const client = this.body;
//         // console.log(client.fileName);
//         try{
//             const data = await DataStorage.getBinData(client.fileName);
            
//             return { success: true, data, msg: "load success" };
//         }
//         catch(err) {
//             return { success: false, err };
//         }
//     }

//     async csvLoad(){
//         // console.log(this.body);
//         const client = this.body;
//         try{
//             // console.log(client.fileName);
//             const data = await DataStorage.getCsvData(client.fileName);
//             // console.log(client.fileName);
//             // console.log(data);
//             return { success: true, data, msg: "load success" };
//         }
//         catch(err) {
//             return { success: false, err };
//         }
//     }
}

module.exports = Data;