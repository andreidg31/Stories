import { makeStyles } from "@material-ui/core";

const newPoststyles = makeStyles((theme) => ({
  paper: {
    margin: 'auto',
    marginTop: theme.spacing(8),
    alignItems: 'center',
    width: '50%'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
}));

export default newPoststyles;