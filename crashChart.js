function getCrashValue() {
    return crashValue = (Math.random() * (20.00 - 0.01) + 0.01).toFixed(2);
}

function addData(chart, data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function adjustLabels(chart, timeIndex) {
    if(timeIndex >= '15') {
        chart.data.labels.push(Math.ceil(timeIndex));
    }
}

function progressChart(chart, crashValue) {
    var tickRate = 100;
    var value = 0.00;
    var prevValue = null;
    var timeElapsed = 0;
    setInterval(function() {
        timeElapsed += tickRate;
        if((prevValue+0.01)>=crashValue) {
            console.log('CRASH');
            clearInterval();
            return;
        }
        else {
          //  console.log('previous: '+prevValue);
          //  console.log('current: '+value);
          //  console.log('next: '+(prevValue+0.01))
            var temp = value;
            value = prevValue+0.01
            addData(chart, {x: value, y: Math.floor(timeElapsed/1000)});
            adjustLabels(chart, timeElapsed/1000);
            prevValue = temp;
        }
    }, tickRate)
}



(function() {
    var crashAt = getCrashValue();
    console.log('Crash Value: '+crashAt);

    var chart = document.getElementById('myChart');

    chart.width = window.innerWidth;
    chart.height = window.innerHeight;

    var ctx = chart.getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s', '12s', '13s', '14s', '15s'],
            datasets: [{
                label: 'Seconds before the crash',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    progressChart(myChart, crashAt);
})();