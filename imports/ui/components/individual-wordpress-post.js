import React from 'react';
import { findDOMNode } from 'react-dom';
import { Bert } from 'meteor/themeteorchef:bert';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { createMarkup } from '../../modules/markdown-helpers.js';
import { TweenMax } from 'gsap';


export class IndividualWordpressPost extends React.Component {

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
					<RaisedButton label="Back to Posts" onClick={handleClose}/>
					<Card key={ document.id }>
					    <CardHeader title={document.title.rendered} />
					    <CardText>
					    	<div dangerouslySetInnerHTML={createMarkup(document.content.rendered)} />  
					    </CardText>
					</Card>
				 </div>
	}
}


