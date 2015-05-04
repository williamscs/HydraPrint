var React = require('react');
var JobCell = require('./JobCell.jsx');
var NewItem = require('../NewItem.jsx');

module.exports = React.createClass({
	render: function() {
						var nodes = this.props.jobs.map(function(job) {
							return (
								<JobCell key={job.id} title={job.title} printer={job.printer} progress={job.progress} />
							);
						});
		
		return (
			<div id="items">
				{nodes}
				<NewItem itemType="job" />
				<div className="contentEndText"><a href="#">View previous jobs</a></div>
			</div>
		);
	}
});