import React from 'react';
import { findDOMNode } from 'react-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { TweenMax } from 'gsap';
import Chip from 'material-ui/Chip';

const styles = {
	chipStyles: {
		display: "inline-block",
		margin: "5px",
		padding: "2px 5px"
	}
};

export class IndividualOpenSourceItem extends React.Component {

	 constructor(props) {
	    super(props);   
	  }

	  componentWillEnter (callback) {
	    const el = findDOMNode(this);
	    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
	  }

	render(){
		const { document, handleClose } = this.props;

		return 	<div>
					<RaisedButton label="Back to Projects" onClick={handleClose}/>
					<Card key={ document.id }>
					    <CardHeader title={document.title} />
					    <CardText>
					    {document.description}
					    </CardText>
					    {document.tags.map(function(tag){
					    	return <Chip style={styles.chipStyles} key={tag}> {tag} </Chip>
					    })}
					    
					</Card>
				 </div>
	}
}


