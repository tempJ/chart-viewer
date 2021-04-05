"use strict";

const binaryFile = require("binary-file");
const fs = require("fs").promises;

class DataStorage{
    static #getBinData(data){

        // const binFile = new binaryFile()
        // console.log(data);
        const datas = data.toString('utf-8').split('\n');

        // const datas = JSON.stringify(data); //file load
        console.log(datas);
        return datas;
    }

    static #getCsvData(data){
        // console.log(data);
        // 무조건 문자열로 이루어진 데이터의 배열로 return 하도록
        const datas = data.toString('utf-8').split('\n');

        // const datas = JSON.stringify(data); //file load
        // console.log(datas);
        return datas;
    }

// -------------------------------------------------------------------------------------------------

    static getBinData(fileName){
        // console.log(fileName)
        const binFile = new binaryFile(fileName, "r");
        // try{
        //     await binFile.open();
        //     // const len = await binFile.readUInt32();
        //     // const data = await binFile.readString(len);
        //     const data = await binFile.readFloat();
        //     await binFile.close();
        //     console.log(data);

        //     return this.#getBinData(data);
        // }
        // catch(error) { console.error }
        // return binaryFile
        //     .open()
        //     .readString()
        // return fs
        //     .readFile(fileName)
        //     .then((data) =>{
                
        //         // console.log(data);
        //         return this.#getBinData(data);
        //     })
        //     .catch(console.error);
        // return false;
        binFile.open().then(() => {
            return binFile.readUInt32();
            // return binFile.readFloat();
        }).then((len) => {
            console.log(len)
            return binFile.readInt16();
            return binFile.readFloat();
            return binFile.readString(len);
        }).then((data) => {
            console.log(data);
            return binFile.close();
        }).then(function () {
            // console.log('File closed');
        }).catch(console.error);
        // return binFile
        //     .open()
        //     .readFloat()
        //     .then((data) => {
        //         console.log(data);
        //         return data;
        //     })
        //     .close()
        //     .catch(console.error);

        // var reader = new FileReader();
        // reader.onload = function (e) {
        //     console.log(e.target.result);
            
        // }
        // reader.onerror = function (e) {
        //     console.log("error: "+e.type);
        // }
        // // return reader.readAsBinaryString(fileName);
        // return reader.readAsBinaryString(fileName).then(console.log)
        // var buffer = Buffer.alloc(2000)
        // return fs
        //     .read(fileName, buffer, 0, 2000, 0)
        //     .then((data) =>{
        //         console.log(data);
        //         return this.#getCsvData(data);
        //     })
        //     .catch(console.error);
    }

    static getCsvData(fileName){
        // return fs.readFile(fileName, 'utf-8', (err, data) =>{
        //             // console.log(err);
        //             console.log("d");
        //             console.log(data);
        //         });
        // console.log(fileName);
        // return this.#getCsvData(fileName);
        // return fs
        //     .readFile(fileName, 'utf-8', (err, data) =>{
        //         // console.log(err);
        //         // console.log(data);
        //     });
        //     // .then((err, data) =>{
        //     //     console.log(err);
        //     //     return this.#getCsvData(fileName);
        //     // })
        //     // .catch(console.error);
        return fs
            .readFile(fileName)
            .then((data) =>{
                // console.log(data);
                return this.#getCsvData(data);
            })
            .catch(console.error);
    }
}

module.exports = DataStorage;