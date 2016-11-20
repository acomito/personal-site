import React from 'react';
import 'flexboxgrid';
import { OpenSourceList } from '../components/open-source-list';

styles={
	raisedButtons: {
		width: "300px",
		margin: "30px 10px 10px 10px"
	},
	containerDiv: {
		margin: "100px",
	}
}

export const OpenSource = () => (
  <OpenSourceList></OpenSourceList>
);