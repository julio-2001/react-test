import ToggleButton from "@mui/material/ToggleButton";
import styled from "@mui/material/styles/styled";

const StyledMuiToogleButton = styled(ToggleButton)(({theme}) => ({
    "position":"absolute",
    "border":`1px solid ${theme.palette.primary.main}`,
    "top":theme.spacing(8),
    "left":theme.spacing(4),

    "& > svg.MuiSvgIcon-root":{
        "color":theme.palette.primary.main
    },

    "&.Mui-selected ":{
        "background":"rgba(1,3,38,1)",
        "& > svg.MuiSvgIcon-root":{
            "color":"white"
        },
    }
}))
export default StyledMuiToogleButton 