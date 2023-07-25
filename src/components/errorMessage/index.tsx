import StyledErrorBox  from "./styles";
import Typography from "@mui/material/Typography";

interface ErrorMessageProps{
  message:string
}
const ErrorMessage  = ({message}:ErrorMessageProps) => {
  return (
    <StyledErrorBox 
      display={"flex"}
      justifyContent={"center"}
      height={"100vh"}
      alignItems={"center"}
      padding={"50px"}
    >
      <Typography>
        {message}
      </Typography>
    </StyledErrorBox>
  )
}
export default ErrorMessage 