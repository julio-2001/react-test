import MuiCardDetail from "./styles";
import {Character} from "../../service/Api";
import MuiChipStatus from "../ChipStatus";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import  Divider  from "@mui/material/Divider";
import CardContent  from "@mui/material/CardContent";
import  Button  from "@mui/material/Button";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransGender from "@mui/icons-material/Transgender";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

interface CardDetailProps extends Character {
  alt:string
  location:{
    name:string
  }
}

const Index = ({ name, status, species, gender, image, alt, type, origin, location}:CardDetailProps) => {
  return (
    <MuiCardDetail>
      <Box>
        <CardMedia 
          title={alt} 
          image={image}
        >
          <Button
            href={image} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ZoomOutMapIcon/>
          </Button>
        </CardMedia>
        
        <Typography variant="h5">{name}</Typography>
        <Divider color="primary"/>
      </Box>

      <CardContent>
        <Box>
          <span>STATUS:</span>
          <MuiChipStatus
            label={status}
            className={status}
          />
        </Box>

        <Box>
          <span>GENDER:</span>
          <Typography
            className={gender}
          >   
            {gender === "Male"? <MaleIcon/> : gender === "Female"? <FemaleIcon/>:<TransGender/>}
            {gender}
          </Typography>
        </Box>

        <Box>
          <span>SPECIE:</span>
          <Typography>
            {species}
          </Typography>
        </Box>

        <Box>
          <span>TYPE:</span>
          <Typography>
            {type}
          </Typography>
        </Box>

        <Box>
          <span>ORIGIN:</span>
          <Typography>
            <LocationOnIcon color="primary"/>
            {origin.name}
          </Typography>
        </Box>

        <Box>
          <span>last known location:</span>
          <Typography>
          <LocationOnIcon color="primary"/>
            {location.name}
          </Typography>
        </Box>
      </CardContent>
    </MuiCardDetail>
  )
}

export default Index