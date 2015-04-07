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
		'extruder1': {
			'type': 'temperature',
			'description': 'extruder temperature sensor',
			'temperature': 24
		},
		'extruder2': {
			'type': 'temperature',
			'description': 'extruder temperature sensor',
			'temperature': 30
		}
	},
	'materials': {}
};
// jshint undef: false

