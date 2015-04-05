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
				Entries: {this.props.stats.length}
				<StatGraph data={this.props.stats} />
			</div>
		);
	}
});