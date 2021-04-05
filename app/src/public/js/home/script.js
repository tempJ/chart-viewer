"use strict";

// var Chart = require("chart.js");

const randLoadBtn = document.querySelector("#rand-load-btn"),
    binLoadBtn = document.querySelector("#bin-load-btn"),
    csvLoadBtn = document.querySelector("#csv-load-btn");

    // var btn = document.getElementById()

randLoadBtn.addEventListener("click", randLoad);
binLoadBtn.addEventListener("click", binLoad);
csvLoadBtn.addEventListener("click", csvLoad);

var ctx = document.getElementById("container").getContext("2d");
var dataChart = new Chart(ctx, {
    type: 'line',
    data: {
        // labels: [""],
        datasets: [{
            label: "Rand",
            // backgroundColor: "hsl(0, 0%, 98%)",
            borderColor: "#808080",
            data: [],
            
        },{
            label: "BIN",
            // backgroundColor: "hsl(0, 0%, 98%)",
            borderColor: "#1E90FF",
            data: [],
            // fill: false
        },{
            label: "CSV",
            // backgroundColor: "hsl(0, 0%, 98%)",
            borderColor: "#228B22",
            data: [],
            // fill: false
        }],
        fill: false,
    },
    options: {
        responsive: true,
        // pan: {
        //     enabled: true,
        //     mode: "x",
        //     speed: 100,
        //     threshold: 100
        // },
        zoom: {
            enabled: true,
            drag: true,
            mode: "x",
            limits: {
                max: 10,
                min: 0.5
            }
        }
    }
});

function dataAdd(label, data) {
    var dataset = dataChart.data.datasets;
    var len = dataChart.data.labels.length;

    // for(var i=0; i<dataChart.data.length; i++){
    //     if(len < 1) dataChart.data.labels.push("");
    //     if(len < 1) {
    //         dataset[label].data.push(element);
    //     }
    //     else {
    //         dataset[label].data
    //     }
    // }
    // for(var i=0; i<dataChart.data.length; i++){
    //     dataset[label].data.pop()
    // }
    dataset[label].data = [];
    // dataset[label].data.splice(0, dataset[label].data.length);
    // dataChart.update();
    // dataChart.data.length = 0;
    // dataset[label].data = null;
    data.forEach(element =>{
        // dataChart.data.labels.push("");
        if(len < 1) dataChart.data.labels.push("");
        dataset[label].data.push(element);
    })
    dataChart.update();
}

function randLoad() {
    const data = [];
    for(var i=0; i<1000; i++) {
        var tmp = Math.random()*40;
        data.push(tmp*(Math.floor(Math.random()*2) == 1 ? 1: -1));
    }

    dataAdd(0, data);
}

function binLoad() {
    const req = {
        fileName: "./app/bin/data/data.bin"
    };
    
    // console.log(req);
    fetch("/chart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                const data = [];
                res.data.map(element =>{
                    data.push(parseFloat(element));
                });
                // console.log(data);

                dataAdd(1, data);
            }
            else {
                if(res.err) return console.log(res.err);
                console.log(res.msg);
            }
        })
        .catch(console.error);
}

async function csvLoad() {
    const req = {
        fileName: "./app/bin/data/data.csv"
    };
    
    // console.log(req);
    fetch("/chart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(req),
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                const data = [];
                res.data.map(element =>{
                    data.push(parseFloat(element));
                });
                // console.log(data);

                dataAdd(2, data);
            }
            else {
                if(res.err) return console.log(res.err);
                console.log(res.msg);
            }
        })
        .catch(console.error);
}