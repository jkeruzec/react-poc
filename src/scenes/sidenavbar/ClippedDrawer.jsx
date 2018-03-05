import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import classNames from 'classnames';
import { generic1 } from './menus/genericItems1';
import { generic2 } from './menus/genericItems2';
import {styles} from './ClippedDrawerStyle';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

class ClippedDrawer extends React.Component {
    
    state = {
            open: false
    };
    
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    
    handleChangeAnchor = event => {
        this.setState({
            anchor: event.target.value,
        });
    };
    
    render() {
        
        const { classes, theme } = this.props;
        const {open} = this.state;
        
        const drawer = (
                <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                docked: classes.dockedPaper,
                paper: classes.drawerPaper
                }}
                >
                <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
                </div>
                <Divider />
                <List>{generic1}</List>
                <Divider />
                <List>{generic2}</List>
                </Drawer>
        );
        
        return (
                <div className={classes.root}>
                <div className={classes.appFrame}>
                  <AppBar
                    className={classNames(classes.appBar, {
                      [classes.appBarShift]: open,
                      [classes[`appBarShift-left`]]: open,
                    })}
                  >
                    <Toolbar disableGutters={!open}>
                      <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Typography variant="title" color="inherit" noWrap>
                        Persistent drawer
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  {drawer}
                </div>
              </div>
        );
    }
    
};

ClippedDrawer.propTypes = {
        classes: PropTypes.object.isRequired,
        theme : PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(ClippedDrawer);


