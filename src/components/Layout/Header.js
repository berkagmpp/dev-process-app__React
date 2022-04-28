import React, { Fragment, useState } from "react";

import StakeholderButton from "./StakeholderButton";
import StakeholderContent from "../Content/StakeholderContent"

import classes from './Header.module.css';
import lBanner from '../../assets/l-banner_2200x1117.jpg';

const Header = props => {

    const [showStakeholder, setShowStakeholder] = useState();

    const toggleShowHandler = event => {
        setShowStakeholder(prevShowStakeholder => !prevShowStakeholder);  // clean way to set oposit state
    };

    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes['main-header']}>
                    <h1>TheHaukai Project</h1>
                </div>
                <StakeholderButton onClick={toggleShowHandler} />
            </header>
            <div className={classes['main-image']}>
                <img src={lBanner} alt="The Haukai backgroung" />
            </div>
            <StakeholderContent show={showStakeholder} />
        </Fragment>
    );
}

export default Header;