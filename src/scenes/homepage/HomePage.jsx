import React from 'react';

class HomePage extends React.Component {
    
    render() {
        return (
                <main
                className={classNames(classes.content, classes[`content-left`], {
                [classes.contentShift]: open,
                [classes[`contentShift-left`]]: open,
                })}
                >
                <div className={classes.drawerHeader} />
                <Typography>{'Hello World!'}</Typography>
                </main>
        );
    }
};


HomePage.propTypes = {
        classes: PropTypes.object.isRequired,
        theme : PropTypes.object.isRequired
};

export default withStyles()(HomePage);