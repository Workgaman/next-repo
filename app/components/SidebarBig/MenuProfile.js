import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ButtonBase from '@material-ui/core/ButtonBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import dummy from 'enl-api/dummy/dummyContents';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from 'enl-api/ui/menuMessages';
import styles from './sidebarBig-jss';

class MenuProfile extends React.Component {
  state = {
    status: dummy.user.status,
    anchorEl: null,
  }

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChangeStatus = status => {
    this.setState({ status });
    this.handleClose();
  }

  render() {
    const { classes, userAttr } = this.props;
    const { anchorEl, status } = this.state;
    const setStatus = st => {
      switch (st) {
        case 'online':
          return classes.online;
        case 'idle':
          return classes.idle;
        case 'bussy':
          return classes.bussy;
        default:
          return classes.offline;
      }
    };

    return (
      <div>
        <ButtonBase className={classes.avatarHead} >
          <Avatar
            alt={userAttr.name}
            src={userAttr.avatar}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
        </ButtonBase>
        <Menu
          id="status-menu"
          anchorEl={anchorEl}
          className={classes.statusMenu}
        >
          <MenuItem className={classes.profile}>
            <Avatar
              alt={userAttr.name}
              src={userAttr.avatar}
              className={classNames(classes.avatar, classes.bigAvatar)}
            />
          </MenuItem>
          </Menu>
      </div>
    );
  }
}

MenuProfile.propTypes = {
  classes: PropTypes.object.isRequired,
  userAttr: PropTypes.object.isRequired,
};

MenuProfile.defaultProps = {
  anchorEl: null,
  isLogin: false,
};

export default withStyles(styles)(injectIntl(MenuProfile));
