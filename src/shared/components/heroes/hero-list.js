import React from 'react';
import HeroItem from './hero-list-item';
import { sortBy } from 'lodash';

export default React.createClass({
	getDefaultProps() {
		return {
			heroes: []
		};
	},
	render() {
		let sortedHeroes = sortBy(this.props.heroes, (h) => -h['last-updated']);
		let heroes = sortedHeroes.map((hero) => {
			return <HeroItem key={hero.id} hero={hero} />;
		});

		return (
			<ul className='hero-list'>
				{heroes}
			</ul>
		);
	}
});