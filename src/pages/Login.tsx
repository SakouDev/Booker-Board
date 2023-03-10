import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ApiService } from '../api/ApiService';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();


export default function Login({setCookie, setDataCode}: {setCookie: Function, setDataCode: Function}) {

    const [title, setTitle] = React.useState("Sign in");
    const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);


        ApiService.login({
            name: data.get('name'),
            code: data.get('password'),
        }).then((element) => {
            setDataCode(data.get('password'));
            setCookie("Menfou",element);
            navigate('/book');
        }).catch(() => {
            setTitle("Wrong credentials");
        })
  };

  return (
    <ThemeProvider theme={theme}>
      <Container 
        style={{backgroundColor : 'white', borderRadius:'20px'}} 
        sx={{
          marginTop : 20,
          height:'50vh', 
          display:'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }} 
        component="main" 
        maxWidth="md" 
      >
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                onChange={() => setTitle("Sign in")}
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
            />
            <TextField
                onChange={() => setTitle("Sign in")}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Code"
                id="password"
                autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}