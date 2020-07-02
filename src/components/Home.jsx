import React, { Fragment,Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles,
  styled,
  Button
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from 'prop-types';


const MyButton= styled(Button)`
padding:10000rem;
margin-left:100rem;
color:blue;`

const styles =((theme)=>({
  root: {
    flexGrow: 1,
  },
  navBar:{
    backgroundColor:'white'
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:'#000'
  },
}));

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  render() {
    const { classes }= this.props;
    return (
      <Fragment className={classes.root}>
        <AppBar position="static" elevation={3} className={classes.navBar}>
          <Toolbar>
            <MyButton
              edge="start"
              
              
              aria-label="menu"
            >
              <MenuIcon />
            </MyButton>
            <Typography variant="h6" className={classes.title}>
              CraftLand
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Home);
