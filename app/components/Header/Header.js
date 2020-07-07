import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import FullscreenOutlined from '@material-ui/icons/FullscreenOutlined';
import FullscreenExitOutlined from '@material-ui/icons/FullscreenExitOutlined';
import InvertColors from '@material-ui/icons/InvertColorsOutlined';
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { NavLink, Link } from 'react-router-dom';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.png';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import menuMessages from 'enl-api/ui/menuMessages';
import link from 'enl-api/ui/link';
import UserMenu from './UserMenu';
import SearchUi from '../Search/SearchUi';
import SelectLanguage from '../SelectLanguage';
import messages from './messages';
import styles from './header-jss';
 import history from 'utils/history';
import { connect } from 'react-redux';
import { logout } from 'enl-redux/actions/auth';

const elem = document.documentElement;

class Header extends React.Component {
  state = {
    open: false,
    fullScreen: false,
    turnDarker: false,
    showTitle: false
  };

  // Initial header style
  flagDarker = false;

  flagTitle = false;

  componentDidMount = () => {
    console.log(this.props.data);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = (scroll > 30);
    const newFlagTitle = (scroll > 40);
    if (this.flagDarker !== newFlagDarker) {
      this.setState({ turnDarker: newFlagDarker });
      this.flagDarker = newFlagDarker;
    }
    if (this.flagTitle !== newFlagTitle) {
      this.setState({ showTitle: newFlagTitle });
      this.flagTitle = newFlagTitle;
    }
  }
logout=()=>{
  console.log("logout",history);

  this.props.logout();
  this.props.history.push('/login-firebase');
}
  openFullScreen = () => {
    this.setState({ fullScreen: true });
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen();
    }
  };

  closeFullScreen = () => {
    this.setState({ fullScreen: false });
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  turnMode = mode => {
    const { changeMode } = this.props;
    if (mode === 'light') {
      changeMode('dark');
    } else {
      changeMode('light');
    }
  };

  toogles=()=>{
    this.props.toggleDrawerOpen();
    console.log("aa");
      setTimeout(()=>{
        window.dispatchEvent(new Event("resize"));        
      },1000)

  }
  render() {
    const {
      classes,
      toggleDrawerOpen,
      margin,
      mode,
      title,
      openGuide,
      history,
      signOut,
      dense,
      isLogin,
      avatar,
      intl
    } = this.props;
    const {
      fullScreen,
      open,
      turnDarker,
      showTitle
    } = this.state;

    return (
      <AppBar
        className={classNames(
          classes.appBar,
          classes.floatingBar,
          margin && classes.appBarShift,
          turnDarker && classes.darker,
        )}
      >
        <Toolbar disableGutters={!open}>
          <div className={classNames(classes.brandWrap, dense && classes.dense)}>
            <span>
              <IconButton
                className={classes.menuButton}
                aria-label="Menu"
                onClick={this.toogles}
              >
                <MenuIcon />
              </IconButton>
            </span>
            <Hidden smDown>
              <NavLink to="/app" className={classNames(classes.brand, classes.brandBar)}>
                <img src={logo} alt={brand.name} />
                <span className="logo_brand">
                </span>
              </NavLink>
            </Hidden>
          </div>
          <Hidden smDown>
            <div className={classes.headerProperties}>
               
            </div>
          </Hidden>
          <div className={classes.searchWrapper}>
            <div className={classes.wrapper}>
              <div className={classes.search}>
                <SearchIcon />
              </div>
              <SearchUi history={history} />
            </div>
          </div>
          <Hidden xsDown>
            <span className={classes.separatorV} />
          </Hidden>
          <div className={classes.userToolbar}>
            {/*<SelectLanguage />*/}
            {this.props.data.isLoggedIn
              ? null
              : (
                <Button
                  color="primary"
                  className={classes.buttonTop}
                  onClick={this.logout}
                  variant="contained"
                >
                  <AccountCircle />
                  Logout
                </Button>
              )
            }
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleDrawerOpen: PropTypes.func.isRequired,
  avatar: PropTypes.string.isRequired,
  margin: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool,
  dense: PropTypes.bool,
  mode: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
  openGuide: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  intl: intlShape.isRequired
};

Header.defaultProps = {
  dense: false,
  isLogin: false
};



const reducer = 'auth';
const mapStateToProps = state => ({
  data: state.get("auth"),
});

const mapDispatchToProps = dispatch => ({
logout:()=>dispatch(logout())
});

const Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);


export default withStyles(styles)(Mapped);
