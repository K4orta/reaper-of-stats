import React from 'react';
import moment from 'moment';

export default class HeroInfo extends React.Component {	
	constructor() {
		super();
		this.state = {
			hero: {
				name: '',
				'class': '',
				'last-updated': 0
			}
		};
	}
	componentWillReceiveProps(props) {
		this.setState({
			hero: props.heroes.find((h) => h.id == props.heroId)
		});
	}
	render() {
		return (
			<div>
				<h1>{this.state.hero.name}</h1>
				<h4>Class: {this.state.hero.class}</h4>
				<h4>Last Played: {this._parseTime(this.state.hero['last-updated'])}</h4>
			</div>
		);
	}
	_parseTime(unix) {
		return moment(unix * 1000).format('lll');
	}
};