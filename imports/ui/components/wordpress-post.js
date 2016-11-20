import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import {Card, CardActions, CardHeader, CardTitle, CardMedia, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { createMarkup } from '../../modules/markdown-helpers.js';
import { getImage } from '../../modules/getImage.js';
import { findDOMNode } from 'react-dom';
import { TweenMax } from 'gsap';
import 'flexboxgrid';

const styles = {
  cardStyles: {
    marginBottom: "15px"
  }
};

export class WordpressPost extends React.Component {

   constructor(props) {
      super(props);
    }

    componentWillEnter (callback) {
      const el = findDOMNode(this);
      TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }


  render(){

    const { images, document, handleOpen } = this.props;

    return <div key={ document.id } className="col-xs-12 col-sm-6 col-md-4" style={{display: "inline-block", marginBottom: "10px"}}>
              <Card className="box">
                <CardMedia overlay={<CardTitle title={document.title.rendered} subtitle="Overlay subtitle" />} >
                  <img src={getImage(document, images)} />
                </CardMedia>
              <CardText>
              <div dangerouslySetInnerHTML={createMarkup(document.excerpt.rendered)} />  
              </CardText>
              <CardActions>
                <FlatButton label="Read More" onClick={() => { handleOpen(document) }} />
              </CardActions>
        </Card>
        </div>
  }
    

}
