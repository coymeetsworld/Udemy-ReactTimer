var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('../../../node_modules/jquery/dist/jquery.min.js');

var Timer = require('Timer');

describe('Timer', () => {
	
	it('should exist', () => {
		expect(Timer).toExist();
	});

	
	describe('handleStart', () => {
		it('should set state to started and count up to 1', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);	
			timer.handleStart();
			expect(timer.state.count).toBe(0);
			expect(timer.state.timerStatus).toBe('started');

			setTimeout(() => {
				expect(timer.state.count).toBe(1);
				expect(timer.state.timerStatus).toBe('started');
				done();
			}, 1001);
		});

		it('should set state to started and count up to 5', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);	
			timer.handleStart();
			expect(timer.state.count).toBe(0);
			expect(timer.state.timerStatus).toBe('started');

			setTimeout(() => {
				expect(timer.state.count).toBe(5);
				expect(timer.state.timerStatus).toBe('started');
				done();
			}, 5001);
		});

	});

	describe('handlePause', () => {
		it('should set state to pause and count should be maintained', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);	
			timer.handleStart();
			setTimeout(() => {
				timer.handlePause();
				expect(timer.state.count).toBe(3);
				expect(timer.state.timerStatus).toBe('paused');
				done();
			}, 3001);
		});
		
		it('should resume count after a paused state goes to started', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);	
			timer.handleStart();
			setTimeout(() => {
				timer.handlePause();
				expect(timer.state.count).toBe(3);
				expect(timer.state.timerStatus).toBe('paused');
				done();
			}, 3001);
			
			setTimeout(() => {
				timer.handleStart();
				expect(timer.state.count).toBe(6);
				expect(timer.state.timerStatus).toBe('started');
				done();
			}, 3001);
		});
	});
		

	describe('handleClear', () => {
		it('should set state to clear and count should reset to 0', (done) => {
			var timer = TestUtils.renderIntoDocument(<Timer/>);	
			timer.handleStart();

			setTimeout(() => {
				timer.handleClear();
				expect(timer.state.count).toBe(0);
				expect(timer.state.timerStatus).toBe('stopped');
				done();
			}, 3001);
		});
	});
		
});
		