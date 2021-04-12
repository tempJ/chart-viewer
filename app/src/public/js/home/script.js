"use strict";

// var Chart = require("chart.js");

const resetZoomBtn = document.querySelector("#reset-zoom-btn"),
    randLoadBtn = document.querySelector("#rand-load-btn"),
    binLoadBtn = document.querySelector("#bin-load-btn"),
    csvLoadBtn = document.querySelector("#csv-load-btn");

    // var btn = document.getElementById()

resetZoomBtn.addEventListener("click", resetZoom);
randLoadBtn.addEventListener("click", randLoad);
binLoadBtn.addEventListener("click", binLoad);
csvLoadBtn.addEventListener("click", csvLoad);

const ctx = document.getElementById("container").getContext("2d");
const dragOptions = {
    borderColor: "rgb(105,105,105)",
    animationDuration: 1000
};

function dataSets(label, color) {
    return {
        label,
        // backgroundColor: "hsl(0, 0%, 98%)",
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
        data: []
    };
}

const dataChart = new Chart(ctx, {
    type: 'line',
    data: {
        // labels: [""],
        datasets: [dataSets("Rand", "#808080"), dataSets("BIN", "#1E90FF"), dataSets("CSV", "#228B22")],
        fill: false,
    },
    options: {
        // responsive: false,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                type: "time",
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                position: "right"
            }]
        },
        // animation: {
        //     duration: 0
        // },
        elements: {
            point: {
                radius: 0.5
            }
        },
        plugins: {
            legend: {
                display: true,
                position: "right",
                labels: {
                    boxWidth: 6,
                    boxHeight: 6
                }
            },
            zoom: {
                pan: {
                    enabled: true,
                    mode: "x",
                    speed: 10,
                    threshold: 10,
                    rangeMin: {
                        x: null,
                        y: null
                    },
                    rangeMax: {
                        x: null,
                        y: null
                    }
                },
                zoom: {
                    enabled: true,
                    // drag: true,
                    drag: dragOptions,
                    mode: "x",
                    onZoom: function({chart}) { console.log(`I'm zooming!!!`); },
                    onZoomComplete: function({chart}) { console.log(`I was zoomed!!!`); },
                    onZoomRejected: function({chart, event}) { console.log(`I didn't start zooming!`); }
                }
            }
        }
    },
    
});

function resetZoom() {
    dataChart.resetZoom();
}

function dataAdd(label, data) {
    const dataset = dataChart.data.datasets;
    const len = dataChart.data.labels.length;

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
    dataChart.data.labels = [];
    let labels = [];
    // dataset[label].data.splice(0, dataset[label].data.length);
    // dataChart.update();
    // dataChart.data.length = 0;
    // dataset[label].data = null;
    // console.log(data.length)
    let i = 1;
    data.forEach(element =>{
        labels.push(i);
        // dataChart.data.labels.push(i);
        i++;
        // if(len < 1) dataChart.data.labels.push("");
        dataset[label].data.push(element);
    })
    dataChart.data.labels = labels;
    dataChart.update();
}

function randLoad() {
    const data = [];
    for(let i=0; i<1000; i++) {
        let tmp = Math.random()*40;
        data.push(tmp*(Math.floor(Math.random()*2) == 1 ? 1: -1));
    }

    dataAdd(0, data);
}

function binLoad() {
    const req = {
        fileName: "./app/bin/data/data.bin"
    };
    dataFetch(1, req);
    // console.log(req);
    // fetch("/chart", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //     },
    //     body: JSON.stringify(req),
    // })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         if(res.success){
    //             const data = [];
    //             res.data.map(element =>{
    //                 data.push(element);
    //             });
    //             // console.log(data);

    //             dataAdd(1, data);
    //         }
    //         else {
    //             if(res.err) return console.log(res.err);
    //             console.log(res.msg);
    //         }
    //     })
    //     .catch(console.error);
}

async function csvLoad() {
    const req = {
        fileName: "./app/bin/data/data.csv"
    };
    dataFetch(2, req);
    // // console.log(req);
    // fetch("/chart", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //     },
    //     body: JSON.stringify(req),
    // })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         if(res.success){
    //             const data = [];
    //             res.data.map(element =>{
    //                 data.push(element);
    //             });
    //             // console.log(data);

    //             dataAdd(2, data);
    //         }
    //         else {
    //             if(res.err) return console.log(res.err);
    //             console.log(res.msg);
    //         }
    //     })
    //     .catch(console.error);
}

async function dataFetch(label, req) {
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
                // console.log(res.data);
                // const data = [];
                // res.data.map(element =>{
                //     data.push(element);
                // });
                // console.log(res.data);

                dataAdd(label, res.data);
            }
            else {
                if(res.err) return console.log(res.err);
                console.log(res.msg);
            }
        })
        .catch(console.error);
}