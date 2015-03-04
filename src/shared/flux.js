import { Flummox } from 'flummox';

import ProfileActions from './actions/profile-actions';
import ProfileStore from './stores/profile';
import HeroActions from './actions/hero-actions';
import HeroStore from './stores/hero';

export default class Flux extends Flummox {
	constructor() {
		super();

		this.createActions('profile', ProfileActions);
		this.createStore('profile', ProfileStore, this);
		this.createActions('hero', HeroActions);
		this.createStore('hero', HeroStore, this);
	}
};