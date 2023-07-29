import styled  from "@mui/material/styles/styled";
import Button from "@mui/material/Button";


const MuiButtonLoading = styled(Button)(({theme}) => ({
    "background":theme.palette.button,
    "color":theme.palette.primary.main,
    "height":"56px",
    "fontSize":"24px",
    "border":`1px solid ${theme.palette.secondary.main}`,
    "fontFamily":"Chakra petch bold",

    "&:hover":{
        "background":"none",
        "border":`1px solid ${theme.palette.secondary.main}`,
        "color":theme.palette.primary.main,
    },

    "& > div.MuiLoadingButton-loadingIndicator":{
        "color":theme.palette.secondary.main
    },
}))
export default MuiButtonLoading
