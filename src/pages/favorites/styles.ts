import Box  from "@mui/material/Box";
import {styled} from "@mui/material";

const MuiBoxFavorite = styled(Box)(({theme}) => ({
    "background":theme.palette.background.default,
    "marginTop":theme.spacing(6),
    "flex":1,
    "paddingBottom":theme.spacing(16),

    "& > section.MuiBox-root":{
        "display":"flex",
        "alignItems":"center",
        "justifyContent":"center",
        "flexWrap":"wrap",
        "padding":theme.spacing(16,2,0),
        "gap":theme.spacing(4),
        "maxWidth":1920,
        "margin":"0 auto" 
    },
}))
export default MuiBoxFavorite