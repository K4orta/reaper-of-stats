import React from 'react';
import Routes from '../shared/components/routes';
import Router from 'react-router';

import Flux from '../shared/flux';
import FluxComponent from 'flummox/component';

require('../shared/init');

let router = Router.create({
	routes: Routes
});

let flux = new Flux();

router.run((Handler, state) => {
	const routeInfo = {state, flux};
	
	React.render(
		<FluxComponent flux={flux}>
			<Handler {...state} />
		</FluxComponent>, 
		document.querySelector('.wrapper')
	);
	
});