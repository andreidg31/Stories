import { makeStyles } from "@material-ui/core";

const publicCardStyles = makeStyles((theme) => ({
    card: {
        marginTop: theme.spacing(4),
        marginRight: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginLeft: theme.spacing(4),
        width: '30ex',
        height: '5em'
    }
}));

export default publicCardStyles;