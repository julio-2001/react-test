import Button from "@mui/material/Button/Button";
import styled from "@mui/material/styles/styled";

const StyledMuiButton = styled(Button)(() => ({
    "background":"#fff",
    "color":"#010326",
    "fontSize":"16px",
    "maxWidth":"110px",
    "maxHeight":"24px",
    "borderRadius":"50px",
    "top":"11px",
    "position":"relative",
    "border":"1px solid #949292",
    "zIndex":"10",
    "alignSelf":"center",
    "fontFamily":"Chakra petch Bold",

    "&:hover":{
        "background":"#42AE37",
        "color":"#fff"
    }
}))
export default StyledMuiButton