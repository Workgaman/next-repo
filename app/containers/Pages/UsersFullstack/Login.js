import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { LoginFormFirebase, SelectLanguage } from 'enl-components';
import logo from 'enl-images/logo_wh.png';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from 'enl-components/Forms/user-jss';
import { FormattedMessage } from 'react-intl';
import { loginWithEmail } from 'enl-redux/actions/authActions';
import { login } from 'enl-redux/actions/auth';
import messages from './messages';
import { Snackbar } from '@material-ui/core';

class Login extends React.Component {
  state = {
    valueForm: [],
    ismsg:false,
    msg:""
  }

   submitForm(values) {
    // const { valueForm } = this.state;
  console.log(values.get("email"));
  setTimeout(async ()=>{
      // this.setState({ valueForm: values });
      await this.props.handleLoginWithEmail(values.get("email"), values.get("password")); 
      
      if(!this.props.data.error){
        this.props.history.push('/app');
      }

    }, 500); // simulate server latency 
  
  }

  handleErrorClose=()=>{
    this.setState({
      ismsg:false
    })
  }
  render() {
    const title = brand.name + ' - Login';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.rootFull}>
       
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.containerSide}>
          <Hidden smDown>
            <div className="w100">
              <div className={classes.openingWrap}>
                <div className={classes.openingHead}>
                  <NavLink to="/" className="login_logo">
                    <img src={logo} alt={brand.name} />
                    
                  </NavLink>
                </div>
                
              </div>
              <div className={classes.openingFooter}>
                <NavLink to="/" className={classes.back}>
                  <ArrowBack />
                  &nbsp;back to site
                </NavLink>
                
              </div>
            </div>
          </Hidden>
          <div className={classes.sideFormWrap}>
            
            <LoginFormFirebase  onSubmit={(e,p) => this.submitForm(e,p)} />
          </div>
        </div>

         <Snackbar
          anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={this.state.ismsg}
          onClose={this.handleErrorClose}
        autoHideDuration={3000}
        message={this.state.msg}
      />

      </div>
    );
  }
  componentDidMount(){
    console.log(this.props);
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  handleLoginWithEmail: PropTypes.func.isRequired,
};

const reducer = 'authReducer';
const mapStateToProps = state => ({
  state: state.get(reducer),
  data:state.get('auth')
});

const mapDispatchToProps = dispatch => ({
  handleLoginWithEmail: bindActionCreators(login, dispatch)
});

const LoginMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default withStyles(styles)(LoginMapped);
