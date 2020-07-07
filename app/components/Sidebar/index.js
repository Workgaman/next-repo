import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import dummy from 'enl-api/dummy/dummyContents';
import styles from './sidebar-jss';
import SidebarContent from './SidebarContent';

class Sidebar extends React.Component {
  state = {
    status: dummy.user.status,
    anchorEl: null,
  };

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
        window.dispatchEvent(new Event("resize"));
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
        window.dispatchEvent(new Event("resize"));
  };

  handleChangeStatus = status => {
    this.setState({ status });
    this.handleClose();
  }
  toogles=()=>{
    this.props.toggleDrawerOpen();
        window.dispatchEvent(new Event("resize"));
  }

  render() {
    const { status, anchorEl } = this.state;
    const {
      classes,
      open,
      toggleDrawerOpen,
      loadTransition,
      leftSidebar,
      dataMenu,
      userAttr
    } = this.props;
    return (
      <Fragment>
        <Hidden lgUp>
          <SwipeableDrawer
            onClose={toogles}
            onOpen={toogles}
            open={!open}
            anchor={leftSidebar ? 'left' : 'right'}
          >
            <div className={classes.swipeDrawerPaper}>
              <SidebarContent
                drawerPaper
                leftSidebar={leftSidebar}
                toggleDrawerOpen={toogles}
                loadTransition={loadTransition}
                dataMenu={dataMenu}
                status={status}
                anchorEl={anchorEl}
                openMenuStatus={this.handleOpen}
                closeMenuStatus={this.handleClose}
                changeStatus={this.handleChangeStatus}
                userAttr={userAttr}
              />
            </div>
          </SwipeableDrawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            variant="permanent"
            onClose={toogles}
            classes={{
              paper: classNames(classes.drawer, classes.drawerPaper, !open ? classes.drawerPaperClose : ''),
            }}
            open={open}
            anchor={leftSidebar ? 'left' : 'right'}
          >
            <SidebarContent
              drawerPaper={open}
              leftSidebar={leftSidebar}
              loadTransition={loadTransition}
              dataMenu={dataMenu}
              status={status}
              anchorEl={anchorEl}
              openMenuStatus={this.handleOpen}
              closeMenuStatus={this.handleClose}
              changeStatus={this.handleChangeStatus}
              userAttr={userAttr}
            />
          </Drawer>
        </Hidden>
      </Fragment>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  userAttr: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  loadTransition: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  leftSidebar: PropTypes.bool,
  dataMenu: PropTypes.array.isRequired,
};

Sidebar.defaultProps = {
  leftSidebar: true
};

export default withStyles(styles)(Sidebar);
