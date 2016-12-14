var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('../../../node_modules/jquery/dist/jquery.min.js');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
	it('should exist', () => {
		expect(CountdownForm).toExist();
	});
	
	it('should call onSetCountdown if valid seconds entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));
		
		countdownForm.refs.seconds.value = '109';
		TestUtils.Simulate.submit($el.find('form')[0]); /* Pulling first DOM node from form. */
		
		expect(spy).toHaveBeenCalledWith(109);
	});
	
	it('should not call onSetCountdown if negative seconds entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));
		
		countdownForm.refs.seconds.value = '-30';
		TestUtils.Simulate.submit($el.find('form')[0]); /* Pulling first DOM node from form. */
		
		expect(spy).toNotHaveBeenCalled();
	});
	
	it('should not call onSetCountdown if string entered', () => {
		var spy = expect.createSpy();
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));
		
		countdownForm.refs.seconds.value = 'puppydog';
		TestUtils.Simulate.submit($el.find('form')[0]); /* Pulling first DOM node from form. */
		
		expect(spy).toNotHaveBeenCalled();
	});
});