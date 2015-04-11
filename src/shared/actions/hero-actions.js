import {Actions} from 'flummox';
import request from 'superagent';

let SERVER = 'http://192.241.219.68:8048/';

export default class HeroActions extends Actions {
	async fetchStats(id) {
		let resp = await fetch(`${SERVER}/stats/${id}`);
		return {
			stats: await resp.json()
		}
	}

	async fetchRecent() {
		let resp = await fetch(`${SERVER}/recent`);
		return {
			recent: await resp.json()
		}
	}
};