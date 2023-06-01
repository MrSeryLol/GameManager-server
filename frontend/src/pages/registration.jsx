import { Container } from "@mui/material";
import React, { useContext, useState } from "react";
import {CssBaseline, Box, Avatar, Grid, TextField, Button, Typography, Link} from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useLocation, Link as RouterLink, useNavigate } from "react-router-dom";
import { HOME_ROUTE, REGISTRATION_ROUTE } from "../utils/constants";
import { registration } from "../API/authAPI";
import { observer } from "mobx-react-lite"
import { Context } from "../index.js";

const Registration = observer( () =>{
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === REGISTRATION_ROUTE
    const [registerLogin, setRegisterLogin] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    
    const signIn = async (e) => {
        try {
            let data
        console.log("Нажали на кнопку")
        e.preventDefault()
        data = await registration(registerLogin, registerPassword)
        console.log(data)
        // user.setUser(user)
        // user.setIsAuth(true);
        navigate("/")
        } catch(err) {
            alert(err.response.data.message)
        }
    }

    return(
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1e082b' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Регистрация
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  required
                  fullWidth
                  id="login"
                  label="Логин"
                  name="login"
                  value={registerLogin}
                  onChange={e =>setRegisterLogin(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  value={registerPassword}
                  onChange={e =>setRegisterPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              color='secondary'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#1e082b" }}
              onClick={signIn}
            >
              Зарегистрироваться
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/login" variant="body2" color='secondary' >
                  Уже есть аккаунт? Войти
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
})

export default Registration;