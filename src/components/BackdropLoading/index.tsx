import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


interface MuiBackdropLoadingProps{
    loading:boolean
}
const BackdropLoading = ({loading}:MuiBackdropLoadingProps) => {
    return (
        <Backdrop
            open={loading}
        >
            <CircularProgress  color="primary"/>
        </Backdrop>
    )
}
export default BackdropLoading