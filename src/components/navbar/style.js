import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    logout: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    divider: {
        width: '10px',
        backgroundColor: 'transparent'
    },
    toolBar: {
        minHeight: 55
    },
    menuButton: {
        marginRight: 10
    },
    profileMenu: {
        height: 1
    },
    logo: {
        width: '12rem'
    },
    title: {
        flexGrow: 1,
    },
    menuItem: {
        padding: 20,
        border: '1px solid transparent'
    },
    listItem: {
        border: '1px solid #bdbdbd',
        color: 'black',
        backgroundColor: 'transparent'
    },
    badge: {
        border: '1px solid #bdbdbd',
        color: 'black',
        backgroundColor: 'transparent'
    }
}));
