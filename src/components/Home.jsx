import React, { Fragment,Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles,
  Button
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const MyButton = styled(Button)`
  background-color: #6772e5;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

// const styles =((theme)=>({
//   root: {
//     //flexGrow: 1,
//   },
//   navBar:{
//     backgroundColor:'white'
//   },

//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     //flexGrow: 1,
//     color:'#000'
//   },
// }));

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
            <MyButton>
hiii
            </MyButton>
            <Typography variant="h6" className={classes.title}>
             Desi Crafteria
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


export default withStyles()(Home);
