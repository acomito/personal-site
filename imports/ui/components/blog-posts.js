import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import 'flexboxgrid';
import AccessTime from 'material-ui/svg-icons/device/access-time';


const PostArray = [
		{
		id: 3,
		title: 'React Component Jargon as of August 2016',
		subtitle: "We Probably Need a React.js Ontology",
		publishedDay: "3",
		publishedMonth: "Aug.",
		publishedyear: "2016",
		timeToRead: "11min. read",
		url: "https://medium.com/@arcomito/react-component-jargon-as-of-august-2016-28451d8ceb1d#.i7xfhevz4",
		image: "http://www.emiliosanfilippo.it/wp-content/uploads/2011/11/Ontology.jpg",
		tags: ["JavaScript", "React"],
		category: "React"
	},
	{
		id: 2,
		title: 'Answer the “Anagram Interview Question” with ES6',
		subtitle: "A common interview question answered with some ES6 Syntax",
		publishedDay: "31",
		publishedMonth: "July",
		publishedyear: "2016",
		timeToRead: "9min. read",
		url: "https://medium.com/@arcomito/answer-the-anagram-interview-question-with-es6-c7621e43596d#.v34o6jl3o",
		image: "http://www.scrabbleprofessor.com/wp-content/uploads/2012/09/Anagram-Generator-Anagram-Solver-Unsolver-Words-with-Friends-Cheat-Scrabble-Word-Finder.jpg",
		tags: ["JavaScript", "ES6"],
		category: "JS"
	},
	{
		id: 1,
		title: "Use React for Your Emails (in Meteor.js)",
		subtitle: "See how to use React to create your HTML emails",
		publishedDay: "30",
		publishedMonth: "July",
		publishedyear: "2016",
		timeToRead: "7min. read",
		url: "https://medium.com/@arcomito/use-react-for-your-emails-in-meteor-js-9c07b870b2f7#.ecldnh7n9",
		image: "https://cdn-images-1.medium.com/max/800/1*gSHVuXF_MLjlvelnMwpY7g.png",
		tags: ["JavaScript", "React"],
		category: "React"
	},


];

const styles = {
	avatarStyles: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
      zIndex: "1000"
    },
    cardTextStyles: {
    	minHeight: "185px",
    	maxHeight: "185px",
    	position: "relative"
    }
}

const OverLayContainer = ({post}) => (
		<div>
			<Avatar color={"#FFFFFF"} backgroundColor={"#FF6E40"} size={60} style={{position: "absolute", top: 4, right: 5}}>
				<span style={{fontSize: "12px", marginRight: "5px"}}>{post.publishedMonth}</span>
				<span >{post.publishedDay}</span>
			</Avatar>
			<div style={{backgroundColor:"#FF6E40", fontSize: "13px", color: "#FFFFFF", position: "absolute", bottom: 0, left: 0, height: "20px", width:"60px", padding: "5px 8px", textTransform: "uppercase"}}>{post.category}</div>
		</div>
);

export const BlogPosts = () => (
  <div className="row" style={{width: "80%", margin: "20px auto"}}>
    {PostArray.map(function(post){
    	return <div className="col-xs-12 col-sm-6 col-lg-4" style={{marginBottom: "20px"}}>
	    			<a href={post.url}>
		    			<Card key={post.id} className="box shadowHover">
				    		<CardMedia 
				    			style={{position: "relative"}}
				    			overlay={ <OverLayContainer post={post} /> }
					    		overlayContentStyle={{background: "none", position: "absolute", top: 4, right: 5}}
				    		>					    		
				      			<img style={{height: "245px"}} src={post.image} />
				   			 </CardMedia>
				   			  <CardText style={styles.cardTextStyles}>
				   			  	<CardTitle 
				   			  		title={post.title} 
				   			  		titleStyle={{fontWeight: 700, color: "#212121", lineHeight: "26px", marginBottom: "10px"}} 
				   			  		subtitleStyle={{fontWeight: 400, color: "#FF6E40", fontSize: "18px"}} 
				   			  		subtitle={post.subtitle}
				   			  	/>
				   			  	<AccessTime style={{position: "absolute", bottom: 6, left: 7, color: "#E0E0E0"}}/><span style={{position: "absolute", bottom: 8, left: 34, color: "#BDBDBD"}}>{post.timeToRead}</span>
				   			  </CardText>
				    	</Card>
			    	</a>
		    	</div>
    })}
  </div>
);