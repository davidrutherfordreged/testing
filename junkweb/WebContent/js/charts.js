var chart = new Highcharts.Chart(
		{
			chart : {
				renderTo : 'w11-bargraph1',
				defaultSeriesType : 'bar',
				borderWidth : 0,
				plotBorderWidth : 1,
				plotBorderColor : '#ccc',
				spacingTop : 20,
				plotBackgroundColor : {
					linearGradient : [ 0, 0, 0, 250 ],
					stops : [ [ 0, '#fff' ], [ 1, '#eee' ] ]
				},
				height : 250
			},
			credits : {
				enabled : false
			},
			title : {
				text : " ",
				align : 'left',
				style : {
					fontSize : '1em',
					color : '#000000',
					fontFamily : 'Arial'
				}
			},
			xAxis : {
				categories : [ 'Bankruptcy', ' CRIMINAL', ' Civil Judgment',
						' Customer Complaint', ' Internal Review',
						' Judgement', ' Regulatory Action', ' Termination' ],
				labels : {
					style : {
						color : '#000000',
						fontSize : '8pt',
						fontFamily : 'Arial'
					}
				},
				title : {
					text : '',
					style : {
						color : '#000000',
						fontFamily : 'Arial',
						fontSize : '8pt'
					}
				}
			},
			yAxis : {
				title : {
					text : '# Disclosures',
					style : {
						color : '#000000',
						fontFamily : 'Arial',
						fontSize : '8pt'
					}
				},
				labels : {
					style : {
						color : '#000000',
						fontFamily : 'Arial',
						fontSize : '8pt'
					}
				},
				lineColor : "#000",
				lineWidth : 1
			},
			legend : {
				layout : 'horizontal',
				floating : true,
				// backgroundColor: '#FFFFFF',
				borderWidth : 0,
				align : 'right',
				verticalAlign : 'top',
				y : 0,
				x : 0,
			},
			tooltip : {
				formatter : function() {
					return '<b>' + this.series.name + '<\/b><br/>' + this.x
							+ ': ' + this.y;
				}
			},
			plotOptions : {
				/* bar: {groupPadding: 1} */
				series : {
					stacking : '',
					pointWidth : 10
				}
			},
			series : [ {
				name : '2010',
				data : [ 6.0, 0.0, 1.0, 2.0, 1.0, 4.0, 2.0, 1.0 ],
				color : {
					linearGradient : {
						x1 : 0,
						y1 : 0,
						x2 : 0,
						y2 : 1
					},
					stops : [ [ 0, '#43bda7' ], [ 1, '#007865' ] ]
				},
				borderWidth : 1,
				borderColor : '#7f7f7f',
				shadow : false,
				dataLabels : {
					enabled : true,
					/* rotation: -90, */
					color : '#000000',
					align : 'center',
					/* x: 10, */
					/* y: 10, */
					formatter : function() {
						return this.y;
					},
					style : {
						fontSize : '8px',
						align : 'center',
						fontFamily : 'Arial'
					}
				},
				point : {
					events : {
						click : function(e) {
							location.href = "/dashboard/portlets/disclosureDetail.jsp?groupId=232943&reportType=disclosureDetail";
						}
					}
				}
			} ]
		});