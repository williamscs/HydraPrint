var React = require('react');

module.exports = React.createClass({
		render: function() {
			var progress = parseInt(this.props.progress, 10);
			return (
				<div className="progress animate">
					<span className="percentComplete">{this.props.progress}%</span>
					<span className="progressBar" style={{width: progress + '%'}}>
						<span></span>
					</span>
				</div>
		);
	}
});