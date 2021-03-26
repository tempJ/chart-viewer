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
        console.log(data[0]);

        // var dataSet = [];
        // for(var i=0; i<data.length; i++){
        //     dataSet.push(data[i]);
        // }
    }

    // ==================================================================
    // ------------------------------------------------------------------
    // private func
    // ------------------------------------------------------------------

    static #getCsvData(){
        const datas = d3.csv("../bin/data/data.csv", function(error, data){
            if(error) throw error;
        });

        // const datas = [];
        // d3.csv("../bin/data/data.csv", function(error, data){
        //     if(error) throw error;
        //     data.forEach(element => {
        //         datas.push(parseFloat(element));
        //     });
        // });

        return datas;
    }
}

module.exports = DataStorage;