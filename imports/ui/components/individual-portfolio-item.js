import React from 'react';
import { findDOMNode } from 'react-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import {Card, CardMedia, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { TweenMax } from 'gsap';
import Chip from 'material-ui/Chip';
import FloatingActionButton  from 'material-ui/FloatingActionButton';
import ArrowBack from 'material-ui//svg-icons/navigation/arrow-back';

const styles = {
	chipStyles: {
		display: "inline-block",
		margin: "3px",
	},
	floatingActionButtonStyles: {
	},
	cardStyles: {
		width: "40%",
		position: "absolute",
		right: 20,
		top: -80
	},
};


export class IndividualPortfolioItem extends React.Component {

	 constructor(props) {
	    super(props);   
	  }

	  componentWillEnter (callback) {
	    const el = findDOMNode(this);
	    const title = findDOMNode(this.refs.title);
	    const description = findDOMNode(this.refs.description);
	    TweenMax.fromTo(el, 0.4, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
	    TweenMax.fromTo(title, 0.7, {x: 100, opacity: 0}, {x: 0, opacity: 1, onComplete: callback});
	    TweenMax.fromTo(description, 0.6, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
	  }

	render(){
		const { document, handleClose } = this.props;

		return 	<div>
					<div className="row">
						<div className="box">
							<FloatingActionButton style={styles.floatingActionButtonStyles} backgroundColor={"#BDBDBD"} onTouchTap={handleClose}><ArrowBack /></FloatingActionButton>
						</div>
					</div>
					<Card key={ document.id } style={{backgroundColor: "#009688", width: "100%", height: "350px", margin: "100px auto", padding: "20px 30px", position: "relative"}} >
							<h1 ref="title" style={{ color: "#FFFFFF", fontWeight: 400, textTransform: "uppercase" }}>{document.title} <span style={{ marginLeft: "8px", color: "#80CBC4", fontSize: "20px", textTransform: "uppercase", fontWeight: 400}}>{document.subtitle}</span></h1>
							<h5 ref="description" style={{ color: "#FFFFFF", fontWeight: 300, marginRight: "45%"}}>{document.description}</h5>
							<Card style={styles.cardStyles}>
								<CardMedia>
									<img src={document.image} />
								</CardMedia>
								<CardText>
									<h5 style={{marginBottom: "3px", color: "#80CBC4"}}>Technologies Used:</h5>
									{document.tags.map(function(tag){
										return <Chip style={styles.chipStyles} key={tag} labelStyle={{fontSize: "11px", }}> {tag} </Chip>
									})}
								</CardText>
								<CardActions style={{padding: "10px"}}>
									<a style={{border: "2px solid #009688", color: "#009688", padding: "6px 15px", fontSize: "13px", margin: "5px"}} target="_blank"  href="https://app.growlab.io">VIEW LIVE</a>
								</CardActions>
							</Card>
					</Card>
				</div>
	}
}


