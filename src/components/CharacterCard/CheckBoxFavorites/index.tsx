import StyledMuiCheckBoxFavorite from "./styles";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import {useState, useEffect} from "react";
import useFavorites from "../../../hooks/useFavorits";


interface CheckBoxFavoritesProps{
  id:number
}
const CheckBoxFavorites = ({id}:CheckBoxFavoritesProps) => {
  const {addFavorite, getFavorites, removeFavorite} = useFavorites();
  const favorites = getFavorites();

  const [checked, setChecked] = useState<boolean>(favorites.includes(String(id)));


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  useEffect(() => {
    checked? addFavorite(String(id),checked):removeFavorite(String(id),checked)
  },[addFavorite, checked, id, removeFavorite])

  return (
    <StyledMuiCheckBoxFavorite
      icon={<FavoriteBorder/>}
      checkedIcon={<Favorite/>}
      inputProps={{"aria-label": checked? "remover dos favoritos":"adicionar aos favoritos"}}
      checked={checked}
      onChange={handleChange}
    />
  )
}

export default CheckBoxFavorites