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
import { LoginForm } from "./types"
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "../../validation/LoginFormValidation"

const LoginScreen: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    })
    const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data)

    return (
        <Box sx={styles.container}>
            <Grid sx={styles.mainGrid} container component="main">
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} sx={styles.imgGrid} />
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
                            Sign in
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
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default LoginScreen
