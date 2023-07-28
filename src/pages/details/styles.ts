import Box from "@mui/material/Box";
import {styled} from "@mui/material";

const MuiBox = styled(Box)(({theme}) => ({
    "display":"flex",
    "gap":theme.spacing(5),
    "justifyContent":"center",
    "marginTop":"26px",
    "padding":theme.spacing(10,0),
    "flexWrap":"wrap",

    [theme.breakpoints.down("sm")]:{
        "padding":theme.spacing(10,6)

    },

    "& > a.LinkVoltar":{
        "display":"flex",
        "color":theme.palette.primary.main,
        "position":"absolute",
        "top":theme.spacing(10),
        "cursor":"pointer",
        "fontFamily":"Chakra petch Bold",

        "& > svg.MuiSvgIcon-root":{
            "color":theme.palette.secondary.main
        },
    },
}))
export default MuiBox;