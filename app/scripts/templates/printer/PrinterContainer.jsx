var React = require('react');
var PrinterCell = require('./PrinterCell.jsx');
var NewItem = require('../NewItem.jsx');

module.exports = React.createClass({
	render: function() {
						var nodes = this.props.printers.map(function(printer) {
							return (
								<PrinterCell key={printer.id} printerName={printer.name} printerType={printer.type} />
							);
						});
		
		return (
			<div id="items">
				{nodes}
				<NewItem itemType="printer" />
			</div>
		);
	}
});