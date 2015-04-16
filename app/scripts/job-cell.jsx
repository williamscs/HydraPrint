var JobCell = React.createClass({
		render: function() {
			this.props.progress = parseInt(this.props.progress, 10);
			return (
				<a href="#">
					<div className="col-sm-3 job-bg">
						<div className="job-border">
							<div className="title">{this.props.title}</div>
								{this.props.printer}
							<span className="subtext">76hrs 0min 37sec</span>
							<div className="progress animate">
								<span className="percentComplete">{this.props.progress}%</span>
								<span className="progressBar" style={{width: this.props.progress + '%'}}>
									<span></span>
								</span>
							</div>
						</div>
					</div>
				</a>
		);
	}
});

var JobContainer = React.createClass({
	render: function() {
						var nodes = this.props.jobs.map(function(job) {
							return (
								<JobCell title={job.title} printer={job.printer} progress={job.progress} />
							);
						});

		return (
			<div id="jobs">
				<div className="col-sm-3">
					<span className="new-job"></span>
					<img src="/plus.png" alt="MDN" />
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
