import Checkbox from "@mui/material/Checkbox";
import styled from "@mui/material/styles/styled";


const StyledMuiCheckBoxFavorite = styled(Checkbox)(({theme}) => ({
    "& > svg":{
        "color":theme.palette.favorites
    },
    "&.Mui-checked > svg":{
        "color":theme.palette.favorites
    }
}))
export default StyledMuiCheckBoxFavorite

