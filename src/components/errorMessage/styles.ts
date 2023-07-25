import Box from "@mui/material/Box";
import {styled} from "@mui/material";

const StyledErrorBox  = styled(Box)(({theme}) => ({
    "display":"flex",
    "justifyContent":"center",
    "height":"100vh",
    "alignItems":"center",
    "padding":theme.spacing(12),

    "& > p.MuiTypography-root" :{
        "color":theme.palette.primary.main
    }
}))
export default StyledErrorBox 


