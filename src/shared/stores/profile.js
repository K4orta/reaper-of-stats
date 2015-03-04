import { Store } from 'flummox';

export default class ProfileStore extends Store {
	constructor(flux) {
		super();
		let actionIds = flux.getActionIds('profile');

		this.register(actionIds.fetchProfile, this.updateProfile);

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