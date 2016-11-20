import React from 'react';
import { Email } from 'meteor/email';
import { Meteor } from 'meteor/meteor';
import { ContactEmail } from './email-template';


Meteor.methods({
	sendContactMail: function(fromEmail, name, text){
		check(fromEmail, String);
		check(name, String);
		check(text, String);
		/*let Template = ContactEmail(name);*/

		// send email to person who filled out form
		Email.send({
			  to: fromEmail,
			  from: "arcomito@gmail.com",
			  html: ContactEmail(name)
		});
		
		//send an email to me
		Email.send({
			  to: "arcomito@gmail.com",
			  from: fromEmail,
			  text: text,
		});

	}
});
