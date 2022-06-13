import React, {useEffect} from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinkMui from "@mui/material/Link";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { CssTextField, CssLink, CssButton } from "../../commons/CssMUI";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../actions/userActions.js";
import Alert from "../Alert";
import LoadingPage from "../Loading";
import {useNavigate} from "react-router-dom"
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    pinkColor: {
      main: "pink",
      contrastText: "#fff",
    },
  },
});

const initialForm = {
  email: "",
  password: "",
};

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(initialForm);

  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('user'))
      navigate('/todo')
  },[])
  const isLoading = useSelector((state) => state.loadReducer);
  const dispatch = useDispatch();
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(loginUserAction(data));
  };
  return (
    <ThemeProvider theme={theme}>
   { isLoading ? <LoadingPage/> 
    :
    <>
    <Alert />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={false} sm={6} md={7} className="bg-img" />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          sx={{ background: "#f3d0e757" }}
        >
          <Box
            sx={{
              marginTop: 8,
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "pink" }}></Avatar>
            <Typography component="h1" variant="h5" sx={{ color: "#FC6C85" }}>
              SIGN IN
            </Typography>
            <Box
              component="form"
              noValidate
              sx={{ mt: 1 }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <CssTextField
                className="focus-color"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                {...register("email", {
                  required: "Required field",
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                error={!!errors?.email}
                helperText={errors?.email ? errors.email.message : null}
              />
              <CssTextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                {...register("password", {
                  required: "This input is required.",
                  minLength: {
                    value: 6,
                    message: "This input must exceed 6 characters",
                  },
                  maxLength: {
                    value: 25,
                    message: "This input can't be longer than 25 characters",
                  },
                })}
                autoComplete="current-password"
                error={!!errors?.email}
                helperText={errors?.email ? errors.email.message : null}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                  />
                }
                label="Remember me"
                sx={{ color: "#FC6C85" }}
              />
              <Button type="submit" fullWidth variant="outlined" sx={CssButton}>
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/" style={CssLink}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                    <Link to="/singup" style={CssLink}>
                      Don't have an account? Sign Up
                    </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
   
      }
    </ThemeProvider>
  );
}
export default Login;
