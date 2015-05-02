var React = require('react');
var JobCell = require('./JobCell.jsx');

var JobContainer = React.createClass({
	render: function() {
						var nodes = this.props.jobs.map(function(job) {
							return (
								<JobCell title={job.title} printer={job.printer} progress={job.progress} />
							);
						});
		
		return (
			<div id="jobs">
				<div className="job-cell">
					<span className="new-job"></span>
					<img src="./images/plus.png" alt="MDN" />
				</div>
				{nodes}
				<div className="contentEndText"><a href="#">View previous jobs</a></div>
			</div>
		);
	}
});



var data = [];

for (var i = 0; i < 20; i++) {
	// var div = layoutManager.createJobCell('Job', 'Printer', 273637, Math.random() * 100);
	data.push({title: "Job", printer: "Printer", progress: (Math.random()*100)})
}

React.render(
		<JobContainer jobs={data} />,
		document.getElementById('main-content')
);