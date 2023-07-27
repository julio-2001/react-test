import LinearProgress from "@mui/material/LinearProgress";
import styled from "@mui/material/styles/styled";


const StyledMuiProgress = styled(LinearProgress)(({theme}) => ({
    "background": "white",
    "height": "2px",
    "marginTop": "27px",
    "position": "absolute",
    "width": "100%",

    "& > span.MuiLinearProgress-bar":{
        "background":theme.palette.background.default
    }
}))
export default StyledMuiProgress