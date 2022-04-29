import React, { Fragment } from "react";

import Button from "../UI/Button"

const HeaderButtons = props => {
    return (
        <Fragment>
            <Button onClick={props.onClick}>Stakeholder &amp; Feasibility Study</Button>
            <Button onClick={props.onClick}>UX, Usability, Accessibility &amp; Process Modelling</Button>
        </Fragment>
    );
};

export default HeaderButtons;