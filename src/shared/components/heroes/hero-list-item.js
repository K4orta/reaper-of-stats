import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	
	render() {
		let hero = this.props.hero;
		return (
			<li>
				<Link to={this._heroLink(hero.owner, hero.id)}>{hero.name}</Link>
			</li>
		);
	},
	_heroLink(owner, id) {
		return `/reaper/${owner}/${id}`;
	}
});