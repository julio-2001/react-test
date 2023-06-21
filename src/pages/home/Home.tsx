
import { Box, useTheme } from "@mui/material"

const Home = () => {
  const theme = useTheme()
  console.log(theme)
  return (
    <Box bgcolor={theme.palette.background.default} color={theme.palette.primary.main}>Home</Box>
  )
}

export default Home
