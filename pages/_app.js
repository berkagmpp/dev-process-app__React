import { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavigation from '../component/layout/MainNavigation';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <MainNavigation />
            <Component {...pageProps} />
        </Fragment>
    );
};

export default MyApp;
