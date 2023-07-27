import TextField from "@mui/material/TextField"
import styled  from "@mui/material/styles/styled";


const MuiTextField = styled(TextField)(({theme}) => ({
    "boxSizing":"border-box",
    
    "& label":{
        "color":theme.palette.info.main,
        "fontFamily":"Chakra petch regular"
    },

    "& label.Mui-focused": {
        "color": theme.palette.info.main,
    },

    "& .MuiOutlinedInput-root": {
        "color":theme.palette.primary.main,
        "fontFamily":"Chakra petch bold",
        "caretColor":theme.palette.secondary.main,
        "maxHeight":"56px",
        "fontSize":"18px",
        
        "& fieldset": {
            "border":`1px solid ${theme.palette.secondary.main}`,
        },
        "&:hover fieldset": {
            "border":`4px solid ${theme.palette.secondary.main}`,
        },
    },
}))
export default MuiTextField