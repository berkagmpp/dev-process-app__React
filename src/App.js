import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";


function App() {

// {cartIsShown && <Cart onClose={hideCartHandler} />}
// cartIsShown == true => <Cart /> is shown and pass {hideCartHandler} function
    return (
        <Fragment>
            <Header />
        </Fragment>
    );
}

export default App;
