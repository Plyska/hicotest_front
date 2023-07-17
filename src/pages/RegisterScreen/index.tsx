import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { Copyright, styles } from "./styles"
import { useForm, SubmitHandler } from "react-hook-form"
import { RegistetionForm } from "./types"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "../../validation/RegisterFormValidation"

const RegisterScreen: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegistetionForm>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    })

    const onSubmit: SubmitHandler<RegistetionForm> = (data) => console.log(data)

    return (
        <Box sx={styles.container}>
            <Grid sx={styles.mainGrid} container component="main">
                <CssBaseline />
                <Grid
                    sx={styles.formGrid}
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box sx={styles.formContainer}>
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                {...register("email")}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                helperText={
                                    errors?.email && errors?.email?.message
                                }
                                error={!!errors?.email}
                            />
                            <TextField
                                {...register("name")}
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                name="name"
                                autoComplete="name"
                                helperText={
                                    errors?.name && errors?.name?.message
                                }
                                error={!!errors?.name}
                            />
                            <TextField
                                {...register("password")}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                helperText={
                                    errors?.password &&
                                    errors?.password?.message
                                }
                                error={!!errors?.password}
                            />
                            <TextField
                                {...register("confirm_password")}
                                margin="normal"
                                required
                                fullWidth
                                name="confirm_password"
                                label="Confirm Password"
                                type="password"
                                id="confirm_password"
                                autoComplete="current-password"
                                helperText={
                                    errors?.confirm_password &&
                                    errors?.confirm_password?.message
                                }
                                error={!!errors?.confirm_password}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/" variant="body2">
                                        {"Do have an account? Log In"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={false} sm={4} md={7} sx={styles.imgGrid} />
            </Grid>
        </Box>
    )
}

export default RegisterScreen
