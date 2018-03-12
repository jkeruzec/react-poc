import React from 'react';
import PropTypes from 'prop-types';
import {styles} from './HomePageStyle';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import config from 'react-global-configuration';
import { translate } from 'react-i18next';

class HomePage extends React.Component {
    
    render() {
        
        const {classes, open, t} = this.props;
        
        return (
                <main
                className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: open,
                [classes[`contentShift-left`]]: open,
                })}
                >
                <div className={classes.drawerHeader} />
                <Typography>{t('hello') + config.get('apiPort')}</Typography>
                </main>
        );
    }
};


HomePage.propTypes = {
        classes: PropTypes.object.isRequired
};

export default translate()(withStyles(styles, {withTheme: true})(HomePage));