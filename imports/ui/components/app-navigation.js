import React from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import { SideNav } from './side-nav'
import Avatar from 'material-ui/Avatar';
import { returnActiveLink } from '../../modules/activeLink-Helper';

const styles = {
  AppNavigation: {
    color: "#ffffff",
  },
  titleLink: {
    textDecoration: "none",
    color: "#ffffff",
    cursor: "pointer"
  },
  navLink: {
    color: "#ffffff"
  }
}

/*const returnColor = function(currentPath, linkName){
  if (currentPath === linkName) {  return {color: "#B2DFDB"}; }
    return {color: "#FFFFFF"};
};*/

const NavLinks = function({currentPath}){
  return  <div className="navLinks">
             <Link to="/portfolio" >
              <FlatButton labelStyle={returnActiveLink(currentPath, '/portfolio')} label="Portfolio" />
            </Link>
             <Link to="/open-source" >
              <FlatButton labelStyle={returnActiveLink(currentPath, '/open-source')} style={styles.navLink} label="Open Source" />
            </Link>
            <a href="https://blog.anthonycomito.com/" >
              <FlatButton labelStyle={returnActiveLink(currentPath, '/posts')} style={styles.navLink} label="Blog" />
            </a>
          </div>
};

export class AppNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {open: false};
  }


  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose(){
    this.setState({open: false});
  } 

  render() {
    const currentPath = this.props.currentPath;
    return <div>
                <AppBar
                  title={this.props.currentPath === '/' 
                        ? '' 
                        : <Link to="/" style={styles.titleLink} currentPath={currentPath}>
                            <Avatar color={"#009688"} backgroundColor={"#FAFAFA"} size={48} > AC </Avatar>
                          </Link>
                  }
                  zDepth={this.props.currentPath === '/' ? 0 : 2}
                  style={styles.AppNavigation}
                  iconElementRight={<NavLinks currentPath={currentPath} className="navLinks" />}
                  iconElementLeft={<IconButton onClick={this.handleToggle}><Menu className="mobileNav" color={"#FFFFFF"} /></IconButton>}
                  

                />
                <SideNav isOpen={this.state.open} close={this.handleClose} currentPath={currentPath}/>
          </div>
            
  }
}


