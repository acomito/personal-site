import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import {Card, CardActions, CardHeader, CardTitle, CardMedia, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { findDOMNode } from 'react-dom';
import { TweenMax } from 'gsap';
import 'flexboxgrid';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';

import {
blue300,
indigo900,
orange200,
deepOrange300,
pink400,
purple500,
} from 'material-ui/styles/colors';




const styles = {
  cardStyles: {
    marginBottom: "10px",
    display: "block",
    width: "100%",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingRight: "0px",
    paddingLeft: "25px",
    borderRadius: "4px",
    backgroundColor: "#FFFFFF"
  },
  buttonStyles: {
    minWidth: "125px",
  },
  raisedButtonStyles: {
    fontWeight: 200,
  },
  cardText: {
    minHeight: "45px",
  }
};

export class OpenSourceItem extends React.Component {

   constructor(props) {
      super(props);
    }

    componentWillEnter (callback) {
      const el = findDOMNode(this);
      TweenMax.fromTo(el, 0.4, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }


  render(){

    const { document, handleOpen } = this.props;

    return <Card key={ document.id } style={styles.cardStyles}>
            <div className="row middle-xs">
              <div className="col-xs-12 col-md-4">
                <div className="box">
                <h2 style={{marginBottom: "0px", color: "#616161", fontWeight: 500}}>{document.title}</h2>
                <h5 style={{color: "#BDBDBD", marginTop: "0px", paddingTop: "0px", fontWeight: 400}}>
                {document.tags.map(function(tag){
                    return tag + ', ';
                })}
                </h5>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="box">

                </div>
              </div>
              <div className="col-xs-12 col-md-2">
                <div className="box">
                    {document.github && <RaisedButton 
                                            primary={true} 
                                            style={styles.buttonStyles} 
                                            label="GitHub" 
                                            href={document.github} 
                                            labelStyle={styles.raisedButtonStyles}
                                        />}
                </div>
              </div>
            </div>
          </Card>
  }
    

}
