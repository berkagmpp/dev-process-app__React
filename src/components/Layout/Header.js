import React, { Fragment, useState } from "react";

import HeaderButtons from "./HeaderButtons";
import StakeholderContent from "../Content/StakeholderContent"
import Summary from "../Content/Summary";

import classes from './Header.module.css';
import lBanner from '../../assets/l-banner_2200x1117.jpg';

const Header = props => {

    const [showStakeholder, setShowStakeholder] = useState(false);
    const [showSummary, setShowSummary] = useState(true);

    const toggleShowHandler = event => {
        setShowStakeholder(prevShowStakeholder => !prevShowStakeholder);  // clean way to set oposit state
        setShowSummary(prevShowSummary => !prevShowSummary);
    };

    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes['main-header']}>
                    <h1>TheHaukai Project</h1>
                </div>
                <HeaderButtons onClick={toggleShowHandler} />
            </header>
            <div className={classes['main-image']}>
                <img src={lBanner} alt="The Haukai backgroung" />
            </div>
            <StakeholderContent show={showStakeholder} />
            <Summary show={showSummary}/>
        </Fragment>
    );
}

export default Header;