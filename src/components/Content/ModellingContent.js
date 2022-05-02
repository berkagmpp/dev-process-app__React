import React, { Fragment } from "react";

import Card from '../UI/Card'
import Button from "../UI/Button";

import classes from './Content.module.css'
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import siteMap from '../../assets/sitemap.jpg'
import wireframes from '../../assets/wireframes_g.jpg'


const ModellingContent = props => {
    return (
        <Fragment>
            {props.show ? 
                <Card>
                    <h2>Part 3. Modelling the proposed website</h2>
                    <div> 
                        <h3> a) Site Map</h3>
                        <div className={classes.center}>
                            <img src={siteMap} alt="Site Map image"/>
                        </div><br /><br /><br />
                    </div>
                    <div> 
                        <h3> b) Wireframes</h3>
                        <div className={classes.center}>
                            <a target="_blank" href="https://drive.google.com/file/d/1F8ZNsNUAkankznEczO8YJMCqcByYd5es/view?usp=sharing">
                                <Button>Detail View</Button></a>
                        </div>    
                        <div className={classes.center}>
                            <img src={wireframes} alt="Wireframes"/>
                        </div><br /><br /><br />
                    </div>  
                </Card>
            : ''}
        </Fragment>
    );
};

export default ModellingContent;