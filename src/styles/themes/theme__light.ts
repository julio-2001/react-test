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
    }
});
export default lightTheme;