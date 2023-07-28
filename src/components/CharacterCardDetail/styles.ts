import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

const MuiCardDetail = styled(Card)(({theme}) => ({
    "width":"100%",
    "maxWidth":465,
    "height":"auto",
    "border":"1px solid  #707070",
    "background":theme.palette.background.default,
    "padding":theme.spacing(6,4),

    "& > div.MuiBox-root":{
        "display":"flex",
        "flexDirection":"column",
        "alignItems":"center",

        "& > div.MuiCardMedia-root":{
            "width":"100%",
            "maxWidth":260,
            "height":260,
            "borderRadius":"50%"
            
        },

        "& > h5.MuiTypography-root ":{
            "color":theme.palette.primary.main,
            "fontFamily":"Chakra petch Bold",
            "fontSize":40,
            "textAlign":"center"
        }
    },

    "& > div.MuiCardContent-root":{
        "display":"flex",
        "flexDirection":"column",
        

        "& > div.MuiBox-root":{
            "display":"flex",
            "alignItems":"center",
            "flexWrap":"wrap",

            "& > span":{
                "color":theme.palette.info.main,
                "margin":theme.spacing(2,2,0),
                "whiteSpace":"nowrap"
            },

            "& > p.MuiTypography-root":{
                "color":theme.palette.primary.main,
                "fontSize":16,
                "fontFamily":"Chakra petch Bold",
                "display":"flex",
                "alignItems":"center",
                "marginTop":"8px",
                
                "&.Male":{
                    "color":theme.palette.gender?.male,
                    "fontFamily":"Chakra petch bold",
                },
    
                "&.Female":{
                    "color":theme.palette.gender?.female,
                    "fontFamily":"Chakra petch bold",
                },
    
                "&.Genderless":{
                    "color":theme.palette.gender?.genderless,
                    "fontFamily":"Chakra petch bold",
                },
    
                "&.unknown":{
                    "color":theme.palette.gender?.unknown,
                    "fontFamily":"Chakra petch bold",
                },
            },
        },
    },
}))
export default MuiCardDetail