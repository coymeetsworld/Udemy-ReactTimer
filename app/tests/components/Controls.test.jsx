var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
	it('should exist', () => {
		expect(Controls).toExist();
	});

	describe('render', () => {
		it('should render "Pause" when in started state', () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pauseButton = $el.find('button:contains(Pause)');
			
			expect($pauseButton.length).toBe(1); /* Length property is # of elements found. */
		});

		it('should render "Start" when in paused state', () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $startButton = $el.find('button:contains(Start)');
			
			expect($startButton.length).toBe(1); /* Length property is # of elements found. */
		});
	});

});	