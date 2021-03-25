"use strict";

// (function () {
//     // generate an array of random data
//     var data = [],
//     time = (new Date()).getTime(),
//     i;

//     for (i = -999; i <= 0; i += 1) {
//         data.push([
//             time + i * 1000,
//             Math.round(Math.random() * 100)
//         ]);
//     }
//     return data;
// }

class DataLoad{
    static randLoad() {
        const data = [];
        for(i=1; i<=1000; i++) {
            data.push([
                Math.round(Math.random() * 100)
            ]);
        }
        console.log(data);
        return data;
    }

    static csvLoad() {
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
                if(res.success) ;//chart에 data 깔기
                else {
                    if(res.err) return console.log(JSON.stringify(res.err));
                    console.log(JSON.stringify(res.msg));
                }
            })
            .catch((err) => {
                // console.error("")
            });
    }
    
    static binLoad() {
    
    }
}

module.exports = DataLoad;