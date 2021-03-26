"use strict";

Highcharts.chart('container', {
    exporting: {
        enabled: false
    },

    yAxis: {
        title: null
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top'
    },
    series: [{
        name: 'Rand',
        data: randLoad()
    }, {
        name: 'CSV',
        data: csvLoad()
    }]
});

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

function csvLoad() {
    const data = [];
    console.log(req);
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
                data.forEach(element => {
                    data.push(parseFloat(element));
                });
            }//chart에 data 깔기
            else {
                if(res.err) return console.log(JSON.stringify(res.err));
                console.log(JSON.stringify(res.msg));
            }
        })
        .catch((err) => {
            console.error("");
        });
}

function binLoad() {

}