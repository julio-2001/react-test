import IconButton from "@mui/material/IconButton";
import styled from "@mui/material/styles/styled";


const MuiButtonIcon = styled(IconButton)(({theme}) => ({
    "&.Mui-disabled":{
        "& > a > svg.MuiSvgIcon-root":{
            "color":"#707070"
        },
    },
    "& > a":{
        "& > svg.MuiSvgIcon-root":{
            "color":theme.palette.favorites
        }
    }
}))
export default MuiButtonIcon;