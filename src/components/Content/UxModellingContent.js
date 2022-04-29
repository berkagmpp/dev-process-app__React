import React, { Fragment } from "react";

import Card from '../UI/Card'

import classes from './StakeholderContent.module.css'
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { BootstrapTable, TableHeaderColumn,  } from 'react-bootstrap-table';

const UxModellingContent = props => {

    return (
        <Fragment>
            {props.show ? 
                <Card>
                    <p>dddsdfsdfdfgfdgh</p>
                    <p>dddsdfsdfdfgfdgh</p>
                    <p>dddsdfsdfdfgfdgh</p>
                    <p>dddsdfsdfdfgfdgh</p>
                </Card>
            : ''}
        </Fragment>
    );
};

export default UxModellingContent;

