import React from 'react';
import Routes from '../shared/components/routes';
import Router from 'react-router';

let router = Router.create({
	routes: Routes
});

router.run((Handler) => {
	React.render(<Handler />, document.querySelector('.wrapper'));
});