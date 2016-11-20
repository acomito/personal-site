import React from 'react';
import { OpenSourceItem } from './open-source-item.js';
import { IndividualOpenSourceItem } from './individual-open-source-item.js';
import 'flexboxgrid';
import TransitionGroup from 'react-addons-transition-group';
import { OpenSourceArray } from '../../modules/open-source'

const styles = {
	divContainer: {
    padding: "40px",
    display: "block",
    width: "80%",
    margin: "auto"
	},
  headerText: {
    textAlign: "center",
    width: "100%",
    display: "block",
    fontWeight: 400,
    marginBottom: "60px",
    color: "#616161",
  }
};



export class OpenSourceList extends React.Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = { 
      open: false, 
      doc: {} 
    };      
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

                <h1 style={styles.headerText}>Open Source Projects</h1>

                <TransitionGroup>
                  {!this.state.open && OpenSourceArray.map((doc) => (        
                    <OpenSourceItem key={ doc.id } document={ doc } handleOpen={this.handleOpen} />
                  ))}
                </TransitionGroup>

            </div>

  }

}



