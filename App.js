import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from './node_modules/@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Image} from 'react-native';
import 'typeface-roboto'

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://material-ui.com/">
        Ecole241
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
      fontFamily: "Roboto",
    },
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#548235",
    padding: 6,
    fontSize: 18,
    color: "white",
    '&:hover':{
    backgroundColor: "#548235",
    color: "white",
   }
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Image
      style={{width: 300,
        height: 100,
        marginLeft: 20,
        marginTop: 60
       }}
          source={{uri: require("./assets/img/logo.png")}}
        />
      <div className={classes.paper}>
        <Typography component="h5" variant="h5" style={{fontSize: 25}}>
          Connexion
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            margin="normal"
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
          />
          <FormControlLabel
            control={<Checkbox value="se-souvenir" color="grey" />}
            label="Se Souvenir de moi"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Se Connecter
          </Button>
          <Grid container style={{marginTop: 20}}>
            <Grid item xs>
              <Link href="#" variant="body2" style={{fontSize: 13}}>
                Mot de passe oublié ?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2"style={{fontSize: 13}}>
                {"Pas de compte ? S'inscrire"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
