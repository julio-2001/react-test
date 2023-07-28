import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";


const StyledMuiBoxEpsisode = styled(Box)(({theme}) => ({
    "width":465,
    "borderRadius":"4px",
    "overflow":"auto",
    "height":"fit-content",
    "maxHeight":313,
    "border":"1px solid #707070",
    "padding":theme.spacing(2,4),
    "margin":0,
    

    "& > li":{
        "listStyle":"none",

        "& > h4.MuiTypography-root":{
            "color":theme.palette.primary.main,
            "fontSize":16,
            "fontFamily":"Chakra petch Bold",
            "display":"flex",
            "alignItems":"center",

            "& > svg.MuiSvgIcon-root":{
                "color":theme.palette.secondary.main,
            }
        },

        "h6.MuiTypography-root":{
            "color":theme.palette.info.main,
            "fontSize":12,
            "fontFamily":"Chakra petch Regular",
            "textTransform":"uppercase",
            "margin":theme.spacing(-1.5, 6, 2)
        }
    }
}))
export default StyledMuiBoxEpsisode