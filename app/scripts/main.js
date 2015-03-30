var chartTool = {
	options: undefined,
	data: {
		labels: [],
		datasets: [
			{
				label: 'Extruder',
				fillColor: 'rgba(220,220,220,0.2)',
				strokeColor: 'rgba(220,220,220,1)',
				pointColor: 'rgba(220,220,220,1)',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(220,220,220,1)',
				data: []
			},
			{
				label: 'Bed',
				fillColor: 'rgba(151,187,205,0.2)',
				strokeColor: 'rgba(151,187,205,1)',
				pointColor: 'rgba(151,187,205,1)',
				pointStrokeColor: '#fff',
				pointHighlightFill: '#fff',
				pointHighlightStroke: 'rgba(151,187,205,1)',
				data: []
			}
		]
	},
	populateData: function(data) {
		//add current time to labels
		var date = new Date();
		this.data.labels.push(date.toTimeString());

		jQuery('#state').html(data.state);

		this.data.datasets[0].data.push(data.sensors.extruder.temperature);
		this.data.datasets[1].data.push(data.sensors.bed.temperature);
	},
	updateDisplay: function() { 
		// Get context with jQuery - using jQuery's .get() method.
		var ctx = $('#myChart').get(0).getContext('2d');
		// This will get the first returned node in the jQuery collection.
		var myNewChart = new Chart(ctx);
		myNewChart.Line(this.data);
	}

};

var args = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'smarch'],
	datasets: [
		{
			label: 'My Second dataset',
			fillColor: 'rgba(151,187,205,0.2)',
			strokeColor: 'rgba(151,187,205,1)',
			pointColor: 'rgba(151,187,205,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(151,187,205,1)',
			data: [28, 48, 40, 19, 86, 27, 90, 400]
		}
	]
};

var sampleJson = {
	'state': 'ready',
	'tools': {
		'bed': {
			'type': 'bed'
		},
		'extruder': {
			'type': 'extruder'
		}
	},
	'sensors': {
		'bed': {
			'type': 'temperature',
			'description': 'bed temperature sensor',
			'temperature': 40
		},
		'extruder': {
			'type': 'temperature',
			'description': 'extruder temperature sensor',
			'temperature': 24
		}
	},
	'materials': {}
};

chartTool.populateData(sampleJson);
chartTool.updateDisplay();
