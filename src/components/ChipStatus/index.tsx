import StyledMuiChip from "./styles";


interface MuiChipProps {
  label:string
  className:string
}
const MuiChipStatus = ({label, className}:MuiChipProps) => {
  return (
    <StyledMuiChip
      label={label}
      className={className}        
    />
  )
}
export default MuiChipStatus