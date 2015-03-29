var chartTool = {
	options: undefined,
	data: {},
	populateData: function(data) {
		this.data = {
						labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
						datasets: [
							{
								label: 'My Second dataset',
								fillColor: 'rgba(151,187,205,0.2)',
								strokeColor: 'rgba(151,187,205,1)',
								pointColor: 'rgba(151,187,205,1)',
								pointStrokeColor: '#fff',
								pointHighlightFill: '#fff',
								pointHighlightStroke: 'rgba(151,187,205,1)',
								data: [28, 48, 40, 19, 86, 27, 90]
							}
						]
					};
	},
	updateDisplay: function() { 
		// Get context with jQuery - using jQuery's .get() method.
		var ctx = $('#myChart').get(0).getContext('2d');
		// This will get the first returned node in the jQuery collection.
		var myNewChart = new Chart(ctx);
		var myLineChart = myNewChart.Line(this.data);
	}

};

chartTool.populateData();
chartTool.updateDisplay();
