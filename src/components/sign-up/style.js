import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 5,
        color: '#333',
        fontFamily: 'sans-serif',
        lineHeight: 1.5,
        padding: '1rem 2rem',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
