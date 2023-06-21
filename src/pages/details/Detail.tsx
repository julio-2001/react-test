import {useParams} from "react-router-dom"
import { Box, useTheme } from "@mui/material";

const Detail = () => {
  const theme = useTheme();
  const {id} = useParams();

  console.log(theme)
  
  return (
    <Box bgcolor={theme.palette.background.default} color={theme.palette.primary.main}  >Detail {id}</Box>
  )
}
export default Detail