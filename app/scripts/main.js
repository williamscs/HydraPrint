
var chartTool = {
	options: {
		animation: false
	},
	currHSL: 220,
	data: {
		labels: [],
		datasets: []
	},
	generateDataset: function(label) {
		var newObj = {};

		newObj.label = label;
		newObj.fillColor = 'hsl(' + this.currHSL + ', 30%, 90%)';
		newObj.strokeColor = 'hsl(' + this.currHSL + ', 80%, 50%)';
		newObj.pointColor = 'hsl(' + this.currHSL + ', 80%, 50%)';
		newObj.pointHighlightStroke = 'hsl(' + this.currHSL + ', 80%, 50%)';
		newObj.pointStrokeColor = '#fff';
		newObj.pointHighlightFill = '#fff';
		newObj.data = [];
		console.log(JSON.stringify(newObj));

		this.currHSL = this.genHSL(this.currHSL);
		return newObj;
	},
	checkDataExists: function(prop) {
		for (var i = 0; i < this.data.datasets.length; i++) {
			if (prop === this.data.datasets[i].label){
				return i;
			}
		}
		return -1;
	},
	populateData: function(data) {
		//add current time to labels
		var date = new Date();
		this.data.labels.push(date.toTimeString());

		jQuery('#state').html(data.state);

		var tools = '';

		for (var key in data.sensors) {
			var properKey = this.toTitleCase(key);
			var pos = this.checkDataExists(properKey);
			if (pos === -1) {
				var obj = this.generateDataset(properKey);
				this.data.datasets.push(obj);
				pos = this.data.datasets.length - 1;
			}

			var temperature = data.sensors[key].temperature;
			if (temperature !== undefined) {
				this.data.datasets[pos].data.push(temperature);
			}
			tools += properKey + ', ';
		}

		jQuery('#tools').html(tools.slice(0,-2));
	},
	updateDisplay: function() { 
		// Get context with jQuery - using jQuery's .get() method.
		var ctx = $('#myChart').get(0).getContext('2d');
		// This will get the first returned node in the jQuery collection.
		var myNewChart = new Chart(ctx);
		myNewChart.Line(this.data, this.options);
	},
	genHSL: function(currentHSL) {
		//137.5
		return (currentHSL + 137.5) % 360;
	},
	toTitleCase: function(str) {
		return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); //from stackoverflow
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
var sampleJson2 = {
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
			'temperature': 30
		},
		'extruder': {
			'type': 'temperature',
			'description': 'extruder temperature sensor',
			'temperature': 60
		}
	},
	'materials': {}
};

chartTool.populateData(sampleJson);
chartTool.updateDisplay();
setTimeout(function () {
    chartTool.populateData(sampleJson2);
	chartTool.updateDisplay();
}, 5000);
