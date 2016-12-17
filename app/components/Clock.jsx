var React = require('react');


var Clock = React.createClass({
	
	getDefaultProps: function() {
		return {
			totalSeconds: 0
		};
	},
	propTypes: {
		totalSeconds: React.PropTypes.number
	},
	
	formatSeconds: function(totalSeconds) {
		let minutes = Math.floor(totalSeconds/60);
		minutes = (minutes < 10) ? "0" + minutes : minutes;

		let seconds = totalSeconds%60;
		seconds = (seconds < 10) ? "0" + seconds : seconds;
		
		return minutes + ":" + seconds;
	},
	
	render: function() {
		var {totalSeconds} = this.props;
		return (
			<div className="clock">
				<span className="clock-text">
					{this.formatSeconds(totalSeconds)}	
				</span>			
			</div>
		);
	}
});

module.exports = Clock;