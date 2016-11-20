import React from 'react';
import { Box, Email, Image, Item, Span, A, renderEmail } from 'react-html-email';


const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim()


const ContactMeTemplate = function(props) {
  return <Email title="Anthony recieved your message!" headCSS={css}>
            <Box width="80%" style={{ background: "#edeff0"}}>
              <Item style={{ background: "#ffffff", borderRadius: "5px", margin: "20px auto", padding: "20px"}}>
                <Span color="#424242" style={{fontSize: "20px", marginBottom: "20px"}} lineHeight={20}>Hey {props.name},</Span><br/>
                <Span color="#757575" lineHeight={20}>Thanks for reaching out. I recieved your message and will get back to you within the next business day.</Span>
              </Item>
            </Box>
        </Email>;
};

export const ContactEmail = function(name){
  return renderEmail(<ContactMeTemplate name={name}/>);
}