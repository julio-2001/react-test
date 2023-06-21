import {useRouteError} from "react-router-dom"
import {Box} from "@mui/material"

const Page404 = () => {
    const erro = useRouteError()
    console.log(erro)   
  
  return (
    <Box>Page404</Box>
  )
}
export default Page404