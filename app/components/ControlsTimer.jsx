var React = require('react');

var ControlsTimer = React.createClass({
	propTypes: {
		timerStatus: React.PropTypes.string.isRequired,
		onStatusChange: React.PropTypes.func.isRequired
		
	},
	onStatusChange: function (newStatus) {
		/*Currying Pattern, using a function to generate a different function (factory). */	
		return () => {
			this.props.onStatusChange(newStatus);	
		}
	},
	render: function() {
		var {timerStatus} = this.props;
		
		var renderStartStopButton = () => {
			if (timerStatus === 'started') {
				return <button className="button primary" onClick={this.onStatusChange('paused')}>Stop</button>	
			} else {
				return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
			}	
		};
		
		return(
			<div className="controls">
				{renderStartStopButton()}
				<button className="button alert hollow" onClick={this.onStatusChange('cleared')}>Clear</button>
			</div>
		);
	}
});

module.exports = ControlsTimer;