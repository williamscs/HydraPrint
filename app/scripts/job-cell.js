var JobCell = React.createClass({displayName: "JobCell",
		render: function() {
			this.props.progress = parseInt(this.props.progress, 10);
			return (
				React.createElement("a", {href: "#"}, 
					React.createElement("div", {className: "col-sm-3 job-bg"}, 
						React.createElement("div", {className: "job-border"}, 
							React.createElement("div", {className: "title"}, this.props.title), 
								this.props.printer, 
							React.createElement("span", {className: "subtext"}, "76hrs 0min 37sec"), 
							React.createElement("div", {className: "progress animate"}, 
								React.createElement("span", {className: "percentComplete"}, this.props.progress, "%"), 
								React.createElement("span", {className: "progressBar", style: {width: this.props.progress + '%'}}, 
									React.createElement("span", null)
								)
							)
						)
					)
				)
		);
	}
});

var JobContainer = React.createClass({displayName: "JobContainer",
	render: function() {
						var nodes = this.props.jobs.map(function(job) {
							return (
								React.createElement(JobCell, {title: job.title, printer: job.printer, progress: job.progress})
							);
						});

		return (
			React.createElement("div", {id: "jobs"}, 
				React.createElement("div", {className: "col-sm-3"}, 
					React.createElement("span", {className: "new-job"}), 
					React.createElement("img", {src: "/plus.png", alt: "MDN"})
				), 
				nodes
			)
		);
	}
});

var data = [];

for (var i = 0; i < 20; i++) {
	// var div = layoutManager.createJobCell('Job', 'Printer', 273637, Math.random() * 100);
	data.push({title: "Job", printer: "Printer", progress: (Math.random()*100)})
}

React.render(
		React.createElement(JobContainer, {jobs: data}),
		document.getElementById('main-content')
);
