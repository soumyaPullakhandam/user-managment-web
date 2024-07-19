import React, {useCallback, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import NavBar from "components/navbar/NavBar";
import {useStyles} from './style';
import {useStore} from "../../hooks";
import {getUserDetails} from "../../context/user-info/actions";
import {useSnackbar} from "notistack";

/**
 * Component: User Home Screen
 * This component shows analysis and progress
 * @component
 */
export default function Home() {
    const classes = useStyles();
    const {enqueueSnackbar} = useSnackbar();
    const {
        store: {userInfo},
        dispatch
    } = useStore();
    const { data, message, type} = userInfo;

    useEffect( () => {
        if (message) {
            enqueueSnackbar( message, {
                variant: type,
                resumeHideDuration: 1000
            } );
        }
    }, [message, enqueueSnackbar, type] );

    const userDetails = useCallback( () => {
         getUserDetails(dispatch)
    },[dispatch]);

    useEffect( () => {
        userDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <React.Fragment>
            <NavBar/>
            <Container component="main" className={classes.container} maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <EmojiEmotionsIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Hello {data?.data?.fullname} !
                    </Typography>
                </div>
            </Container>
        </React.Fragment>
    );
}
