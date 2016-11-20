import React from 'react';
import { Bert } from 'meteor/themeteorchef:bert';
import {Card, CardActions, CardHeader, CardTitle, CardMedia, CardText} from 'material-ui/Card';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';
import { findDOMNode } from 'react-dom';
import { TweenMax } from 'gsap';
import 'flexboxgrid';

const styles = {
  cardStyles: {
    marginBottom: "25px",
    borderRadius: "2px"
  },
/*  buttonStyles: {
    minWidth: "125px"
  },*/
/*  cardText: {
    minHeight: "45px"
  }*/
};

export class PortfolioItem extends React.Component {

   constructor(props) {
      super(props);
    }

    componentWillEnter (callback) {
      const el = findDOMNode(this);
      TweenMax.fromTo(el, 0.4, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
    }


  render(){

    const { document, handleOpen } = this.props;

    return <div key={ document.id } className="col-xs-12 col-lg-6" style={{display: "inline-block", marginBottom: "40px", width: "100%"}}>
              <Card className="box" style={{position: "relative", paddingBottom: "20px"}}>
              <div className="row" style={{marginBottom: "30px"}}>
                <div className="box">
                  <div style={{position: "absolute", top: 0, right: 0, }}>
                    {document.liveSite && <FlatButton labelStyle={{fontWeight: 200, color: "#BDBDBD", textTransform: "none"}} label="Live Site" href={document.liveSite} />}
                    {document.readMore && <FlatButton labelStyle={{fontWeight: 200, color: "#BDBDBD", textTransform: "none"}} label="Read More" href="#" onClick={() => { handleOpen(document) }} />}
                    {document.github && <FlatButton labelStyle={{fontWeight: 200, color: "#BDBDBD", textTransform: "none"}}  label="GitHub Repo" href={document.github} />}
                  </div>
                </div>
              </div>
              <div className="row center-xs middle-xs" style={{marginBottom: "30px"}}>
                <div className="box">
                  <CardText style={{padding: "10px 100px", minHeight: "130px" }}>
                    <h1 style={{marginBottom: "0px", textAlign: "center", fontSize: "32px"}}> {document.title}</h1>
                    {/*<h3 style={{fontWeight: 300, marginTop: "0px", textAlign: "center", color: "#757575"}}>{document.subtitle}</h3>*/}
                    <p style={{textAlign: "center", fontWeight: 300, color: "#757575"}}>{document.excerpt}</p>
                  </CardText>
                </div>
              </div>
              <div className="row center-xs middle-xs">
                <div className="box">
                    <img src={document.image} className="portfolio-image" />
                </div>
              </div>                   
            </Card>
        </div>
  }

/*  render(){

    const { document, handleOpen } = this.props;

    return <div key={ document.id } className="col-xs-12 col-md-4" style={{display: "inline-block", marginBottom: "40px"}}>
              <Card className="box">
                <CardMedia overlayContentStyle={{background: "rgba(0, 0, 0, 0.741176)"}} overlay={<CardTitle titleStyle={{textAlign: "center"}} subtitleStyle={{textAlign: "center"}}  title={document.title} subtitle={document.subtitle} />} >
                  <img src={document.image} />
                </CardMedia>
              <CardText style={styles.cardText}>
              {document.excerpt}
              </CardText>
              <CardActions>
                {document.liveSite && <FlatButton style={styles.buttonStyles} label="Live Site" href={document.liveSite} />}
                {document.readMore && <FlatButton style={styles.buttonStyles} label="Read More" href="#" onClick={() => { handleOpen(document) }} />}
                {document.github && <FlatButton style={styles.buttonStyles} label="GitHub Repo" href={document.github} />}
              </CardActions>
        </Card>
        </div>
  }*/
    

}
