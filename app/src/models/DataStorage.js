"use strict";

const binaryFile = require("binary-file");
const fs = require("fs").promises;

class DataStorage{
    static #getBinData(data){
        // const datas = data.toString('utf-8').split('\n');
        // console.log(datas);
        const datas = [];
        // data.forEach(element => {
        //     datas.push(element);
        // });
        data.map(element => {
            datas.push(element);
        });
        // const datas = data.map(Number);
        // console.log(datas)
        return datas;
    }

    static #getCsvData(data){
        // console.log(data);
        // 무조건 문자열로 이루어진 데이터의 배열로 return 하도록
        // const datas = data.toString('utf-8').split('\n');
        const datas = data.toString("utf-8").split('\n').map(Number);
        // const datas = [];
        // datas.map(element =>{
        //     data.push(element);
        // });

        // const datas = JSON.stringify(data); //file load
        // console.log(datas);
        return datas;
    }

// -------------------------------------------------------------------------------------------------

    static getBinData(fileName){
        return fs
            .readFile(fileName)
            .then((data) => {
                let arr8 = new Uint8Array(data);
                let arrFloat = new Float32Array(arr8.buffer, 4);
                let count = new Int32Array(arr8.buffer, 0, 1);
                // console.log(arrFloat);
                return this.#getBinData(arrFloat);
            })
            .catch(console.error);
        // const binFile = new binaryFile(fileName, "r");

        // return fs
        //     .readFile(fileName)
        //     .then((data) =>{
        //         // console.log(data);
        //         console.log(data.toString("hex"));
        //         // console.log(data.toString("hex"));
        //         return this.#getBinData(data);
        //     })
        //     .catch(console.error);
        // return false;

        // var buffer = Buffer.alloc(2048);
        // console.log("z")
        // return fs.open(fileName, "r", function(error, fd) {
        //     console.log("a")
        //     fs.read(fd, buffer, 0, buffer.length, 0, function(byteRead, buffer) {
        //         console.log("d")
        //         console.log(buffer);
        //         fs.close(fd, function(error) {
        //             // console.error;
        //         })
        //         return this.#getBinData(buffer);;
        //     })
        // })
        // return buffer;
        // return fs
        //     .open(fileName, "r")
        //     .then((fd) => {
        //         return fs.read(fd, buffer, 0, buffer.length, 0)
        //     })
        //     .then((bytesRead, buffer) => {
        //         console.log(buffer);
        //         })
        //     })
        //     .then(fs.close(fd))
        //     .catch(console.error);

        // fs.readFile(fileName, buffer, 0, buffer.length, 0, function(err, byteRead, buffer)
        //     console.log(byteRead, 'bytes');
        // })
        // binFile.open().then(() => {
        //     return binFile.readUInt32();
        //     // return binFile.readFloat();
        // }).then((len) => {
        //     console.log(len)
        //     return binFile.readInt16();
        //     return binFile.readFloat();
        //     return binFile.readString(len);
        // }).then((data) => {
        //     console.log(data);
        //     return binFile.close();
        // }).then(function () {
        //     // console.log('File closed');
        // }).catch(console.error);
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