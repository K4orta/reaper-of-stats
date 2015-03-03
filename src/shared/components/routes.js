import React from 'react';
import {Route, DefaultRoute } from 'react-router';
import AppLayout from './layout';
import HeroesView from './views/heroes';

let Routes = (
	<Route name='app' path='/' handler={AppLayout}>
		<Route name='heroes' path='/heroes' handler={HeroesView} />
		<DefaultRoute handler={HeroesView} />
	</Route>
);

export default Routes;