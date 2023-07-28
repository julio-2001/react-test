import Box from "@mui/material/Box";
import {styled} from "@mui/material";

const MuiBoxHome = styled(Box)(({theme}) => ({
    "&.MuiBox-root":{
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

        "& > div.MuiBox-root":{
            "display":"flex",
            "justifyContent":"center",
            "marginTop":theme.spacing(6)
        },

        "& > h6.MuiTypography-root":{
            "color":"#04ADCC",
            "textAlign":"center",
            "fontSize":48,
            "fontFamily": "Rick and morty",
            "marginTop":`calc(24px + ${theme.spacing(9)})`,
            "textShadow":"2px 2px 1px #C7DF71, -2px -2px 1px #C7DF71, -2px 2px 1px #C7DF71, 2px -2px 1px #C7DF71",
        },
    },
}))
export default MuiBoxHome