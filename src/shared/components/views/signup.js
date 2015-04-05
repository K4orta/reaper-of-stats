'use strict';

import React from 'react';
import { Navigation } from 'react-router'

export default React.createClass({
	mixins: [ Navigation ],
	render() {
		return (
			<div className='landing-page'>
				<section className='signup-form'>
					<h1 className='signup-form__title'>Sign up for FitPit</h1>
					<input ref='input' className='signup-form__input' type='text' placeholder='Enter your BattleTag'/>
					<button className='signup-form__button' onClick={this._go}>Get started</button>
				</section>
			</div>
		);
	},
	_go(e) {
		let bt = this.refs.input.getDOMNode().value;
		bt = bt.replace('#', '-').toLowerCase();
		this.transitionTo('heroes', {battleTag: bt});
	}
});