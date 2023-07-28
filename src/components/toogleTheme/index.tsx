import StyledMuiToogleButton from "./styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useAppThemeContext } from "../../contexts/ThemeContext";


const ToogleThemeButton = () => {
  const {ToogleName, themeNameState} = useAppThemeContext()

  return (
    <StyledMuiToogleButton
      value={themeNameState}
      selected={themeNameState === "light"}
      onClick={ToogleName}
    >
      <LightModeIcon/>
    </StyledMuiToogleButton>
  )
}
export default ToogleThemeButton