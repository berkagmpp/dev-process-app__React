import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Summary from "./components/Content/Summary";


function App() {

// {cartIsShown && <Cart onClose={hideCartHandler} />}
// cartIsShown == true => <Cart /> is shown and pass {hideCartHandler} function
    return (
        <Fragment>
            <Header />
            <Summary />
        </Fragment>
    );
}

export default App;
