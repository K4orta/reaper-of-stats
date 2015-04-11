import React from 'react';
import RecentItem from './recent-list-item';

class RecentList extends React.Component {
	contextTypes: {
		flux: React.PropTypes.object.isRequired
	}
	render() {
		let recent = this.props.recent.map((h, i)=> {
			return <RecentItem heroData={h} key={i} />
		});
		return (
			<ul className='recent-updates' >
				{recent}
			</ul>
		)
	}
	componentDidMount() {
		let heroActions = this.props.flux.getActions('hero');
		heroActions.fetchRecent();
	}
} 

export default RecentList;