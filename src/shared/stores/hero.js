import { Store } from 'flummox';

export default class HeroStore extends Store {
	constructor({heroActions}) {
		super();
		this.register(heroActions.fetchStats, this.updateStats);
		this.register(heroActions.fetchRecent, this.updateStats);

		this.state = {
			stats: [],
			recent: []
		};
	}

	updateStats(data) {
		console.log(data);
		this.setState(data);
	}

	get() {
		return this.state;
	}
};