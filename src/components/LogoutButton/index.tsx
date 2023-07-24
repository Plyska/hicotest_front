import React from "react"
import Box from "@mui/material/Box"
import ListItemMenu from "../ListItemMenu"
import { styles } from "../Layout/styles"
import { useNavigate } from "react-router-dom"
import { NavLink } from "react-router-dom"

interface LogoutButtonProps {
    open?: boolean
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ open }) => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        navigate(0)
    }

    return (
        <Box onClick={logout} component={NavLink} sx={styles.link}>
            <ListItemMenu open={open} title={"Logout"} />
        </Box>
    )
}

export default LogoutButton
