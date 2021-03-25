"use strict";

const d3 = require("d3");
const fs = require("fs");

class DataStorage{
    static getCsvData(){
        return this.#getCsvData();
        // return fs
        //     .readFile("../bin/data.bin")
        //     .then((data) =>{
        //         return this.#getCsvData(data, fields);
        //     })
        //     .catch(console.error);
    }

    // ------------------------------------------------------------------

    static isError(err, data) {
        if(err) throw err;
        console.log(data);
    }

    // ==================================================================
    // ------------------------------------------------------------------
    // private func
    // ------------------------------------------------------------------

    static #getCsvData(){
        const datas = d3.csv("../bin/data/data.csv");
        return datas;
    }
}

module.exports = DataStorage;