var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('../../../node_modules/jquery/dist/jquery.min.js');

var ControlsTimer = require('ControlsTimer');

describe('ControlsTimer', () => {
	it('should exist', () => {
		expect(ControlsTimer).toExist();
	});

	describe('render', () => {
		it('should render "Stop" when in started state', () => {
			var controlsTimer = TestUtils.renderIntoDocument(<ControlsTimer timerStatus="started"/>);
			var $el = $(ReactDOM.findDOMNode(controlsTimer));
			var $pauseButton = $el.find('button:contains(Stop)');
			
			expect($pauseButton.length).toBe(1); /* Length property is # of elements found. */
		});

		it('should render "Start" when in paused state', () => {
			var controlsTimer = TestUtils.renderIntoDocument(<ControlsTimer timerStatus="paused"/>);
			var $el = $(ReactDOM.findDOMNode(controlsTimer));
			var $startButton = $el.find('button:contains(Start)');
			
			expect($startButton.length).toBe(1); /* Length property is # of elements found. */
		});
	});

});	