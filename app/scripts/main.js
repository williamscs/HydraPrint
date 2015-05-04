// var args = {
// 	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'smarch'],
// 	datasets: [
// 		{
// 			label: 'My Second dataset',
// 			fillColor: 'rgba(151,187,205,0.2)',
// 			strokeColor: 'rgba(151,187,205,1)',
// 			pointColor: 'rgba(151,187,205,1)',
// 			pointStrokeColor: '#fff',
// 			pointHighlightFill: '#fff',
// 			pointHighlightStroke: 'rgba(151,187,205,1)',
// 			data: [28, 48, 40, 19, 86, 27, 90, 400]
// 		}
// 	]
// 

// var sampleJson = {
// 	'state': 'ready',
// 	'tools': {
// 		'bed': {
// 			'type': 'bed'
// 		},
// 		'extruder': {
// 			'type': 'extruder'
// 		}
// 	},
// 	'sensors': {
// 		'bed': {
// 			'type': 'temperature',
// 			'description': 'bed temperature sensor',
// 			'temperature': 40
// 		},
// 		'extruder1': {
// 			'type': 'temperature',
// 			'description': 'extruder temperature sensor',
// 			'temperature': 24
// 		},
// 		'extruder2': {
// 			'type': 'temperature',
// 			'description': 'extruder temperature sensor',
// 			'temperature': 30
// 		}
// 	},
// 	'materials': {}
// };
// jshint undef: false
var $ = require('jquery');

$( document ).ready(function() {
	var React = require('react');
	var JobContainer = require('./templates/job/JobContainer.jsx');
	var PrinterContainer = require('./templates/printer/PrinterContainer.jsx');
	MainLibrary.prototype.generateJobCells = function() {
			var data = [];

			for (var i = 0; i < 6; i++) {
				// var div = layoutManager.createJobCell('Job', 'Printer', 273637, Math.random() * 100);
				data.push({title: "Job", printer: "Printer", progress: (Math.random()*100)})
			}

			React.render(
					React.createElement(JobContainer, {jobs: data}),
					document.getElementById('main-content')
			);
		
	};

	MainLibrary.prototype.generatePrinterCells = function() {
			var data = [];
			var printerInt;
			for (var i = 0; i < 3; i++) {
				printerInt = Math.floor(Math.random() * 2) + 1;
				// var div = layoutManager.createJobCell('Job', 'Printer', 273637, Math.random() * 100);
				data.push({title: "Job", name: "Printer Name", type: printerInt})
			}

			React.render(
					React.createElement(PrinterContainer, {printers: data}),
					document.getElementById('main-content')
			);
		
	};


	module.exports = MainLibrary;

	var hamburger = $('#hamburger-icon');
	var navigation = $('#navigation');
	hamburger.click(function() {
		 hamburger.toggleClass('active');
		 navigation.toggleClass('menu');
		 return false;
	});

	$('body').click(function(e) {
		if ($(e.target).closest('#navigation').length === 0) {
				hamburger.removeClass('active');
				navigation.removeClass('menu');
		}
});
});

