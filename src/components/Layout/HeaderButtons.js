import React, { Fragment } from "react";

import Button from "../UI/Button"

const HeaderButtons = props => {
    return (
        <Fragment>
            <Button onClick={props.onStakeClick}>Stakeholder &amp; Feasibility Study</Button>
            <Button onClick={props.onUxClick}>UX, Usability, Accessibility</Button>
            <Button onClick={props.onModellingClick}>Modelling Process</Button>
        </Fragment>
    );
};

export default HeaderButtons;