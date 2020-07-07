import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';

import {
  CounterIconsWidget,
  PerformanceChartWidget,
  DateWidget,
  TaskWidget,
  WeatherWidget,
  ContactWidget,
  TimelineWidget,
  FilesWidget,
} from 'enl-components';
import styles from './dashboard-jss';


class AnalyticDashboard extends PureComponent {
  render() {
    const title = brand.name + ' - Personal Dashboard';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        {/* 1st Section */}
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12}>
            <CounterIconsWidget />
          </Grid>
        </Grid>
        <Divider className={classes.divider} />
        {/* 2nd Section */}
        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12}>
            <PerformanceChartWidget />
          </Grid>
        </Grid>
        {/* 3rd Section */}
        <Grid container spacing={3} className={classes.root}>
          <Grid item md={6} xs={12}>
            <Divider className={classes.divider} />
            {/* <ContactWidget />*/}
            <DateWidget />           
          </Grid>
          <Grid item md={6} xs={12}>
            <Divider className={classes.divider} />
            <WeatherWidget />
          </Grid>
        </Grid>
        


      </div>
    );
  }

}

AnalyticDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};



const reducer = 'auth';
const mapStateToProps = state => ({
  data: state.get("auth"),
});

const mapDispatchToProps = dispatch => ({

});

const Mapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnalyticDashboard);

export default withStyles(styles)(Mapped);