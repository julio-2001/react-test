import Chip from "@mui/material/Chip";
import styled from "@mui/material/styles/styled";

const StyledMuiChip = styled(Chip)(({theme}) => ({
    "borderRadius":"4px",
    "fontFamily":"Chakra petch bold",
    "fontSize":"16px",
    "height":"18px",
    "marginTop":theme.spacing(2),
    "textTransform":"uppercase",

    "&.Alive":{
        "background":theme.palette.status.statusAlive?.background,
        "color":theme.palette.status.statusAlive?.text
    },

    "&.Dead":{
        "background":theme.palette.status.statusDead?.background,
        "color":theme.palette.status.statusDead?.text
    },
    
    "&.unknown":{
        "background":theme.palette.status.statusUnknown?.background,
        "color":theme.palette.status.statusUnknown?.text
    }
}))
export default StyledMuiChip