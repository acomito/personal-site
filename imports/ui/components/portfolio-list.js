import React from 'react';
import { PortfolioItem } from './portfolio-item.js';
import { IndividualPortfolioItem } from './individual-portfolio-item.js';
import 'flexboxgrid';
import ReactTransitionGroup from 'react-addons-transition-group';
import { PortfolioArray } from '../../modules/portfolio'
import { findDOMNode } from 'react-dom';
import { TweenMax } from 'gsap';

const styles = {
	divContainer: {
    padding: "40px",
    width: "100%"
	},
  headerText: {
    textAlign: "center",
    width: "100%",
    display: "block",
    fontWeight: 300,
    marginBottom: "60px",
    color: "#616161",
  }
};



export class PortfolioList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = { 
      open: false, 
      doc: {} 
    };      
  }

  componentWillEnter (callback) {
      console.log('this animation ran for portfolio list');
      const el = findDOMNode(this);
      TweenMax.fromTo(el, 0.4, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  handleOpen(doc) {
      this.setState({ 
        open: true, 
        doc: doc 
      });
  }

  handleClose() {
    this.setState({ 
      open: false, 
      doc: {} 
    });
  }

  render() {
    return <div style={styles.divContainer} className="row">


                {!this.state.open &&  <h1 style={styles.headerText}>Portfolio</h1>}

                <ReactTransitionGroup component="div" style={{width: "100%", display: "block", margin: "auto"}}>
                  {this.state.open && <IndividualPortfolioItem  key={ this.state.doc.id } document={ this.state.doc } handleClose={this.handleClose} />  }
              </ReactTransitionGroup>

               
               

                <ReactTransitionGroup>
                  {!this.state.open && PortfolioArray.map((doc) => (        
                    <PortfolioItem key={ doc.id } document={ doc } handleOpen={this.handleOpen} />
                  ))}
                </ReactTransitionGroup>

            </div>

  }

}



