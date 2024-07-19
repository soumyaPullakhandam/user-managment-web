import React from "react";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import {Divider, Typography} from "@material-ui/core";
import {useStore} from "../../hooks";
import {useStyles} from "./style";

const Loader = () => {
    const classes = useStyles();
    const {
        store: {load}
    } = useStore();
    const {loading} = load;

    return (
        <div>
            <Backdrop className={classes.backdrop} open={!!loading}>
                <div className={classes.paper}>
                    <CircularProgress color="inherit"/>
                    <Divider/>
                    <Typography>Please wait</Typography>
                    <Typography>loading...</Typography>
                </div>
            </Backdrop>
        </div>
    );
}

export default Loader;
