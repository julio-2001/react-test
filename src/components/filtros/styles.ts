import styled  from "@mui/material/styles/styled";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";


export const StyledMuiDrawerContainer = styled(Drawer)(() => ({
    "&.MuiDrawer-root > .MuiPaper-root": {
        "overflow": "visible",
    },
}))

export const StyledMuiBoxContent = styled(Box)(({theme}) => ({
    "position":"absolute",
    "visibility":"visible",
    "top":"100%",
    "background":theme.palette.background.default,
    "width":"100%",
    "display":"flex",
    "justifyContent":"center",
    "height":"24px",
    "borderBottom":"1px solid #949292",
    "flexDirection":"column",
    "zIndex":10
}))