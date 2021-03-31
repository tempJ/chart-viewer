"use strict";



var ctx = document.getElementById("container").getContext("2d");
var dataChart = new Chart(ctx, {
    type: 'line',
    data: dataSeries()
    // series: [{
    //     data: csvLoad()
    // }]
    // data: randLoad()
});
// console.log(csvLoad())
// console.log(json.stringify(csvLoad()));

async function dataSeries() {
    const csvPromise = csvLoad();
    const csvData = await csvPromise;
    // console.log(csvData);

    return csvData;
}


// Highcharts.chart('container', {
//     exporting: {
//         enabled: false
//     },

//     yAxis: {
//         title: null
//     },

//     legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'top'
//     },
//     series: [{
//         name: 'Rand',
//         data: randLoad()
//     }, {
//         name: 'CSV',
//         data: csvLoad()
//     }]
// });

function randLoad() {
    const data = [];
    var i;
    for(i=1; i<=1000; i++) {
        data.push([
            Math.round(Math.random()*100)
        ]);
    }
    console.log(data);
    return data;
}

async function csvLoad() {
    const req = {
        // fileName: "C:/Users/kh.kim/ex/chart-viewer/app/bin/data/data.csv"
        fileName: "./app/bin/data/data.csv"
    };

    const data = [];
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
            // console.log(res);
            if(res.success){
                // res.data.forEach(function(element) {
                //     console.log(parseFloat(element));
                // })
                // res.data.forEach(element => {
                //     data.push(parseFloat(element));
                // });
                // const data = res.data.map(function(element) {
                //     return parseFloat(element);
                // })
                res.data.map(element =>{
                    data.push(parseFloat(element));
                });
                console.log(data);
                return data;
            }//chart에 data 깔기
            else {
                if(res.err) return console.log(res.err);
                console.log(res.msg);
            }
        })
        .catch(console.error);
}

function binLoad() {

}