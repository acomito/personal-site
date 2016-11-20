import React from 'react';
import { WordpressPost } from './wordpress-post.js';
import { IndividualWordpressPost } from './individual-wordpress-post.js';
import 'flexboxgrid';
import TransitionGroup from 'react-addons-transition-group';
import 'prismjs';

const styles = {
	divContainer: {
    padding: "40px",
    width: "100%"
	}
};

export class WordpressPostsList extends React.Component {

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
    return this.props.documents.length > 0 
            ? <div style={styles.divContainer} className="row">

              {/*  SHOW IF STATE.OPEN = TRUE ||| HIDE IF STATE.OPEN = FALSE   */}
              <FloatingActionButton style={styles.floatingActionButtonStyles} backgroundColor={"#BDBDBD"} onTouchTap={handleClose}><ArrowBack /></FloatingActionButton>
                <TransitionGroup>
                  {this.state.open && <IndividualWordpressPost key={ this.state.doc.id } document={ this.state.doc } handleClose={this.handleClose} /> }
                </TransitionGroup>

              {/*  SHOW IF STATE.OPEN = FALSE ||| HIDE IF STATE.OPEN = TRUE  */}
                {/*<TransitionGroup>
                                  {!this.state.open && this.props.documents.map((doc) => (        
                                    <WordpressPost key={ doc.id } images={this.props.images} document={ doc } handleOpen={this.handleOpen} />
                                  ))}
                                </TransitionGroup>*/}
              </div>

            // IF NO POSTS 
          : <div>No blog posts yet.</div>
  }

}



