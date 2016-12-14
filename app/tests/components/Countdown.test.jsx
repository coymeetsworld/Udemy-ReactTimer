var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('../../../node_modules/jquery/dist/jquery.min.js');

var Countdown = require('Countdown');

describe('Countdown', () => {
	
	it('should exist', () => {
		expect(Countdown).toExist();
	});

	
	describe('handleSetCountdown', () => {
		it('should set state to started and countdown', (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);	
			countdown.handleSetCountdown(10);
			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			/* setTimeout only gets called once. */	
			setTimeout(() => {
				expect(countdown.state.count).toBe(9);
				expect(countdown.state.countdownStatus).toBe('started');
				done(); /* Used when you expect an asynchronous test. */
			}, 1001);
		});
		it('should never set count less than 0', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);	
			countdown.handleSetCountdown(3);

			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				//expect(countdown.state.countdownStatus).toBe('stopped');
				done(); /* Used when you expect an asynchronous test. */
			}, 5001);
		
		});
	
/*
		it('', () => {
		
		});
*/
	});

});