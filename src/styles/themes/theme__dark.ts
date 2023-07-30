import { createTheme } from "@mui/material";
import ChakraPetchRegular from "../../assets/fonts/Chakra_Petch/ChakraPetch-Regular.ttf";
import ChakraPetchSemiBold from "../../assets/fonts/Chakra_Petch/ChakraPetch-SemiBold.ttf";
import ChakraPetchBold from "../../assets/fonts/Chakra_Petch/ChakraPetch-Bold.ttf";
import RickAndMorty from "../../assets/fonts/Rick_and_morty/fonte--Rick-and-mofrty.ttf"

const darkTheme = createTheme({
    "palette":{ 
        "primary":{"main":"#FFFFFF"},
        "secondary":{"main":"#42AE37"},
        "info":{"main":"#949292"},
        "background":{"default":"#010326"},
        "status":{
            "statusAlive":{
                "text":"#032D0A",
                "background":"#D2FFDA"
            },
            "statusDead":{
                "background":"#FFD2D2",
                "text":"#290303" 
            },
            "statusUnknown":{
                "background":"#FBD2FF",
                "text":"#5D0960"
            }
        },
        "gender":{
            "male":"#7BF6FA",
            "female":"#DF7BFA",
            "genderless":"#C7DF71",
            "unknown":"#FDC853",
        },
        "button":"#04BF10",
        "favorites":"#04ADCC",
    },
    "breakpoints":{
        "values":{
            "xs": 440,
            "sm": 550,
            "md": 768,
            "lg": 1200,
            "xl": 1536,
        }
    },
    "spacing":4,
    "components":{
        "MuiCssBaseline":{
            "styleOverrides":`
                @font-face {
                    font-family: "Chakra petch regular";
                    src: url(${ChakraPetchRegular});
                }
                @font-face {
                    font-family: "Chakra petch semiBold";
                    src: url(${ChakraPetchSemiBold});
                }
                @font-face {
                    font-family: "Chakra petch bold";
                    src: url(${ChakraPetchBold});
                }
                
                @font-face {
                    font-family: "Rick and morty";
                    src: url(${RickAndMorty});
                }
            `  
        },
    },
    
});
export default darkTheme;