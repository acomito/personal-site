import React from 'react';
import { AppNavigation } from '../components/app-navigation';
import EasyTransition from 'react-easy-transition'
import { ContactForm } from  '../components/contact-form';
import { browserHistory } from 'react-router';


export const App = React.createClass({


  render() {
    return <div> {/*<div id="app-wrapper">*/}
              <ContactForm />
            	<AppNavigation currentPath={this.props.location.pathname} />
		          <EasyTransition path={location.pathname} initialStyle={{opacity: 0}} transition="opacity 0.3s ease-in" finalStyle={{opacity: 1}} >
	            	{ this.props.children }
	            </EasyTransition>
            </div>;
  }
  
});
