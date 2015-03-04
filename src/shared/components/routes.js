import React from 'react';
import {Route, DefaultRoute, Redirect } from 'react-router';
import AppLayout from './layout';
import HeroesView from './views/heroes';
import HeroView from './views/hero';
import SignUpView from './views/signup';

let Routes = (
	<Route name='app' path='/' handler={AppLayout}>
		<Route name='reaper' path='/reaper' handler={SignUpView} />
		<Route name='heroes' path='/reaper/:battleTag' handler={HeroesView} />
		<Route name='stats' path='/reaper/:battleTag/:id' handler={HeroView} />
		<DefaultRoute handler={SignUpView} />
		<Redirect from='app' to='/reaper' />
	</Route>
);

export default Routes;