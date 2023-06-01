import { Container } from "@mui/material";
import React from "react";
import {CssBaseline, Box, Avatar, Grid, TextField, Button, Typography, Link} from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Registration = () =>{
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
                  //value={authlogin}
                  //onChange={e =>setLogin(e.target.value)}
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
                  //value={password}
                  //onChange={e =>setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              color='secondary'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: "#1e082b" }}
              //onClick={signUp}
            >
              Зарегистрироваться
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="" variant="body2" color='secondary' >
                  Уже есть аккаунт? Войти
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
}

export default Registration;