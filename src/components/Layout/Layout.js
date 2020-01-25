import React, {Fragment} from 'react';

import './Layout.css';
import MainNav from "../MainNav/MainNav";

const Layout = ({children}) => (

    <Fragment>
        <MainNav/>
        <main className="Layout-Content">{children}</main>
    </Fragment>
);


export default Layout;