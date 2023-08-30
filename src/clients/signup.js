import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import axios from "axios"
import { NavLink, useNavigate } from "react-router-dom"
import { useFormik } from "formik";


const Signup = () => {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: ""
        },
        onSubmit: (name, email, password) => {
            name = formik.values.name
            email = formik.values.email
            password = formik.values.password
            axios.post('http://localhost:3001/signup', {
                name, email, password
            })
                .then(result => {
                    console.log(result)
                    navigate('/login')
                })
                .catch(err => console.log(err))
        },
        validate: (values) => {
            var errors = {}
            if (!values.name) {
                errors.name = "Name is Required"
            }
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
                    <Typography variant="h4" marginTop={-2} padding={1} textAlign="center">Signup</Typography>

                    <TextField
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        marginTop="dense"
                        id="name"
                        name="name"


                        type={'text'}
                        variant="outlined"
                        placeholder="Name" />
                    {formik.errors.name ? <div className="Error">{formik.errors.name}</div> : null}
                    <TextField
                        onChange={formik.handleChange}
                        name="email"
                        id="email"
                        value={formik.values.email}
                        margin="dense"
                        type={'email'}
                        variant="outlined"
                        placeholder="Email" />
                    {formik.errors.email ? <div className="Error">{formik.errors.email}</div> : null}
                    <TextField
                        onChange={formik.handleChange}
                        name="password"
                        id="password"
                        value={formik.values.password}
                        margin="dense"
                        type={'password'}
                        variant="outlined"
                        placeholder="Password" />
                    {formik.errors.password ? <div className="Error">{formik.errors.password}</div> : null}
                    <Button
                        endIcon={<HowToRegOutlinedIcon />}
                        type="submit"
                        sx={{ marginTop: 1, borderRadius: 2 }}
                        variant="contained"
                        color="warning">
                        Signup
                    </Button>
                    <NavLink to="/login"><Button endIcon={<LoginOutlinedIcon />}

                        sx={{ marginTop: 2, borderRadius: 2 }}>
                        Change to Login
                    </Button></NavLink>

                </Box>
            </form>
        </div>
    );
}

export default Signup;