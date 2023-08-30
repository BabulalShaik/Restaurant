import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { useFormik } from "formik";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;
const Login = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },

        onSubmit: (email, password) => {
            email = formik.values.email
            password = formik.values.password
            axios.post('http://localhost:3001/login', {
                email, password
            })
                .then(result => {
                    console.log(result)
                    Cookies.set('token',result.data.token)
                    if (result.data.status === "Success") {
                        navigate("/")
                    }
                })
                .catch(err => console.log(err))
        },
        validate: (values) => {
            var errors = {}
            if (!values.email) {
                errors.email = "Email is Required"
            }
            if (!values.password) {
                errors.password = "Password is Required"
            }
            return errors;
        }
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={300}
                    alignItems="center"
                    justifyContent={'center'}
                    margin="auto"
                    marginTop={3}
                    padding={2}
                    borderRadius={5}
                    boxShadow={"5px 5px 10px #ccc"}

                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}
                >
                    <Typography variant="h4" marginTop={-2} padding={1} textAlign="center">Login</Typography>

                    <TextField
                        onChange={formik.handleChange}
                        name="email"
                        value={formik.values.email}
                        margin="dense"
                        type={'email'}
                        variant="outlined"
                        placeholder="Email" />
                    {formik.errors.email ? <div className="Error">{formik.errors.email}</div> : null}
                    <TextField
                        onChange={formik.handleChange}
                        name="password"
                        value={formik.values.password}
                        margin="dense"
                        type={'password'}
                        variant="outlined"
                        placeholder="Password" />
                    {formik.errors.password ? <div className="Error">{formik.errors.password}</div> : null}
                    <Button
                        endIcon={<LoginOutlinedIcon />}
                        type="submit"
                        sx={{ marginTop: 1, borderRadius: 2 }}
                        variant="contained"
                        color="warning">Login
                    </Button>
                    <NavLink to="/signup"><Button endIcon={<HowToRegOutlinedIcon />}

                        sx={{ marginTop: 2, borderRadius: 2 }}>
                        Change to Signup
                    </Button></NavLink>
                </Box>
            </form>
        </div>
    );
}

export default Login;