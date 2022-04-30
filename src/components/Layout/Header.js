import React, { Fragment, useState } from "react";

import HeaderButtons from "./HeaderButtons";
import StakeholderContent from "../Content/StakeholderContent"
import UxUsabilityContent from "../Content/UxUsabilityContent"
import Summary from "../Content/Summary";

import classes from './Header.module.css';
import lBanner from '../../assets/l-banner_2200x1117.jpg';

const Header = props => {
    const [showStakeholder, setShowStakeholder] = useState(false);
    const [showUx, setShowUx] = useState(false);

    const onStakeShowHandler = () => {
        setShowUx(false);
        setShowStakeholder(prevShowStakeholder => !prevShowStakeholder); // clean way to set oposit state
    };

    const onUxShowHandler = () => {
        setShowStakeholder(false);
        setShowUx(prevShowUx => !prevShowUx);
    };

    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes['main-header']}>
                    <h1>TheHaukai Project</h1>
                </div>
                <HeaderButtons onStakeClick={onStakeShowHandler} onUxClick={onUxShowHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={lBanner} alt="The Haukai backgroung" />
            </div>
            <Summary />
            { showStakeholder && <StakeholderContent show={showStakeholder} /> }
            { showUx && <UxUsabilityContent show={showUx} /> }
        </Fragment>
    );
}

export default Header;