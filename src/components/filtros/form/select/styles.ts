import Select from "@mui/material/Select";
import styled from "@mui/material/styles/styled";
import InputLabel from "@mui/material/InputLabel";


export const MuiInputLabelSelect = styled(InputLabel)(({theme}) => ({
    "color":theme.palette.info.main,
    "fontFamily":"Chakra petch regular",
    "fontWeight":"normal",
    "&.Mui-focused":{
        "color":theme.palette.info.main,
    }
}))

export const MuiSelect = styled(Select)(({theme}) => ({
    "&.MuiInputBase-root": {
        "maxHeight":"56px",
        "& fieldset": {
            "border":`1px solid ${theme.palette.secondary.main}`,
        },
        "&:hover fieldset":{
            "border":`4px solid ${theme.palette.secondary.main}`,
        },
    },
    ".MuiSvgIcon-root":{
        "color":theme.palette.secondary.main
    },
    "& > div":{
        "color":theme.palette.primary.main,
        "fontFamily":"Chakra petch bold",
        "fontSize":"18px",
    }
}))
