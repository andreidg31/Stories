import { makeStyles } from "@material-ui/core";

const loginStyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    marginTop: theme.spacing(8),
    alignItems: 'center',
    width: '50ex'
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
}));
  
export default loginStyles;