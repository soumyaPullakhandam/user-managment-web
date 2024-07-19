import {makeStyles} from "@material-ui/core/styles";


export const HomeStyle = makeStyles( (theme) => ({
    root: {
        minWidth: 275,
        width: '32rem',
        height: '35rem',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        left: '50%',
        color: 'white',
        alignItems:'center'
    },
    form: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

}) );
