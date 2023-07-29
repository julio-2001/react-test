import StyledErrorBox  from "./styles";
import Typography from "@mui/material/Typography";

interface ErrorMessageProps{
  message:string
}
const ErrorMessage  = ({message}:ErrorMessageProps) => {
  return (
    <StyledErrorBox>
      <Typography>
        {message}
      </Typography>
    </StyledErrorBox>
  )
}
export default ErrorMessage 