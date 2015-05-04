var React = require('react');

module.exports = React.createClass({
		render: function() {
			var ml = new MainLibrary();
			//we'll do this better in the future
			var type = (this.props.printerType === 1) ? ml.getPrinter1() : ml.getPrinter2();
			return (
				<div className="item-cell">
					<img className="printer-image" src={type}>
						<br />
						<span className="printer-name">{this.props.printerName}</span>
					</img>
				</div>
		);
	}
});