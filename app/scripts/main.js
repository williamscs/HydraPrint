
var chartTool = {
	options: {
		//animation: false
		animationSteps: 15
	},
	currHSL: 220,
	data: {
		labels: [],
		datasets: []
	},
	chart: undefined,
	generateDataset: function(label) {
		var newObj = {};
		var rgbString = this.hslToRgb(this.currHSL / 360, 0.8, 0.7);


		newObj.label = label;
		newObj.fillColor = 'rgba(' + rgbString + ', 0.2)';
		newObj.strokeColor = 'rgba(' + rgbString + ', 1)';
		newObj.pointColor = 'rgba(' + rgbString + ', 1)';
		newObj.pointHighlightStroke = 'rgba(' + rgbString + ', 1)';
		newObj.pointStrokeColor = '#fff';
		newObj.pointHighlightFill = '#fff';
		newObj.points = [];

		this.currHSL = this.genHSL(this.currHSL);
		return newObj;
	},
	checkDataExists: function(prop) {
		for (var i = 0; i < this.chart.datasets.length; i++) {
			if (prop === this.chart.datasets[i].label){
				return i;
			}
		}
		return -1;
	},
	populateData: function(data) {
		if (this.chart === undefined) {
			this.createDisplay();
			this.chart.datasets = [];
		} 
		//add current time to labels
		var date = new Date();
		var label = date.toLocaleTimeString();
		var temps = new Array(Object.keys(data.sensors).length);

		jQuery('#state').html(data.state);

		var tools = '';

		for (var key in data.sensors) {
			var properKey = this.toTitleCase(key);
			var pos = this.checkDataExists(properKey);
			if (pos === -1) {
				var obj = this.generateDataset(properKey);
				this.chart.datasets.push(obj);
				pos = this.chart.datasets.length - 1;
			}

			var temperature = data.sensors[key].temperature;
			if (temperature !== undefined) {
				temps[pos] = temperature;
			}
			tools += properKey + ', ';
		}

		this.chart.addData(temps, label);
		jQuery('#tools').html(tools.slice(0,-2));
	},
	createDisplay: function(){
		// Get context with jQuery - using jQuery's .get() method.
		var ctx = jQuery('#myChart').get(0).getContext('2d');
		// This will get the first returned node in the jQuery collection.
		var genericChart = new Chart(ctx);
		var obj = {
			labels: [], 
			datasets: [this.generateDataset('')]
		};
		this.chart = genericChart.Line(obj, this.options);
	},
	updateDisplay: function() {
		this.chart.update();
	},
	genHSL: function(currentHSL) {
		//137.5 is getting next golden ratio value
		return (currentHSL + 137.5) % 360;
	},
	/**
	 * http://stackoverflow.com/questions/2353211/hsl-to-rgb-color-conversion
	*/
	hslToRgb: function(h, s, l){
		var r, g, b;

		if(s === 0){
			r = g = b = l; // achromatic
		}else{
			var hue2rgb = function hue2rgb(p, q, t){
				if(t < 0){
					t += 1;
				}
				if(t > 1){
					t -= 1;
				}
				if(t < 1/6){
					return p + (q - p) * 6 * t;
				}
				if(t < 1/2){
					return q;
				}
				if(t < 2/3){
					return p + (q - p) * (2/3 - t) * 6;	
				}
				return p;
			};

			var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			var p = 2 * l - q;
			r = hue2rgb(p, q, h + 1/3);
			g = hue2rgb(p, q, h);
			b = hue2rgb(p, q, h - 1/3);
		}

	    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)].join(',');
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


chartTool.populateData(sampleJson);
chartTool.updateDisplay();
setInterval(function () {
	sampleJson.sensors.extruder2.temperature = Math.random() * (40-20) + 20;
	sampleJson.sensors.extruder1.temperature = Math.random() * (40-20) + 20;
	sampleJson.sensors.bed.temperature = Math.random() * (40-20) + 20;
    chartTool.populateData(sampleJson);
}, 5000);

