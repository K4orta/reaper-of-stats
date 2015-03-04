import React from 'react';
import Routes from '../shared/components/routes';
import Router from 'react-router';

import Flux from '../shared/flux';

require('../shared/init');

let router = Router.create({
	routes: Routes
});

let flux = new Flux();

router.run((Handler) => {
	React.withContext({flux}, ()=> {
		React.render(<Handler />, document.querySelector('.wrapper'));
	});
});