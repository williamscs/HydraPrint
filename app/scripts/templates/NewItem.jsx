var React = require('react');

module.exports = React.createClass({
	render: function() {

		return (
			<div className="item-cell">
				<div className="new-cell">
					<img src="./images/plus.png" alt="MDN" />
					<br />
					<br />
					<span>Add new {this.props.itemType}</span>
				</div>
			</div>
		);
	}
});