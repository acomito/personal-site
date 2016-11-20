import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import FloatingActionButton  from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog  from 'material-ui/Dialog';
import Formsy from 'formsy-react';
import { FormsySelect, FormsyText } from 'formsy-material-ui/lib';
import 'flexboxgrid';

// icons
import { TwitterIcon, LinkedinIcon, GitHubIcon } from '../../modules/my-icons';
import Mail from 'material-ui/svg-icons/content/mail';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import Phone from 'material-ui/svg-icons/communication/phone';
import Send from 'material-ui/svg-icons/content/send';

const styles = {
    containerDiv: {
      zIndex: 1000
    },
    fieldStyle: {
      display: "block",
      width: "80%",
      marginBottom: "25px"
    },
    buttonStyles: {
      marginLeft: "10px",
      marginTop: "20px",
      marginBottom: "10px"
    },
    customContentStyle:  {
      width: '80%',
      maxWidth: 'none',
    },
    floatingButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
      zIndex: "1000"
    }
}

export class ContactForm extends React.Component {

   constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      open: false,
      canSubmit: false,
    };      
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }

  submit(data, resetForm) {
      console.log(data);
      Meteor.call('sendContactMail', data.email, data.name, data.summary);
      this.setState({open: false});
  }




render() {

    return (
      <div style={styles.containerDiv}>
        <FloatingActionButton style={styles.floatingButton} secondary={true} onTouchTap={this.handleOpen}>
          <Mail />
        </FloatingActionButton>
        <Dialog open={this.state.open} onRequestClose={this.handleClose} bodyStyle={{padding: "0px"}} contentStyle={styles.customContentStyle}>
        <div className="row">
        <div className="col-xs-12 col-sm-8">
          <div className="box" style={{paddingLeft: "30px", paddingBottom: "20px"}}>
          <h3 style={{fontWeight: 400, color: "#00695C"}}>Send me a Message</h3>
              <Formsy.Form onSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton} ref="form">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <div className="box">
                    <FormsyText 
                      floatingLabelText="Your Name"
                      style={styles.fieldStyle}
                      name="name" 
                      required 
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="box">
                    <FormsyText 
                      name="email"
                      floatingLabelText="Your Email"
                      validations="isEmail"
                      validationError="This is not a valid email"
                      style={styles.fieldStyle}
                      required  
                    />
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="box">
                    <FormsyText 
                        floatingLabelText="How Can I Help You?"
                        style={styles.fieldStyle}
                        name="summary" 
                        required 
                    />
                  </div>
                </div>
              </div>
                <FloatingActionButton secondary={true} disabled={!this.state.canSubmit} type="submit">
                  <Send />
                </FloatingActionButton>
            </Formsy.Form>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4" style={{backgroundColor: "#00695C"}}>
          <div className="box" style={{padding: "20px"}}>
            <h3 style={{color: "#FFFFFF", fontWeight: 300}}>Contact Information</h3>     
              <div className="align-middle" style={{paddingBottom: "30px", marginTop: "50px"}}>
                <LocationOn color={"#009688"} /><span style={{color: "#FFFFFF", marginLeft: "10px", fontWeight: 200}}>Manchester, New Hampshire</span>
              </div> 
              <div className="align-middle" style={{paddingBottom: "30px"}}>
                <Phone color={"#009688"} /><span style={{color: "#FFFFFF", marginLeft: "10px", fontWeight: 200}}>603-661-9557</span>
              </div> 
              <div className="align-middle" style={{paddingBottom: "30px"}}>
                <Mail color={"#009688"} /><span style={{color: "#FFFFFF", marginLeft: "10px",  fontWeight: 200}}>ARcomito@gmail.com</span>
              </div>
          </div>
        </div>
        </div>
        </Dialog>
      </div>
    );
  }
}
