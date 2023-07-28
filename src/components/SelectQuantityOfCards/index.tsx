import StyledMuiFormControl from "./styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";


interface MuiRadio {
  quantityOfCards:number
  setQuantityOfCards:(cards:number) => void
}
const SelectQuantityOfCards = ({quantityOfCards, setQuantityOfCards}:MuiRadio) => {

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setQuantityOfCards(Number((event.target as HTMLInputElement).value))
  }
    
  return (
    <StyledMuiFormControl>
      <FormLabel itemID="quantityOfCards">Cards por vez</FormLabel>
      <RadioGroup
        row
        aria-labelledby="quantityOfCards"
        name="quantityOfCards"
        value={quantityOfCards}
        onChange={handleChange}
      >
        <FormControlLabel value={10} control={<Radio />} label="10" />
        <FormControlLabel value={15} control={<Radio />} label="15" />
        <FormControlLabel value={20} control={<Radio />} label="20" />
      </RadioGroup>
    </StyledMuiFormControl>
  )
}

export default SelectQuantityOfCards