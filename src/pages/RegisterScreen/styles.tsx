import Link from "@mui/material/Link"
import Typography from "@mui/material/Typography"

export function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="http://hicogroup.eu/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

export const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },
    mainGrid: { width: "70%" },
    imgGrid: {
        backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderTopRightRadius: "10%",
        borderBottomRightRadius: "10%",
    },
    formGrid: {
        borderTopLeftRadius: "10%",
        borderBottomLeftRadius: "10%",
    },
    formContainer: {
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    
}
