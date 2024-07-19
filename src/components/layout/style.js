import {makeStyles} from "@material-ui/core/styles";
import bgmenu from 'assets/bgmenu.jpg';

const drawerWidth = 240;

export const LayoutStyle = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    drawerOpen: {
        width: drawerWidth,
        /*transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),*/
        backgroundImage: theme.name !== 'dark' ? `url('${bgmenu}')` : '',
        backgroundSize: 'cover',
        color: 'white'
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
        backgroundImage: theme.name !== 'dark' ? `url('${bgmenu}')` : '',
        backgroundSize: 'cover',
        color: 'white'
    },
    stickToBottomClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        position: 'fixed',
        bottom: 4,
        width: theme.spacing(7) + 16,
    },
    stickToBottomOpen: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        position: 'fixed',
        bottom: 4,
        width: drawerWidth,
    },
    list: {
        padding: 8
    },
    listItem: {
        backgroundColor: '#007bff40',
        borderRadius: 8
    },
    divider: {
        height: 4,
        backgroundColor: 'transparent'
    },
    iconColor: {
        color: "white"
    }
}));
