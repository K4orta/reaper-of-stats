import React from 'react';
import {Link} from 'react-router';

class RecentHeroItem extends React.Component {
	render() {
		return (
			<li className='recent-list__item'>
				<Link to={this._heroLink(this.props.heroData)}>{this.props.heroData.name}</Link>
			</li>
		);
	}
	_heroLink({owner, id}) {
		return `/reaper/${owner}/${id}`
	}
}

export default RecentHeroItem