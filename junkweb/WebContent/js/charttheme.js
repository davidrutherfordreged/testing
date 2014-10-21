colors = [
         // Green
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#43bda7"], [1, "#007865"]]},
         // Yellow
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#fada62"], [1, "#ef7823"]]},
         // Red
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#ef543c"], [1, "#8d1e24"]]},
         // Blue
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#67c2ef"], [1, "#1997d4"]]},
         // Grey
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#d8d8d8"], [1, "#808080"]]},
         // Light Green
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#c1d39a"], [1, "#50632a"]]},
         // Orange
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#ff8633"], [1, "#c44f00"]]},
         // Dark Blue
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#43b3eb"], [1, "#126c98"]]},
         // Purple
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#8d73a6"], [1, "#402f51"]]},
         // Dark Grey
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#a2a2a2"], [1, "#525252"]]},
         // Light Purple
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#c4abdb"], [1, "#8f73a9"]]}],
chart: {
		borderWidth: 0,
		plotBorderWidth: 1,
		plotBorderColor: '#ccc',
		spacingTop: 20,
		plotBackgroundColor: {
			linearGradient: [0, 0, 0, 250],
		    stops: [
		           [0, '#fff'],
		           [1, '#eee']
		       ]
		},
		height: 250
},
title: {text: " t", align: 'left', style: {fontSize: '1em', color: '#000000', fontFamily: 'Arial'}},
xAxis: {labels: {style: {color: '#000000', fontSize: '8pt', fontFamily: 'Arial'}}},
yAxis: {labels: {style: {color: '#000000', fontFamily: 'Arial', fontSize: '8pt'}}, lineColor: "#000", lineWidth: 1},
legend: {
    layout: 'horizontal',
    floating: true,
    // backgroundColor: '#FFFFFF',
    borderWidth: 0,
    align: 'right',
    verticalAlign: 'top',
    y: -10,
    x: 0  
},
plotOptions: {
    series: {stacking: 'normal', pointWidth: 20}
},
tooltip: {
        enabled: false                    
    }
    


