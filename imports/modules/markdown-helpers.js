import React from 'react';
import { parseMarkdown } from 'meteor/themeteorchef:commonmark';


/*export const createMarkup = (html) => {
  	if ( html ) {
  	let parsedMarkdown = Prism.highlight( parseMarkdown(html), Prism.languages.javascript );
      return { __html: parsedMarkdown };
    }
};
*/

export const createMarkup = (html) => {
  	if ( html ) {
  	let parsedMarkdown = parseMarkdown( html );
      return { __html: parsedMarkdown };
    }
};
