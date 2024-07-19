import React, {useCallback, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import historyManager from "utils/historyManager";
import {useHistory} from "react-router";
import Path from 'routes/path';
import {useStore} from "../../hooks";
import {performSignIn, resetSignIn} from "../../context/sign-in/actions";
import {useStyles} from './style';
import {useSnackbar} from 'notistack';
import LockOpenIcon from '@material-ui/icons/LockOpen';

/**
 * Component: Sign-In
 * This component allows user to sign into the application
 * @component
 */
export default function SignIn() {
    const classes = useStyles();
    const history = useHistory();
    const {enqueueSnackbar} = useSnackbar();
    const {
        store: {signIn},
        dispatch
    } = useStore();
    const {loggedIn, message, type} = signIn;
    const [userName, setUserName] = useState( '' );
    const [password, setPassword] = useState( '' );

    const {message1, message2} = {
        message1: 'Please fill username',
        message2: 'Please fill password',
    }
    const [emailError, setEmailError] = useState( {
        status: false, message: ''
    } );

    const [passwordError, setPasswordError] = useState( {
        status: false, message: ''
    } );


    const signInUser = useCallback( () => {
        setEmailError( {
            status: !userName,
            message: message1
        } );
        setPasswordError( {
            status: !password,
            message: message2
        } );
        if (userName && password) {
            performSignIn( dispatch, userName, password );
        }
    }, [dispatch, message1, message2, password, userName] );

    useEffect( () => {
        if (message) {
            enqueueSnackbar( message, {
                variant: type,
                resumeHideDuration: 1000
            } );
        }
    }, [message, enqueueSnackbar, type] );

    useEffect( () => {
        if (loggedIn) {
            historyManager( history, Path.home )
        }
        return () => {
            resetSignIn( dispatch )
        }
    }, [dispatch, history, loggedIn] );

    return (
        <Container component="main" className={classes.container} maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        error={emailError.status}
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        value={userName}
                        onChange={event => {
                            setUserName( event.target.value );
                        }}
                        helperText={emailError.message}
                    />
                    <TextField
                        variant="outlined"
                        error={passwordError.status}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={event => {
                            setPassword( event.target.value );
                        }}
                        helperText={passwordError.message}
                    />
                    <Button
                        fullWidth
                        startIcon={<LockOpenIcon/>}
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={signInUser}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link  component="button" variant="body2">

                            </Link>
                        </Grid>
                        <Grid item>
                            <Link  component="button" onClick={() => {
                                historyManager( history, Path.signUp )
                            }} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
