import React from 'react';

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
			</div>
		);
	}
});