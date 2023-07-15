import { createTheme } from "@mui/material";

const lightTheme = createTheme({
    "palette":{
        "primary":{"main":"#010326"},
        "secondary":{"main":"#194C13"},
        "info":{"main":"#4D4C4C"},
        "background":{"default":"#D5D7E6"},
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
            "male":"#016073",
            "female":"#801495",
            "genderless":"#42520A",
            "unknown":"#825900",
        },
        "button":"#194C13",
        "favorites":"#166F80",
    },
    "breakpoints":{
        "values":{
            "xs": 440,
            "sm": 550,
            "md": 768,
            "lg": 1200,
            "xl": 1536,
        },
    },
    "spacing":4,
    "components":{
        "MuiCssBaseline":{
            "styleOverrides":`
                @font-face {
                    font-family: "Chakra petch regular";
                    src: url("/src/assets/fonts/Chakra_Petch/ChakraPetch-Bold.ttf");
                }
                @font-face {
                    font-family: "Chakra petch semiBold";
                    src: url("/src/assets/fonts/Chakra_Petch/ChakraPetch-SemiBold.ttf");
                }
                @font-face {
                    font-family: "Chakra petch bold";
                    src: url("/src/assets/fonts/Chakra_Petch/ChakraPetch-Bold.ttf");
                }
                
                @font-face {
                    font-family: "Rick and morty";
                    src: url("/src/assets/fonts/Rick_and_morty/fonte--Rick-and-mofrty.ttf");
                }
            `  
        }
    }
});
export default lightTheme;