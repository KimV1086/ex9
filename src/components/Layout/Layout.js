import React, {Fragment} from 'react';
import MainNav from "../MainNav/MainNav";
import "./Layout.css"

const Layout = ({children}) => (

    <Fragment>
        <MainNav/>
        <main className="Layout-Content">{children}</main>
    </Fragment>
);


export default Layout;