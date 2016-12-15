var React = require('react');
var Clock = require('Clock');

var Timer = React.createClass({
	
	getInitialState: function() {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},
	
	render: function() {
		return (
			<div>
				<h1 className="page-title">Timer</h1>
				<Clock totalSeconds={count}/>
			</div>
		);
	}
});

module.exports = Timer;