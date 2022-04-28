import React, { Fragment, useState } from "react";


import Header from "./components/Layout/Header";
import Summary from "./components/Meals/Summary";


function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false);
    }

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
