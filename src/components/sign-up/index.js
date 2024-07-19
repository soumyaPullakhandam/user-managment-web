import React, {useCallback, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import historyManager from "utils/historyManager";
import Path from "routes/path";
import {useHistory} from "react-router";
import {useStyles} from './style';
import {useSnackbar} from 'notistack';
import {useStore} from "hooks";
import {performSignUp, resetSignUp} from "../../context/sign-up/actions";

/**
 * Component: Sign-Up
 * This component allows user to create an new user using valid email id
 * @component
 */
export default function SignUp() {
    const classes = useStyles();
    const history = useHistory();
    const {enqueueSnackbar} = useSnackbar();
    const [fullName, setFullName] = useState( '' );
    const [email, setEmail] = useState( '' );
    const [fullNameError, setFullNameError] = useState( {
        status: false, message: ''
    } );
    const [emailError, setEmailError] = useState( {
        status: false, message: ''
    } );
    const {message1, message2} = {
        message1: 'Please fill emailID',
        message2: 'Please fill Full Name',
    }
    const {
        store: {signUp},
        dispatch
    } = useStore();
    const {registered, message, type} = signUp;

    const signUpUser = useCallback( () => {
        setEmailError( {
            status: !email,
            message: message1
        } );
        setFullNameError( {
            status: !fullName,
            message: message2
        } );
        if (fullName && email) {
            performSignUp( dispatch, fullName, email );
        }
    }, [emailError, email, fullNameError, fullName, dispatch] );

    useEffect( () => {
        if (message) {
            enqueueSnackbar( message, {
                variant: type,
                resumeHideDuration: 2000
            } );
        }
    }, [message, enqueueSnackbar, type] );

    useEffect( () => {
        if (registered) {
            historyManager( history, Path.signIn )
        }
        return () => {
            resetSignUp( dispatch )
        }
    }, [dispatch, history, registered] );


    return (
        <Container component="main" className={classes.container} maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <ContactMailIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        name="fullName"
                        error={fullNameError.status}
                        helperText={fullNameError.message}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        autoFocus
                        label="Full Name"
                        value={fullName}
                        onChange={event => {
                            setFullName( event.target.value );
                        }}/>
                    <TextField
                        variant="outlined"
                        error={emailError.status}
                        helperText={emailError.message}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={email}
                        onChange={event => {
                            setEmail( event.target.value );
                        }}/>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={signUpUser}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link component="button" onClick={() => {
                                historyManager( history, Path.signIn )
                            }}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
