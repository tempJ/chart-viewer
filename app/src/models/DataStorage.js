"use strict";

const fs = require("fs").promises;

class DataStorage{
    static #getCsvData(data){
        // console.log(data);
        const datas = data.toString('utf-8').split('\r\n');

        // const datas = JSON.stringify(data); //file load
        // console.log(datas);
        return datas;
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