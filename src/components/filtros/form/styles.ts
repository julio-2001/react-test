import Box from "@mui/material/Box";
import {styled} from "@mui/material";


const StyledMuiBoxForm = styled(Box)(({theme}) => ({
    "&.MuiBox-root":{
        "background":theme.palette.background.default,
        "padding":theme.spacing(12,12, `calc( 24px - ${12}px)`,12),


        "& > div.MuiStack-root":{
            "display":"flex",
            "flexDirection":"row",
            "justifyContent":"center",
            "alignItems":"center",
            "gap":theme.spacing(2),
            "flexWrap":"wrap", 

            "& > div.MuiBox-root":{
                "display":"flex",
                "alignItems":"center"
            }
        },

    }
}));
export default StyledMuiBoxForm;