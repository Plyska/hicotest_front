import React from "react"
import { ListItem } from "@mui/material"
import {
    ListItemButtonCustom,
    ListItemIconCustom,
    ListItemTextCustom,
} from "./styles"
import HomeIcon from "@mui/icons-material/Home"
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined"
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined"

interface ListItemMenuProps {
    open?: boolean
    title?: string
}

const ListItemMenu: React.FC<ListItemMenuProps> = ({ open, title }) => {
    const getItemIcon = () => {
        if (title === "Home") {
            return <HomeIcon />
        }
        if (title === "Materials") {
            return <ConstructionOutlinedIcon />
        }
        if (title === "Tasks") {
            return <ListAltOutlinedIcon />
        }
    }

    return (
        <ListItem key={title} disablePadding sx={{ display: "block" }}>
            <ListItemButtonCustom open={open}>
                <ListItemIconCustom open={open}>
                    {getItemIcon()}
                </ListItemIconCustom>
                <ListItemTextCustom primary={title} open={open} />
            </ListItemButtonCustom>
        </ListItem>
    )
}

export default ListItemMenu
