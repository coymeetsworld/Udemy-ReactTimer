var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

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
				done(); /* Used when you expect an asynchronous test. */
			}, 5001);
		});
		
		it('should pause countdown on paused status', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('paused');
			
			setTimeout(() => {
				expect(countdown.state.count).toBe(3);
				expect(countdown.state.countdownStatus).toBe('paused');
				done(); /* Used when you expect an asynchronous test. */
			}, 1001);
		});

		it('should stop countdown on stopped status and reset count to 0', () => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('stopped');
			
			setTimeout(() => {
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.countdownStatus).toBe('stopped');
				done(); /* Used when you expect an asynchronous test. */
			}, 1001);
		});
	
/*
		it('', () => {
		
		});
*/
	});

});