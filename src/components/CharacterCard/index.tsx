import StyledMuiCard from "./styles";
import MuiChipStatus from "../ChipStatus";
import { Character } from "../../service/Api";
import CheckBoxFavorites from "./CheckBoxFavorites";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import CardContent  from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransGender from "@mui/icons-material/Transgender";
import LocationOnIcon from "@mui/icons-material/LocationOn";


interface CardProps extends Character {
  alt:string
}
const CharacterCard = ({
  id = 0,
  name = "", 
  species = "", 
  type = "", 
  status = "UNKNOWN", 
  gender = "Unknown", 
  origin ={"name":""},
  image = "", 
  alt = "", 
}:CardProps) => {
  return (
    <StyledMuiCard>
      <CardMedia
        title={alt}
        image={image}
      />
      <CardContent> 
        <Box>
          <Typography 
            variant="h3"
          >{name}</Typography>
          <CheckBoxFavorites id={id}/>
        </Box>
       
        <Typography
          variant="subtitle1"
        >
          {species} - {type? <Link onClick={() => sessionStorage.setItem("currentPage","1")} to={`/filter/&type=${type}`}>{type}</Link> : "No type"}
        </Typography>

        <Divider color="#707070"/>

        <MuiChipStatus 
          label={status}
          className={status}
        />

        <Typography
          className={gender}
        >
          {gender === "Male"? <MaleIcon/> : gender === "Female"? <FemaleIcon/>:<TransGender/>}
          {gender}
        </Typography>

        <Typography>
          <LocationOnIcon
            color="primary"
          />
          {origin.name}
        </Typography>

        <CardActions>
          <Link 
            to={`/detail/${id}`}
          >MAIS DETALHES</Link>
        </CardActions>
      </CardContent>
    </StyledMuiCard>
  )
}
export default CharacterCard