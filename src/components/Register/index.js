import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import LinkMui from "@mui/material/Link";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { CssTextField, CssLink, CssButton } from "../../commons/CssMUI";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MuiPhoneNumber from "material-ui-phone-number";
import PhoneInput from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../actions/userActions.js";
import Alert from "../Alert";
import LoadingPage from "../Loading";
import {useNavigate} from "react-router-dom"

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    pinkColor: {
      contrastText: "#fff",
    },
  },
});

function Singup() {
  const dispatch = useDispatch();
  const [birthday, setBirthday] = useState(new Date());
  const isLoading = useSelector((state) => state.loadReducer);
  const navigate = useNavigate()
  const handleChange = (newValue) => {
    setBirthday(newValue);
  };
  const init = {
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    birthday: "",
    phone: "",
    avatar: null,
    schoolName: "",
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm(init);
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(registerAction(data));
  };
  return (
    <ThemeProvider theme={theme}>
        <Alert />
        <Box sx={{ margin: "auto", width: "100vh" }}>
          <Grid container component="main">
            <Grid item xs={12} sm={12} md={12} square>
              <Box
                sx={{
                  marginTop: 6,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: 3,
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "pink" }}></Avatar>
                <Typography component="h1" variant="h5" sx={{ color: "#FC6C85" }}>
                  SIGN UP
                </Typography>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 1 }}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ width: "100%" }}>
                      <CssTextField
                        autoComplete="given-name"
                        name="firstname"
                        required
                        fullWidth
                        id="firstname"
                        label="First Name"
                        aria-invalid={errors.firstname ? "true" : "false"}
                        autoFocus
                        {...register("firstname", {
                          required: "This input is required.",
                          minLength: {
                            value: 2,
                            message: "This input must exceed 10 characters",
                          },
                          maxLength: {
                            value: 25,
                            message:
                              "This input can't be longer than 25 characters",
                          },
                        })}
                        error={!!errors?.firstname}
                        helperText={
                          errors?.firstname ? errors.firstname.message : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <CssTextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                        {...register("lastName", {
                          required: "This input is required.",
                          minLength: {
                            value: 2,
                            message: "This input must exceed 10 characters",
                          },
                          maxLength: {
                            value: 25,
                            message:
                              "This input can't be longer than 25 characters",
                          },
                        })}
                        error={!!errors?.lastName}
                        helperText={
                          errors?.lastName ? errors.lastName.message : null
                        }
                      />
                    </Grid>
                  </Grid>
                  <CssTextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    {...register("email", {
                      required: "This input is required.",
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
                    error={!!errors?.password}
                    helperText={errors?.password ? errors.password.message : null}
                  />
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ width: "100%" }}>
                      <LocalizationProvider
                        fullWidth
                        dateAdapter={AdapterDateFns}
                      >
                        <DatePicker
                          mask="__/__/____"
                          onChange={handleChange}
                          value={birthday}
                          renderInput={(props) => (
                            <TextField
                              {...props}
                              {...register("birthday", {
                                required: "This input is required.",
                              })}
                            />
                          )}
                          label="Birthday"
                          error={!!errors?.birthday}
                          helperText={
                            errors?.birthday ? errors.birthday.message : null
                          }
                        />
                      </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <CssTextField
                        label="Phone"
                        type="tel"
                        {...register("phone", {
                          required: "This input is required.",
                          pattern: {
                            value: /\d+/,
                            message: "This input is number only.",
                          },
                        })}
                        fullWidth
                        error={!!errors?.phone}
                        helperText={errors?.phone ? errors.phone.message : null}
                      />
                    </Grid>
                  </Grid>
                  <CssTextField
                    className="focus-color"
                    margin="normal"
                    required
                    fullWidth
                    label="Avatar"
                    name="avatar"
                    autoFocus
                    {...register("avatar", {
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
                    error={!!errors?.avatar}
                    helperText={errors?.avatar ? errors.avatar.message : null}
                  />
                  <CssTextField
                    className="focus-color"
                    margin="normal"
                    required
                    fullWidth
                    label="School Name"
                    name="schoolName"
                    autoFocus
                    {...register("schoolName", {
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
                    error={!!errors?.schoolName}
                    helperText={
                      errors?.schoolName ? errors.schoolName.message : null
                    }
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    sx={CssButton}
                  >
                    Sign Up
                  </Button>
                  <Grid container justifyContent="center">
                    <Grid item>
                      <Link to="/" style={CssLink}>
                          Already have an account? Sign In
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </ThemeProvider>
  );
}
export default Singup;
