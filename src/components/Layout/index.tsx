import * as React from "react"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import List from "@mui/material/List"
import CssBaseline from "@mui/material/CssBaseline"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import { AppBar, Drawer, DrawerHeader } from "./styles"
import { ROUTES, projectName } from "../../constants"
import { NavLink } from "react-router-dom"
import ListItemMenu from "../ListItemMenu"
import { styles } from "./styles"
import LogoutButton from "../LogoutButton"

interface LayoutProps {
    children: React.ReactNode
    namePage: "Home" | "Materials" | "Tasks"
}

export default function Layout({ children, namePage }: LayoutProps) {
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: "none" }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h3" noWrap>
                        {namePage}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box>
                        <Typography color="#1976d2" variant="h3">
                            {projectName}
                        </Typography>
                    </Box>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {ROUTES.map((route, index) => (
                        <Box
                            component={NavLink}
                            to={route.path}
                            key={index}
                            sx={styles.link}
                        >
                            <ListItemMenu open={open} title={route.name} />
                        </Box>
                    ))}
                    <LogoutButton open={open}  />
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {children}
            </Box>
        </Box>
    )
}
