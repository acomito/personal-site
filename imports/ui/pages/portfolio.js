import React from 'react';
import 'flexboxgrid';
import {PortfolioList } from '../components/portfolio-list.js';
import TransitionGroup from 'react-addons-transition-group';


export const Portfolio = () => (
		<TransitionGroup>
			<PortfolioList/>
		</TransitionGroup>
);