import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";


const StyledMuiCard = styled(Card)(({theme}) => ({
    "width":"100%",
    "maxWidth":600,
    "height":220,
    "background":theme.palette.background.default,
    "border":"1px solid #707070",
    "display":"flex",

    [theme.breakpoints.down("sm")]:{
        "flexDirection":"column",
        "height":"auto",
    },

    "& > div.MuiCardMedia-root":{
        "width":242,
        "height":220,

        [theme.breakpoints.down("sm")]:{
            "width":"100%",
        },
    },

    "& > div.MuiCardContent-root":{
        "flex":1,
        "padding":theme.spacing(6,4),
        
        "& > div.MuiBox-root":{
            "display":"flex",
            "alignItems":"center",
            "justifyContent":"space-between",
            "marginTop":"-13px",

            "& > h3.MuiTypography-root":{
                "fontSize":24,
                "fontFamily":"Chakra petch bold",
                "color":theme.palette.primary.main,
                "whiteSpace":"nowrap",
                "textOverflow":"ellipsis",
                "overflow":"hidden",
                "width":"100%",
                "maxWidth":280,
            },
        },

        "& > h6.MuiTypography-root":{
            "fontSize":12,
            "fontFamily":"Chakra petch regular",
            "color":theme.palette.info.main,
            "marginTop":"-8px",

            "& > a":{
                "color":theme.palette.secondary.main
            }
        },
        
        "& > hr.MuiDivider-root":{
            "borderBottomWidth":"medium",
        },

        "& > div.MuiCardActions-root":{
            "justifyContent":"center",

            "& > a":{
                "background":theme.palette.button,
                "color":theme.palette.primary.main,
                "fontFamily":"Chakra petch bold",
                "fontSize":"16px",
                "padding":theme.spacing(2,4),
                "textDecoration":"none",
                "borderRadius":4,

                "&:hover":{
                    "background":"transparent",
                    "border":`1px solid ${theme.palette.secondary.main}`
                }
            }
        },


        "& > p.MuiTypography-root":{
            "color":theme.palette.info.main,
            "fontSize":16,
            "fontFamily":"Chakra petch regular",
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
}))
export default StyledMuiCard



         