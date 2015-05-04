var React = require('react');

module.exports = React.createClass({
		render: function() {
			var type = (this.props.printerType === 1) ? "printer1" : "printer2";
			return (
				<div className="item-cell">
					<img className="printer-image" src={"./images/" + type + ".jpg"}>
						<br />
						<span className="printer-name">{this.props.printerName}</span>
					</img>
				</div>
		);
	}
});