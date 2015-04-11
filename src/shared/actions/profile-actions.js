import {Actions} from 'flummox';
import request from 'superagent';

let SERVER = 'http://192.241.219.68:8048/';

export default class ProfileActions extends Actions {
	async fetchProfile(battleTag) {
		let resp = await fetch(`${SERVER}/heroes/${battleTag}`);
		return {
			battleTag: battleTag,
			heroes: await resp.json()
		}
	}
};