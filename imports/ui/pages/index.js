import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import 'flexboxgrid';
import { Link } from 'react-router'
import EasyTransition from 'react-easy-transition'

styles={
	raisedButtons: {
		width: "50px",
		margin: "30px 10px 10px 10px",
		fontWeight: 200
	},
	sectionOne: {
		backgroundColor: "#FF4081"
	}
}


const Jumbotron = () => (
		<div style={{display: "block", backgroundColor: "#009688", minHeight: "95vh"}}>
			<div className="row center-xs middle-xs">
				<div className="box" style={{paddingTop: "100px"}}>
					<h1 style={{fontWeight: 200, fontSize: "32px", color: "#ffffff", marginBottom: "0px"}}>Hello, I am</h1>
					<h1 style={{color: "#ffffff", fontWeight: 900, fontSize: "80px", marginTop: "15px" ,marginBottom: "10px"}}>Anthony Comito</h1>
					<h3 style={{fontWeight: 200, fontSize: "20px", color: "#B2DFDB", marginTop: "0px", marginBottom: "60px"}}>JAVASCRIPT DEVELOPER</h3>
					<Link to="/portfolio"><RaisedButton style={styles.raisedButtons} secondary={true} label="See My Work" /></Link>
					<Link to="/open-source"><RaisedButton style={styles.raisedButtons} label="Open Source" /></Link>
				</div>
			</div>
		</div>
);

export const Index = () => (
	<div>
	<EasyTransition path={location.pathname} initialStyle={{opacity: 0}} transition="opacity 0.3s ease-in" finalStyle={{opacity: 1}} >
	    <Jumbotron />
	</EasyTransition>
		
  	</div>
);
