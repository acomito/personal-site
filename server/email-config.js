
// API credentials for MailGun
Meteor.startup( function() {
    process.env.MAIL_URL = "smtp://postmaster@sandbox12477c609fdf4bed92e16d34a74176b5.mailgun.org:0cead7c4c702aaac3d8c7c9a9cf72d71@smtp.mailgun.org:587";
});
