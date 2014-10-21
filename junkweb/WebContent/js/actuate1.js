$(function() {
    var options = {
        "series" : [
                {
                    "unFormattedName" : "Series 1",
                    "dataNameType" : "text",
                    "dataLabels" : {
                        "formatter" : function() {
                            return ''
                                    + actuate.report.HTML5Chart.ClientChart
                                            .numberFormat(this.y, 0, 9, '.',
                                                    ',');
                        },
                        "enabled" : false
                    },
                    "events" : {
                        "legendItemClick" : function() {
                            return false;
                        }
                    },
                    "name" : "Series 1",
                    "data" : [ {
                        "y" : 3853922.49
                    }, {
                        "y" : 1121426.12
                    }, {
                        "y" : 954637.54
                    }, {
                        "y" : 663998.34
                    }, {
                        "y" : 188532.92
                    }, {
                        "y" : 1024113.57
                    }, {
                        "y" : 1797559.63
                    } ],
                    "type" : "column"
                },
                {
                    "unFormattedName" : "Series 2",
                    "dataNameType" : "text",
                    "dataLabels" : {
                        "formatter" : function() {
                            return ''
                                    + actuate.report.HTML5Chart.ClientChart
                                            .numberFormat(this.y, 0, 9, '.',
                                                    ',');
                        },
                        "enabled" : false
                    },
                    "events" : {
                        "legendItemClick" : function() {
                            return false;
                        }
                    },
                    "name" : "Series 2",
                    "data" : [ {
                        "y" : 3558200
                    }, {
                        "y" : 1277800
                    }, {
                        "y" : 1187200
                    }, {
                        "y" : 853200
                    }, {
                        "y" : 281800
                    }, {
                        "y" : 1100100
                    }, {
                        "y" : 2293300
                    } ],
                    "type" : "column"
                },
                {
                    "unFormattedName" : "Series 3",
                    "dataNameType" : "text",
                    "dataLabels" : {
                        "formatter" : function() {
                            return ''
                                    + actuate.report.HTML5Chart.ClientChart
                                            .numberFormat(this.y, 0, 9, '.',
                                                    ',');
                        },
                        "enabled" : false
                    },
                    "events" : {
                        "legendItemClick" : function() {
                            return false;
                        }
                    },
                    "name" : "Series 3",
                    "data" : [ {
                        "y" : 3853922.49
                    }, {
                        "y" : 1121426.12
                    }, {
                        "y" : 954637.54
                    }, {
                        "y" : 663998.34
                    }, {
                        "y" : 188532.92
                    }, {
                        "y" : 1024113.57
                    }, {
                        "y" : 1797559.63
                    } ],
                    "type" : "column"
                } ],
        "yAxis" : [ {
            "gridLineDashStyle" : "Solid",
            "title" : {
                "text" : ""
            },
            "minorGridLineWidth" : 0,
            "lineColor" : "#000",
            "tickColor" : "#c4c4c4",
            "gridLineColor" : "#c4c4c4",
            "labels" : {
                "formatter" : function() {
                    return actuate.report.HTML5Chart.ClientChart.numberFormat(
                            this.value, 0, 9, '.', ',');
                },
                "enabled" : true,
                "style" : {
                    "color" : "#000000",
                    "textAlign" : "left",
                    "fontFamily" : "Arial",
                    "fontSize" : "8pt"
                }
            },
            "lineWidth" : 1,
            "gridLineWidth" : 1,
            "tickWidth" : 1,
            "minorTickWidth" : 0
        } ],
        "title" : {
            "text" : "Testing",
            "style" : {
                "color" : "#000000",
                "textAlign" : "left",
                "fontFamily" : "Arial",
                "fontSize" : "1em"
            },
            "align" : "left",
            "y" : 1
        },
        "navigation" : {
            "buttonOptions" : {
                "enabled" : false
            }
        },
        "legend" : {
            "borderWidth" : 0,
            "itemHoverStyle" : {
                "cursor" : "default"
            },
            "itemStyle" : {
                "color" : "#000000",
                "textAlign" : "left",
                "fontFamily" : "sans-serif",
                "fontSize" : "10.0pt"
            },
            "align" : "right",
            "floating" : true,
            "itemWidth" : 0,
            "verticalAlign" : "top",
            "y" : -10,
            "x" : 0
        },
        "colors" : [ {
            "stops" : [ [ 0, "#43bda7" ], [ 1, "#007865" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 1,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#fada62" ], [ 1, "#ef7823" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 1,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#ef543c" ], [ 1, "#8d1e24" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 1,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#67c2ef" ], [ 1, "#1997d4" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 1,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#d8d8d8" ], [ 1, "#808080" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 0,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#c1d39a" ], [ 1, "#50632a" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 0,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#ff8633" ], [ 1, "#c44f00" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 0,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#43b3eb" ], [ 1, "#126c98" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 0,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#8d73a6" ], [ 1, "#402f51" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 0,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#a2a2a2" ], [ 1, "#525252" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 0,
                "x1" : 0
            }
        }, {
            "stops" : [ [ 0, "#c4abdb" ], [ 1, "#8f73a9" ] ],
            "linearGradient" : {
                "y1" : 0,
                "y2" : 1,
                "x2" : 0,
                "x1" : 0
            }
        } ],
        "credits" : {
            "enabled" : false
        },
        "chart" : {
            "events" : {
                "load" : function(e) {
                    this._bookmark = e.target.container.parentNode.parentNode.id;
                    try {
                        this._viewer = actuate.getViewer(this._bookmark);
                    } catch (e) {
                        this._viewer = actuate.getDAViewer(this._bookmark);
                    }
                }
            },
            "inverted" : true,
            "spacingLeft" : 13,
            "spacingBottom" : 13,
            "height" : 250,
            "renderTo" : "container27",
            "spacingRight" : 28,
            "borderWidth" : 0,
            "plotBorderWidth" : 1,
            "plotBorderColor" : "#ccc",
            "plotBackgroundColor" : {
                "stops" : [ [ 0, "#fff" ], [ 1, "#eee" ] ],
                "linearGradient" : [ 0, 0, 0, 250 ]
            },
            "spacingTop" : 20
        },
        "xAxis" : {
            "gridLineDashStyle" : "Solid",
            "gridLineColor" : "#c4c4c4",
            "tickColor" : "#c4c4c4",
            "labels" : {
                "enabled" : true,
                "style" : {
                    "color" : "#000000",
                    "textAlign" : "left",
                    "fontFamily" : "Arial",
                    "fontSize" : "8pt"
                }
            },
            "lineWidth" : 1,
            "tickWidth" : 1,
            "title" : {
                "text" : ""
            },
            "minorGridLineWidth" : 0,
            "lineColor" : "#000000",
            "categories" : [ "Classic Cars", "Motorcycles", "Planes", "Ships",
                    "Trains", "Trucks and Buses", "Vintage Cars" ],
            "gridLineWidth" : 1,
            "minorTickWidth" : 0
        },
        "tooltip" : {
            "enabled" : false
        }
    };
    var settings = {
        animation : true,
        callback : function(chart) {
            $(chart.container).click(function(e) {
                var bookmark = 'js3___bookmark_1';
                var viewer = actuate.getViewer(bookmark);
                if (viewer.isInteractive()) {
                    var h = viewer._ ? viewer._._helper : viewer._helper;
                    h.selectElement(bookmark);
                }
            })
        }
    };
    var clientChart = new actuate.report.HTML5Chart.ClientChart(options,
            settings);
    actuate.report.Chart['ClientChart' + clientChart.getCore()._bookmark] = clientChart;
});