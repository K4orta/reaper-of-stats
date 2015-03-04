'use strict';

import React from 'react';
import FluxComponent from 'flummox/component';
import {State} from 'react-router';
import HeroList from '../heroes/hero-list';

export default React.createClass({
	mixins: [State],
	contextTypes: {
		flux: React.PropTypes.object.isRequired,
	},
	componentDidMount() {
		let profileActions = this.context.flux.getActions('profile');
		profileActions.fetchProfile(this.getParams().battleTag);
	},
	render() { 
		return (
			<div>
				<h1>Heroes</h1>
				<h4>{this.getParams().battleTag}</h4>
				<FluxComponent connectToStores={'profile'}>
					<HeroList />
				</FluxComponent>
			</div>
		);
	}
});