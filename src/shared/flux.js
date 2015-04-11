import { Flummox } from 'flummox';

import ProfileActions from './actions/profile-actions';
import ProfileStore from './stores/profile';
import HeroActions from './actions/hero-actions';
import HeroStore from './stores/hero';

export default class Flux extends Flummox {
	constructor() {
		super();

		const profileActions = this.createActions('profile', ProfileActions);
		this.createStore('profile', ProfileStore, {profileActions});
		const heroActions = this.createActions('hero', HeroActions);
		this.createStore('hero', HeroStore, {heroActions});
	}
};