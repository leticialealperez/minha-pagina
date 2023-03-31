import { Grid, Typography, Box, TextField, Button, Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

const Login: React.FC = () => {
    return (
        <Grid container height="100vh" >
            <Grid item xs={false} sm={4} md={8} bgcolor='black' sx={ { background: 'url(https://images.pexels.com/photos/15652571/pexels-photo-15652571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) no-repeat center / cover'} } />
            
            
            <Grid item xs={12} sm={8} md={4}>
                <Grid container height="100%" alignItems="center">
                    <Grid item xs={12} height="50%">
                        <Avatar sx={{ bgcolor: pink[500], margin: '0 auto' }}>
                            <Person />
                        </Avatar>
                        <Typography variant='h4' textAlign="center">Acessar App</Typography>
                        <Box component="form" padding={3}>
                            <TextField margin='normal' id="email" label="E-mail" variant="outlined" fullWidth/>
                            <TextField margin='normal' id="password" label="Senha" variant="outlined" fullWidth/>
                            <Button variant="contained" size='large' fullWidth sx={{ marginTop: 2}}>Logar</Button>
                        </Box>
                        <Typography textAlign="center" variant='body2'>
                            Não possui uma conta? {" "}
                            <Link to='/cadastro' style={{ color: 'inherit'}}>Cadastre-se</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login;