'use strict';

import React from 'react';
import FluxComponent from 'flummox/component';
import HeroList from '../heroes/hero-list';

export default React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	componentDidMount() {
		let profileActions = this.context.flux.getActions('profile');
		profileActions.fetchProfile(this.context.router.getCurrentParams().battleTag);
	},
	render() { 
		return (
			<div>
				<h1>Heroes</h1>
				<h4>{this.context.router.getCurrentParams().battleTag}</h4>
				<FluxComponent connectToStores={'profile'}>
					<HeroList />
				</FluxComponent>
			</div>
		);
	}
});