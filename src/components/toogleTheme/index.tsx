import MuiToogleButton from "./styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useAppThemeContext } from "../../contexts/ThemeContext";


const ToogleThemeButton = () => {
  const {ToogleName, themeNameState} = useAppThemeContext()

  return (
    <MuiToogleButton
      value={themeNameState}
      selected={themeNameState === "light"}
      onClick={ToogleName}
    >
      <LightModeIcon/>
    </MuiToogleButton>
  )
}
export default ToogleThemeButton