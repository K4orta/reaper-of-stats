import React from 'react';
import FluxComponent from 'flummox/component';
import HeroInfo from '../heroes/hero-info';
import HeroStats from '../heroes/hero-stats';

export default class HeroView extends React.Component {
	componentDidMount() {
		let profileActions = this.props.flux.getActions('profile');
		profileActions.fetchProfile(this.props.params.battleTag);
		let heroActions = this.props.flux.getActions('hero');
		heroActions.fetchStats(this.props.params.id);
	}

	render() {
		return (
			<div className='content'>
				<FluxComponent connectToStores={'profile'}>
					<HeroInfo heroId={this.props.params.id} />
				</FluxComponent>
				<FluxComponent connectToStores={'hero'}>
					<HeroStats />
				</FluxComponent>
			</div>
		);
	}
};

HeroView.contextTypes = {
	router: React.PropTypes.func
};