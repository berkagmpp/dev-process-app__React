import React, { Fragment } from "react";

import Button from "../UI/Button";

import classes from './Header.module.css';
import lBanner from '../../assets/l-banner_2200x1117.jpg';

const Header = props => {


    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes['main-header']}>
                    <h1>TheHaukai Project</h1>
                </div>
                <div>
                <Button>Stakeholder &amp; feasibility study</Button>
                <Button>Stakeholder interaction and feasibility study</Button>
                <Button>Stakeholder interaction and feasibility study</Button>
                </div>
            </header>
            <div className={classes['main-image']}>
                <img src={lBanner} alt="The Haukai backgroung" />
            </div>
        </Fragment>
    );
}

export default Header;