import { Avatar, Box, Button, Container, TextField, Typography,CssBaseline,Grid,Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
// import { login } from '../http/userAPI';
// import { useUser } from '../store/store';


const Authorization = () => {
    // const signIn = async (e) => {
    //     try {
    //         e.preventDefault();
    //         const response = await login(authlogin,password);
    //         newRole(response.role);
    //         SetIsAuth(true);
    //         navigate("/main");
    //     } catch (e) {
    //         SetMes(e.response.data.message);
    //         alert(mes);
    //         setOpen(true);
    //         setLogin("");
    //         setPassword("");
    //     }
    // }
    // const newRole = useUser((state) => (state.SetRole));
    // const {mes,SetMes} = useUser((state) => ({mes: state.errorMessage, SetMes: state.SetMes}));
    // const {isAuth,SetIsAuth} = useUser((state) => ({ isAuth: state.isAuth, SetIsAuth : state.SetIsAuth}));
    // const [authlogin,setLogin] = useState("");
    // const [password,setPassword] = useState("");
    // const [open,setOpen] = useState(false);
    // const navigate = useNavigate();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "#1e082b" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='login'
                        label='Логин'
                        name='login'
                        autoFocus
                        // value={authlogin}
                        // onChange={e =>setLogin(e.target.value)}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Пароль'
                        type='password'
                        id='password'
                        // value={password}
                        // onChange={e =>setPassword(e.target.value)}
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2, bgcolor: "#1e082b"}}
                        // onClick={signIn}
                    >
                        Войти
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="" variant="body2" color="secondary" >
                                Еще нет аккаунта? Зарегистрироваться
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Authorization;