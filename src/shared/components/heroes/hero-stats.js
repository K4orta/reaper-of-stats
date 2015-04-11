import React from 'react';
import StatGraph from './stat-graph';

export default React.createClass({	
	getInitialProps() {
		return {
			stats: []
		};
	},
	render() {
		return (
			<div>
				<StatGraph data={this.props.stats} />
			</div>
		);
	}
});