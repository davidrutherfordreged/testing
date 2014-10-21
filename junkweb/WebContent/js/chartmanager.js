var CHART_COLORS = [                    
         //Green
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#43bda7"], [1, "#007865"]]},
         //Yellow
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#fada62"], [1, "#ef7823"]]},
         //Red
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#ef543c"], [1, "#8d1e24"]]},
         //Blue
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#67c2ef"], [1, "#1997d4"]]},
         //Grey
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#d8d8d8"], [1, "#808080"]]},
         //Light Green
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#c1d39a"], [1, "#50632a"]]},
         //Orange
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#ff8633"], [1, "#c44f00"]]},
         //Dark Blue
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#43b3eb"], [1, "#126c98"]]},
         //Purple
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#8d73a6"], [1, "#402f51"]]},
         //Dark Grey
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#a2a2a2"], [1, "#525252"]]},
         //Light Purple
         {linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1}, stops: [[0, "#c4abdb"], [1, "#8f73a9"]]}
];

Highcharts.setOptions({
    title: {text: ""},
    subtitle: {text: ""},
    colors: CHART_COLORS,
    xAxis: {
        labels: {
            formatter: function(){
                if (this.axis.options.type === "datetime")
                    return this.axis.defaultLabelFormatter.call(this);
                else if (this.value.length > 10)
                    return this.value.substr(0,10) + "...";
                else
                     return this.value;   
            }
        },
        dateTimeLabelFormats : {
            minute : "%e-%b-%Y",
            second : "%e-%b-%Y",
            month : "%b %Y",
            year : "%b %Y",
            day : "%e-%b-%Y",
            hour : "%e-%b-%Y",
            week : "%e-%b-%Y"
        },

    },
    yAxis: {
        title: {text: null}
    },
    legend: {
        labelFormatter: function() {
            if (this.name.length > 25){
                return this.name.substr(0,25) + "...";
            }else{
                 return this.name;   
            }                        
            
        }
    },
    credits: {enabled:false}
    
});

function ChartManager(containerId, options)
{
    this.containerId = containerId;
    this.options = options;
    this.init();
    jQuery(containerId).highcharts(this.options);
    this.chart = jQuery(containerId).highcharts();
}

ChartManager.prototype = {
    init: function() {
        var rotationValue = 0;
        if (this.getChartSeriesType() !== 'bar' && ((this.options.xAxis !== undefined && this.options.xAxis.categories !== undefined && this.options.xAxis.categories.length > 5) || 
                (this.options.series !== undefined && this.options.series[0].data !== undefined && this.options.series[0].data.length > 5))) {
            rotationValue = -45;
        }
        if (this.options.xAxis !== undefined) {
            if (this.options.xAxis.labels !== undefined)
                this.options.xAxis.labels.rotation = rotationValue;
            else
                this.options.xAxis.labels = {rotation: rotationValue};
        } else {
            this.options.xAxis = {labels: {rotation: rotationValue}};            
        }

        if (this.getChartSeriesType() !== 'pie' && this.options.series !== undefined && this.options.series.length == 1) {
            var colorCount = CHART_COLORS.length;
            if (this.options.series[0].data !== undefined)
                this.options.series[0].data.forEach(function(el, idx, array){
                    if (el.color === undefined)
                        el.color = CHART_COLORS[idx%colorCount];
                });
            
        }        
    },

    changeType: function(newType, stacked) {
        if (stacked === undefined)
            stacked = null;
        if (newType == 'bar' || newType == 'column') {
            this.options.plotOptions.series.stacking = stacked;
        } else if (newType == 'pie') {
            this.options.plotOptions.series.stacking = null;
            this.options.plotOptions.pie = {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                };
            this.options.legend.enabled = true;
            theType = 'pie';
        } else  {
            this.options.plotOptions.series.stacking = null;
        }
        /*Uses new recommended highcharts API series.update() method for changing series types directly, but doesn't seem to work
         * for switching to horizontal bar chart type so we're falling back to original method of recreating the chart entirely
         */
        /*jQuery.each(this.chart.series,
                function(index, element) {
                     console.log('el'+index, element);
                     this.chart.series[index].update({type: theType
                     });
         });*/
        /*Uses new recommended highcharts API series.update() method for changing series types directly, but doesn't seem to work
         * for switching to horizontal bar chart type so we're falling back to original method of recreating the chart entirely
         */
        this.options.chart.defaultSeriesType = newType;
        this.init();
        jQuery(this.containerId).highcharts(this.options);
        this.chart = jQuery(this.containerId).highcharts();        
    },
    
    toggleLegend: function(show) {
        //if (this.options.series.length > 1 || this.options.chart.defaultSeriesType === 'pie' || this.options.series[0].type === 'pie') {
        
            if (this.options.legend === undefined) {
                if (show == true)
                    this.options.legend = {enabled: show};
            } else if (this.options.legend.enabled === undefined) {
                if (show == true)
                    this.options.legend.enabled = show;
            } else 
                this.options.legend.enabled = show;
            jQuery(this.containerId).highcharts(this.options);
            this.chart = jQuery(this.containerId).highcharts();
        //}
        
    },
    
    getChartSeriesType: function() {        
        var seriesType;
        if (this.options.chart !== undefined)
            seriesType = this.options.chart.defaultSeriesType;
        if (this.options.series !== undefined && this.options.series.length > 0) {
            this.options.series.forEach(function(el, idx, array){
                if (el.type !== undefined)
                    if (idx == 0) {
                        if (el.type !== seriesType)
                            seriesType = el.type;
                    } else {
                        if (el.type !== seriesType)
                            seriesType = 'mixed';                        
                    }
                    
                
            });
        }
        return seriesType;
    },

    
    addColumnSeries: function(seriesId, label, selectedIndex, data, rowCount) {    
        //console.log("add/remove-enter: " + seriesId + " : " + label + " : " + this.currType + " : " + this.chartMax);
        //console.log(data);
        if (selectedIndex == -2) {
            this.chart.get(seriesId).remove();
            var localMax = 0;
            var series = this.chart.series;
            for(var i = 0; i < series.length; i++) {
                for(var j = 0; j < series[i].data.length; j++) {
                    if (parseInt(series[i].data[j].y) > parseInt(localMax))
                        localMax = series[i].data[j].y;                        
                }
            }
            // reset chartmax no matter what it is since previous val could be from removed series
            this.chartMax = localMax;
            //this.chart.yAxis[0].setExtremes(0, this.chartMax);
            var count = this.seriesArray.length;
            for (var i=0; i<count; i++) {
                if (this.seriesArray[i].id == seriesId)
                    this.seriesArray.remove(i);
                    count = count - 1;
            }
        } else {        
            var dataArray = new Array();
            var rowcount = data.length;
            if (rowcount > rowCount)
                rowcount = rowCount;
            
            if (selectedIndex == "-1") {
                for (i=0; i<rowcount; i++) {
                    dataArray[i] = data[i][seriesId];              
                }                
                this.chart.xAxis[0].setCategories(dataArray);
                if (this.currType == 'pie' || this.currType == 'donut') {
                    this.changeType(this.currType, this.containerId);
                }
                this.xAxisSeries = seriesId;
            } else {
                var catArray = this.chart.xAxis[0].categories;
                var localMax = 0;
                dataArray = this.createDataArray(this.currType, rowcount, data, seriesId, catArray);
                for (i=0; i<rowcount; i++) {
                    if (parseInt(dataArray[i].y) > localMax)
                        localMax = dataArray[i].y; 
                }
                if (this.currType != 'stackedBar' && this.currType != 'stackedColumn') {
                    if (localMax > this.chartMax)
                        this.chartMax = localMax;                
                } else {                
                    this.chartMax = parseInt(this.chartMax) + parseInt(localMax);
                }

                // uncomment to control min & max values displayed on the chart's y-axis
                //this.chart.yAxis[0].setExtremes(0, this.chartMax);
                this.seriesArray.push({id: seriesId, name: label});
                if (this.currType == 'stackedBar')
                    theType = 'bar';
                else if (this.currType == 'stackedColumn')
                    theType = 'column';
                else 
                    theType = this.currType;
    
                if ((this.currType == 'pie' || this.currType == 'donut') && this.seriesArray.length > 1)
                    this.chart.addSeries({type: theType, id: seriesId, name: label, data: dataArray, size: 200-50*(this.seriesArray.length-1)}, true, false);
                else {
                    this.chart.addSeries({/*type: theType, */id: seriesId, name: label, data: dataArray, color: CHART_COLORS[this.seriesArray.length-1], borderColor: CHART_COLORS[this.seriesArray.length-1], legendIndex: selectedIndex+1}, true, false);
                }
            }
        }
    
    },

    updateSeries: function(seriesId, data) {    
        //console.log("add/remove-enter: " + seriesId + " : " + label + " : " + this.currType + " : " + this.chartMax);
        //console.log(data);
        var dataArray = new Array();
        
        var catArray = this.chart.xAxis[0].categories;
        dataArray = this.createDataArray(this.currType, data.length, data, seriesId, catArray);
        console.log(this.chart.series[0].data);
        console.log('test', seriesId, dataArray);
        this.chart.series[0].update({
            data: dataArray
        }, true); //true / false to redraw
        console.log(this.chart.series[0].data);
    
    },
    
    createDataArray: function(currType, rowcount, data, seriesId, catArray) {
    	var dataArray = new Array();
	    for (i=0; i<rowcount; i++) {                	
	        if (currType != 'pie' && currType != 'donut')
	            if (seriesId !== undefined && seriesId != '')
	                dataArray[i] = {y: parseFloat(data[i][seriesId])};
	            else
	                dataArray[i] = {y: parseFloat(data[i])};
	        else 
                if (seriesId !== undefined && seriesId != '')
                    dataArray[i] = {name: catArray[i], y: parseInt(data[i][seriesId]), color: CHART_COLORS[i%CHART_COLORS.length]};
                else
                    dataArray[i] = {name: catArray[i], y: parseInt(data[i]), color: CHART_COLORS[i%CHART_COLORS.length]};

	    }
	    return dataArray;
    },
    
    printSeries: function() {
        var series = this.chart.series;
        //for(var i=0;i<series.length;i++)
        //{
            //console.log("series["+i+"]: ");
            //console.log(series[i]);
        //}
    
    },
    
    formatTooltip: function() {
        var point = this,
        series = point.series;
        return '<span style="font-size: 10px">' +
                (point.x || point.point.name) +
                '</span><br/><span style="color:'+ series.color +'">' + (point.name || series.name) + '</span>: <b>' + point.y + '</b>';
    },
    
    showGridLines: function(type, show) {
        this.chart.redraw();
        if (this.chart.inverted) {
            if (type == 'vertical')
                this.showYAxisGridLines(show);
            else
                this.showXAxisGridLines(show);
        } else {
            if (type == 'vertical')
                this.showXAxisGridLines(show);
            else
                this.showYAxisGridLines(show);            
        }
        this.changeType(this.currType, this.containerId);
    },
    
    showXAxisGridLines: function(show) {
        if (show)
            this.xGridLineWidth = 1;
        else
            this.xGridLineWidth = 0;
    },
    
    showYAxisGridLines: function(show) {
        if (show)
            this.yGridLineWidth = 1;
        else
            this.yGridLineWidth = 0;
    },
    
    setTitle: function(title, type) {
        if (type == 'xaxis')
            this.xTitle = title;
        else if (type == 'yaxis')
            this.yTitle = title;
        else
            this.chartTitle = title;
       
        //this.changeType(this.currType, this.containerId);
    }
    
    

};

