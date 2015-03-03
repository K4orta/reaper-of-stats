'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div className='page-wrapper'>
				<nav>
					<ul>
						<li>Home</li>
						<li>Heroes</li>
					</ul>
				</nav>
				<RouteHandler />
			</div>
		);
	}
});