import React from 'react';

import classes from './Summary.module.css';

const Summary = props => {
    return (
        <div className={classes.summary}>
            <h2>Developing Plan & Process</h2>
            <p>This page is made for displaying the design process and required planning documents for the Haukai Restaurant App Development Project.</p>
            <p>Feel free to explore the menu at the top!</p>
            <span>- The site is optimised for large displays and made by React 18.0.0 -</span>
        </div>
    );
};

export default React.memo(Summary);