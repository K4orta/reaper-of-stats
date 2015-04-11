import { Store } from 'flummox';

export default class ProfileStore extends Store {
	constructor({ profileActions }) {
		super();
		// let actionIds = flux.getActionIds('profile');

		this.register(profileActions.fetchProfile, this.updateProfile);

		this.state = {
			battleTag: '',
			heroes: []
		};
	}

	updateProfile(data) {
		this.setState(data);
	}

	get() {
		return this.state;
	}

}