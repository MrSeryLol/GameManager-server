import { Avatar, Box, Button, Container, TextField, Typography, CssBaseline, Grid, Link } from '@mui/material';
import React, { useContext, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/constants';
import { observer } from 'mobx-react-lite';
import { login } from '../API/authAPI';
import { Context } from '..';

const Authorization = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()

    const [authLogin, setAuthLogin] = useState("")
    const [authPassword, setAuthPassword] = useState("")

    const logIn = async (e) => {
        try {
            let data
            console.log("Нажали на кнопку")
            e.preventDefault()
            data = await login(authLogin, authPassword)
            console.log(data)
            user.setUser(user)
            console.log(user)
            user.setIsAuth(true);
            navigate("/")
        } catch (err) {
            alert(err)
        }

    }
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
                        value={authLogin}
                        onChange={e => setAuthLogin(e.target.value)}
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
                        value={authPassword}
                        onChange={e => setAuthPassword(e.target.value)}
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2, bgcolor: "#1e082b" }}
                        onClick={logIn}
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
});

export default Authorization;