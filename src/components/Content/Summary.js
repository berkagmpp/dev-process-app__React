import React, { Fragment } from 'react';
import classes from './Summary.module.css';

const Summary = props => {
    return (
        <section className={classes.summary}>
            <h2>Developing Plan & Process</h2>
            <p>This page is made for displaying the design process and required planning documents for the Haukai Restaurant App Development Project.</p>
            <p>Feel free to explore the menu at the top!</p>
        </section>
    );
};

export default Summary;