import React from 'react';
import FluxComponent from 'flummox/component';
import HeroInfo from '../heroes/hero-info';
import HeroStats from '../heroes/hero-stats';
import { State } from 'react-router';

export default React.createClass({
	mixins: [State],
	contextTypes: {
		flux: React.PropTypes.object.isRequired,
	},
	componentDidMount() {
		let profileActions = this.context.flux.getActions('profile');
		profileActions.fetchProfile(this.getParams().battleTag);
		let heroActions = this.context.flux.getActions('hero');
		heroActions.fetchStats(this.getParams().id);
	},
	render() {
		return (
			<div>
				<h1>Hero</h1>
				<FluxComponent connectToStores={'profile'}>
					<HeroInfo heroId={this.getParams().id} />
				</FluxComponent>
				<FluxComponent connectToStores={'hero'}>
					<HeroStats />
				</FluxComponent>
				<h4></h4>
			</div>
		);
	}
});