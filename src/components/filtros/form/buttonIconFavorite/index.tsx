import MuiButtonIcon from "./styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import useFavorites from "../../../../hooks/useFavorits";

const MuiButtonIconFavorite = () => {
  const { getFavorites } = useFavorites()
  
  return (
    <MuiButtonIcon
      disabled={!getFavorites().length}
      aria-label={"ver favoritos"}
    >
      <Link
        to={`/favorites/${getFavorites()}`}
      >
        <FavoriteIcon fontSize="large"/>
      </Link>
    </MuiButtonIcon>
  )
}
export default MuiButtonIconFavorite