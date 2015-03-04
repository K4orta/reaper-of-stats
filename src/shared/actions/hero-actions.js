import {Actions} from 'flummox';
import request from 'superagent';

let SERVER = 'http://192.241.219.68:8048/';

export default class HeroActions extends Actions {
	async fetchStats(id) {
		let resp = await request
			.get(`${SERVER}/stats/${id}`)
			.exec();
		return {
			stats: resp.body
		}
	}
};