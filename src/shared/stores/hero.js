import { Store } from 'flummox';

export default class HeroStore extends Store {
	constructor(flux) {
		super();
		let actionIds = flux.getActionIds('hero');

		this.register(actionIds.fetchStats, this.updateStats);

		this.state = {
			stats: []
		};
	}

	updateStats(data) {
		this.setState(data);
	}

	get() {
		return this.state;
	}
};