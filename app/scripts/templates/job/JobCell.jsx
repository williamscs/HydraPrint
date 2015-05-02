var React = require('react');
var ProgressBar = require('../ProgressBar.jsx');

module.exports = React.createClass({
		render: function() {
			this.props.progress = parseInt(this.props.progress, 10);
			return (
				<div className="job-cell">
					<div className="title">{this.props.title}</div>
					<a href="#">{this.props.printer}</a>
					<span className="subtext">76hrs 0min 37sec</span>
					<ProgressBar progress={this.props.progress} />
				</div>
		);
	}
});