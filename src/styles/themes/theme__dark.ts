import { createTheme } from "@mui/material";

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
});
export default darkTheme;