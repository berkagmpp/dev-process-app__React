import React, { Fragment } from "react";

import Card from '../UI/Card'

const SkateholderContent = props => {


    const skateholderContentStr = "SkateholderContenSkateholderContenSkateholderConten!!SkateholderContenSkateholderContenSkateholderConten!!";

    return (
        <Fragment>
            {props.show ? 
                <Card>
                    <h2>Part 1.     Stakeholder interaction and feasibility study </h2>
                    <h3>a)	Stakeholder analysis</h3>
                </Card>
            : ''}
        </Fragment>
    );
};

export default SkateholderContent;