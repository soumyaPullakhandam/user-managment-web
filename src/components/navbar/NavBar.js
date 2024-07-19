import React from 'react';
import Toolbar from "@material-ui/core/Toolbar";
import {AppBar, Avatar, Divider, Fab, IconButton, Typography,} from "@material-ui/core";
import {useStyles} from './style';
import ExitApp from '@material-ui/icons/ExitToAppOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './style.css'
import {useHistory} from "react-router";
import Path from 'routes/path';
import historyManager from "../../utils/historyManager";
import {useStore} from "../../hooks";
import {resetSignIn} from "../../context/sign-in/actions";

/**
 * Component: Nav Bar
 * This component shows App bar with buttons and logo
 * @component
 */
const NavBar = () => {
    const classes = useStyles();
    const history = useHistory();
    const {
        dispatch
    } = useStore();


    /**
     * @function
     * logout from application
     */
    const onLogout = () => {
        resetSignIn( dispatch );
        historyManager( history, Path.signIn );
        localStorage.removeItem( 'access_token' );
    };


    return (
        <AppBar color={'default'} position="fixed" className={classes.appBar}>
            <Toolbar variant="dense">
                <IconButton className={classes.profileMenu} onClick={() => {
                    history.push( {
                        pathname: Path.home
                    } )
                }}>
                    <Avatar variant="rounded" className={classes.avatar}>
                        <AccountCircleIcon/>
                    </Avatar>
                </IconButton>
                <Typography variant="h6" className={classes.title} noWrap>User Management</Typography>
                <Divider orientation="vertical" className={classes.divider} flexItem/>
                <Fab variant="extended" onClick={onLogout} style={{height: '2rem'}}>
                    <ExitApp/>
                    Logout
                </Fab>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;
