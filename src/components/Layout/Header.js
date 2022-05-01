import React, { Fragment, useState } from "react";

import HeaderButtons from "./HeaderButtons";
import StakeholderContent from "../Content/StakeholderContent"
import UxUsabilityContent from "../Content/UxUsabilityContent"
import ModellingContent from "../Content/ModellingContent"
import ResponsiveContent from "../Content/ResponsiveContent";

import classes from './Header.module.css';
import lBanner from '../../assets/l-banner_2200x1117.jpg';

const Header = props => {
    const [showStakeholder, setShowStakeholder] = useState(false);
    const [showUx, setShowUx] = useState(false);
    const [showModelling, setShowModelling] = useState(false);
    const [showResponsive, setShowResponsive] = useState(false);

    const onStakeShowHandler = () => {
        setShowUx(false);
        setShowModelling(false);
        setShowResponsive(false);
        setShowStakeholder(prevShowStakeholder => !prevShowStakeholder); // clean way to set oposit state
    };

    const onUxShowHandler = () => {
        setShowStakeholder(false);
        setShowModelling(false);
        setShowResponsive(false);
        setShowUx(prevShowUx => !prevShowUx);
    };

    const onModellingShowHandler = () => {
        setShowStakeholder(false);
        setShowUx(false);
        setShowResponsive(false);
        setShowModelling(prevShowModelling => !prevShowModelling);
    };

    const onResponsiveShowHandler = () => {
        setShowStakeholder(false);
        setShowUx(false);
        setShowModelling(false);
        setShowResponsive(prevShowResponsive => !prevShowResponsive);
    };


    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes['main-header']}>
                    <a href="/">
                        <h1>TheHAUKAI PROJECT</h1>
                    </a>
                </div>
                <HeaderButtons onStakeClick={onStakeShowHandler} 
                               onUxClick={onUxShowHandler} 
                               onModellingClick={onModellingShowHandler}
                               onResponsiveClick={onResponsiveShowHandler} />
            </header>
            <div className={classes['main-image']}>
                <img src={lBanner} alt="The Haukai backgroung" />
            </div>
            { showStakeholder && <StakeholderContent show={showStakeholder} /> }
            { showUx && <UxUsabilityContent show={showUx} /> }
            { showModelling && <ModellingContent show={showModelling} /> }
            { showResponsive && <ResponsiveContent show={showResponsive} /> }
        </Fragment>
    );
}

export default Header;