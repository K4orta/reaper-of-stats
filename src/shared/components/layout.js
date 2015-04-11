'use strict';

import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div className='page-wrapper'>
				<nav className='primary-nav'>
					<ul>
						<li>
							<Link to='/reaper'>
								fitpit
							</Link>
						</li>
						<li>Heroes</li>
					</ul>
				</nav>
				<RouteHandler {...this.props} />
			</div>
		);
	}
});