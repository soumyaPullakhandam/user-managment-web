import React, {useCallback, useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import historyManager from "../../utils/historyManager";
import Path from "../../routes/path";
import {useHistory} from "react-router";
import {useStyles} from './style';
import {useStore} from "../../hooks";
import {createUserPassword, resetSignUp} from "../../context/sign-up/actions";
import {useSnackbar} from "notistack";


export default function CreatePassword(props) {
    const classes = useStyles();
    const history = useHistory();
    const [token, setToken] = useState( '' );
    const [password, setPassword] = useState( '' );
    const [retypePassword, setRetypePassword] = useState( '' );
    const {enqueueSnackbar} = useSnackbar();
    const {message1, message2, message3} = {
        message1 : 'Please fill the password',
        message2 : 'Please retype the password',
        message3 : 'Password is not matching',
    }
    const [passwordError, setPasswordError] = useState( {
        status: false, message: ''
    } );
    const [retypePasswordError, setRetypePasswordError] = useState( {
        status: false, message: ''
    } );
    const {
        store: {signUp},
        dispatch
    } = useStore();
    const {message, type, created} = signUp;

    useEffect( () => {
        setToken( props.param )
    }, [props.param] );

    useEffect( () => {
        if (message) {
            enqueueSnackbar( message, {
                variant: type,
                resumeHideDuration: 2000
            } );
        }
         if(!!created){
                 historyManager( history, Path.home )
            }
        return () => {
            resetSignUp(dispatch)
        }
    }, [message, enqueueSnackbar, type, dispatch] );

    const completeRegistration = useCallback( () => {
        setPasswordError( {
            message: message1,
            status: !password
        } );
        setRetypePasswordError( {
            message: message2,
            status: !retypePassword
        } );


        if (password && retypePassword) {
            if (password !== retypePassword) {
                setPasswordError( {
                    message: message3,
                    status: true
                } );
                setRetypePasswordError( {
                    message: message3,
                    status: true
                } );
            } else {
                createUserPassword( dispatch, password, token )
            }

        }
    }, [dispatch, history, message1, message2, message3, password, retypePassword, token] );

    return (
        <Container component="main" className={classes.container} maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <VpnKeyIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Create Password
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                error={passwordError.status}
                                helperText={passwordError.message}
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
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                error={retypePasswordError.status}
                                helperText={retypePasswordError.message}
                                required
                                fullWidth
                                name="password"
                                label="Retype Password"
                                type="password"
                                id="password2"
                                value={retypePassword}
                                onChange={event => {
                                    setRetypePassword( event.target.value );
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={completeRegistration}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    );
}
