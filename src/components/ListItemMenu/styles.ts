import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { styled } from "@mui/material/styles"
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"

interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

export const ListItemButtonCustom = styled(ListItemButton)<AppBarProps>(
    ({ open }) => ({
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        px: 2.5,
    }),
)

export const ListItemIconCustom = styled(ListItemIcon)<AppBarProps>(
    ({ open }) => ({
        minWidth: 0,
        marginRight: open ? 10 : 0,
        justifyContent: "center",
    }),
)

export const ListItemTextCustom = styled(ListItemText)<AppBarProps>(
    ({ open }) => ({
        opacity: open ? 1 : 0,
        display: open ? "flex" : "none",
        alignItems: "center",
        color: "#1976d2",
    }),
)
