import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { Field, reduxForm } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import Ionicon from 'react-ionicons';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.png';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import {
  signInWithGithub,
  signInWithGoogle,
  signInWithTwitter,
  closeMsgAction
} from 'enl-redux/actions/authActions';
import { CheckboxRedux, TextFieldRedux } from './ReduxFormMUI';
import MessagesForm from './MessagesForm';
import messages from './messages';
import styles from './user-jss';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

class LoginForm extends React.Component { // eslint-disable-line
  state = {
    showPassword: false,
  }

  handleClickShowPassword = () => {
    const { showPassword } = this.state;
    this.setState({ showPassword: !showPassword });
  };

  componentWillMount() {
    console.log("component will mount props ---> ", this.props)
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  onChange=(e)=>{
    // console.log(e.target.value);
    // e.target.value
    this.setState({
      [e.target.name]:e.target.value
    })

  }
  handleSubmit=(e)=>{
    this.setState({
      email:"",password:""
    });
  }
  render() {
    const {
      classes,
      handleSubmit,
      pristine,
      submitting,
      intl,
      signInWithGithubFn,
      signInWithGoogleFn,
      signInWithTwitterFn,
      messagesAuth,
      closeMsg,
      loading,
      variant
    } = this.props;
    const { showPassword,email,password } = this.state;
    console.log('user login props ---> ', this.props);
    return (
      <Paper className={classes.sideWrap}>
        <Hidden mdUp>
          <div className="login_logo">
            <NavLink to="/" className={classes.brand}>
              <img src={logo} alt={brand.name} />
              
            </NavLink>
          </div>
        </Hidden>
        <div className={classes.topBar}>
          <Typography variant="h4" className="login_title">
            <FormattedMessage {...messages.login} />
          </Typography>
           
        </div>
        {
          messagesAuth !== null || ''
            ? (
              <MessagesForm
                variant={variant}
                className={classes.msgUser}
                message={messagesAuth}
                onClose={closeMsg}
              />
            )
            : ''
        }
        <section className={classes.pageFormSideWrap}>
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="email"
                  component={TextFieldRedux}
                  onChange={this.onChange}
                  value={this.state.email}
                  placeholder="User Id"
                  label="User Id"
                  type={'text'}
                  required
                  validate={[required]}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="password"
                  component={TextFieldRedux}
                  type={showPassword ? 'text' : 'password'}
                  label={intl.formatMessage(messages.loginFieldPassword)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  required
                  validate={[required]}
                  className={classes.field}
                />
              </FormControl>
            </div>
            <div className={classes.optArea}>
              <FormControlLabel
                className={classes.label}
                control={<Field name="checkbox" component={CheckboxRedux} />}
                label={intl.formatMessage(messages.loginRemember)}
              />
              <Button size="small" component={LinkBtn} to="/reset-password" className={classes.buttonLink}>
                <FormattedMessage {...messages.loginForgotPassword} />
              </Button>
            </div>
            <div className={classes.btnArea}>
              <Button variant="contained" disabled={loading} fullWidth color="primary" size="large" type="submit">
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                <FormattedMessage {...messages.loginButtonContinue} />
                {!loading && <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall, classes.signArrow)} disabled={submitting || pristine} />}
              </Button>
            </div>
          </form>
        </section>
      </Paper>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: intlShape.isRequired,
  messagesAuth: PropTypes.string,
  signInWithGithubFn: PropTypes.func.isRequired,
  signInWithGoogleFn: PropTypes.func.isRequired,
  signInWithTwitterFn: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  closeMsg: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  messagesAuth: null,
  loading: false
};

const LoginFormReduxed = reduxForm({
  form: 'immutableExample',
  enableReinitialize: true,
})(LoginForm);

const mapDispatchToProps = {
  signInWithGithubFn: signInWithGithub,
  signInWithGoogleFn: signInWithGoogle,
  signInWithTwitterFn: signInWithTwitter,
  closeMsg: closeMsgAction
};

const reducerAuth = 'auth';
const mapStateToProps = state => ({
  messagesAuth: state.get(reducerAuth).message,
  loading: state.get(reducerAuth).loading,
  variant:state.get(reducerAuth).variant,
  ...state,
});

const LoginFormMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormReduxed);

export default withStyles(styles)(injectIntl(LoginFormMapped));
