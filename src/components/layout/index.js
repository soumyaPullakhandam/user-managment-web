import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {LayoutStyle} from "./style";
import Loader from "components/busy-loader";

/**
 *  @component
 * @param props
 *  enclosing small components
 */
export const Layout = (props) => {
    const classes = LayoutStyle();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Loader/>
            <main className={classes.content}>
                <Toolbar/>
                {props.children}
            </main>
        </div>
    );
}
