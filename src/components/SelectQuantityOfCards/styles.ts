import FormControl from "@mui/material/FormControl";
import styled from "@mui/material/styles/styled";

const StyledMuiFormControl = styled(FormControl)(({theme}) => ({
    "&":{
        
        "label.MuiFormLabel-root":{
            "color":theme.palette.info.main,
            "fontFamily":"Chakra petch regular",
            "fontWeight":"normal",
            "&.Mui-focused":{
                "color":theme.palette.info.main,
            }
        },

        "div.MuiInputBase-root": {
            "maxHeight":"56px",
            "& fieldset": {
                "border":`1px solid ${theme.palette.secondary.main}`,
            },
            "&:hover fieldset":{
                "border":`4px solid ${theme.palette.secondary.main}`,
            },
        },
        "svg.MuiSvgIcon-root":{
            "color":theme.palette.secondary.main
        },
        "& > div":{
            "color":theme.palette.primary.main,
            "fontFamily":"Chakra petch bold",
            "fontSize":"18px",
        }
    }
}))
export default StyledMuiFormControl