import StyledMuiButton from "./styles";
import TuneIcon from "@mui/icons-material/Tune";


interface MuiButtonFilterProps {
  text:string
  onCLick:()=> void
}

const MuiButtonFilter = ({text, onCLick }:MuiButtonFilterProps) => {
  return (
    <StyledMuiButton 
      onClick={onCLick} 
      startIcon={<TuneIcon height={"18.15px"} width={"18.15px"}/>}
    >{text}</StyledMuiButton>
  )
}
export default MuiButtonFilter