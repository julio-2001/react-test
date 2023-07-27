import Pagination from "@mui/material/Pagination";
import styled from "@mui/material/styles/styled";

const StyledMuiPagination = styled(Pagination)(({theme}) => ({
    "&.MuiPagination-root":{
    
        "& > ul.MuiPagination-ul":{
            "justifyContent":"center",
            "margin":theme.spacing(3,0),

            "li":{
                "button.MuiButtonBase-root":{
                    "fontFamily":"Chakra petch regular",
                    "border":`1px solid ${theme.palette.secondary.main}`,
                    "background":"#fff",

                    "&:hover":{
                        "background":theme.palette.secondary.main,
                        "color":theme.palette.primary.main,
                    }
                },

                "div.MuiPaginationItem-root":{
                    "color":theme.palette.primary.main,
                },
                
                "button.MuiButtonBase-root.Mui-selected":{
                    "color":theme.palette.primary.main,
                    "background":theme.palette.secondary.main,
                },
            }
        }
    }
}))
export default StyledMuiPagination