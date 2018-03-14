import React from 'react';
import PropTypes from 'prop-types';
import {styles} from './HomePageStyle';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import config from 'react-global-configuration'
import { translate } from 'react-i18next'
import HomePageFormDef from './HomePageFormDef'
import Form from 'components/Form/Form'
import DevTools from 'mobx-react-form-devtools'
import testsCollection from 'store/collection/TestsCollection'

class HomePage extends React.Component {
    
    componentWillMount() {
        testsCollection.fetch();
    }
    
    render() {
        
        const tests = testsCollection;
        
        const form = new HomePageFormDef();
        DevTools.register({ form });
        DevTools.select('HomePageFormDef');
        
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
                <Form form={form} />
                </main>
        );
    }
};


HomePage.propTypes = {
        classes: PropTypes.object.isRequired
};

export default translate()(withStyles(styles, {withTheme: true})(HomePage));