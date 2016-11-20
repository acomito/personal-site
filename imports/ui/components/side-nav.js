import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import Divider from 'material-ui/Divider';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { returnActiveSideNav } from '../../modules/activeLink-Helper';


const styles = {
	overLayStyle: {
		position: "absolute",
	    bottom: 0,
	    right: 0,
	    left: 0,
	    paddingTop: 8,
	    background: "none",
	    height: "100%"
	},
	avatarStyles: {
		margin: "auto",

	}
};


export function SideNav({isOpen, close, currentPath}){
  return <div>
          <Drawer open={isOpen} docked={false} onRequestChange={close}>
          <Card>
	          <CardMedia 
	          	overlayContentStyle={styles.overLayStyle} 
	          	overlay={<Avatar size={100} 
	          		style={styles.avatarStyles} 
	          		src="https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAQOAAAAJDc3NTdhMWNkLTc3M2QtNDRiMi1hOWM3LTE0OGI5YmRiN2E5OA.jpg" />
	          	}
	          >
	          	<img style={{height: "150px"}} src="http://www.lirent.net/wp-content/uploads/2014/10/Material-Wallpaper-21-Android-Lollipop-wallpapers-800x450.png" />
	          </CardMedia>
          </Card>
          <Divider />
            <Link to="/portfolio"  onClick={close} > <MenuItem style={returnActiveSideNav(currentPath, '/portfolio')} >Portfolio</MenuItem> </Link>
            <Link to="/open-source"   onClick={close} > <MenuItem style={returnActiveSideNav(currentPath, '/open-source')} >Open Source</MenuItem> </Link>
            <a href="https://blog.anthonycomito.com/"   onClick={close} > <MenuItem style={returnActiveSideNav(currentPath, '/posts')} >Blog</MenuItem> </a>
            {/*<Link to="/contact" onClick={close} > <MenuItem>Contact</MenuItem> </Link>*/}
          </Drawer>
        </div>
};

