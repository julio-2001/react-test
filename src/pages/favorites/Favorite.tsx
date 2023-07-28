import MuiBoxFavorite from "./styles";
import Box from "@mui/material/Box";
import getDataApi, { Character } from "../../service/Api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackdropLoading from "../../components/BackdropLoading";
import CharacterCard from "../../components/CharacterCard";
import ErrorMessage from "../../components/errorMessage";

const Favorite = () => {
  const [cards, setCards] = useState<Character[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const {ids} = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);

    if(ids) {
      getDataApi({"id":ids})
       .then(res => {
         Array.isArray(res.data)? setCards(res.data) : setCards([res.data])
        })
        .catch((e) => {
          setError(true)
          console.log(e)
        })
      .finally(() => setLoading(false))
    }else{
      setLoading(false)
    }
  },[ids]);

  if(loading) return  <BackdropLoading loading={loading}/>;

  else if(error === false && cards) {
    return (
      <MuiBoxFavorite
        component={"main"}
      >
        <Box
          component={"section"}
        >
          {cards.map(({id, name, status, species, image, gender, type, origin},index) => (
            <CharacterCard
              key={`favorites-MuiCard-id:${id}-name:${name}-index:${index}`}
              id={id}
              name={name}
              gender={gender}
              status={status}
              type={type}
              origin={origin}
              species={species}
              image={image}
              alt={name}
            />
          ))}
        </Box>
      </MuiBoxFavorite>
    )

  }else if (error) {
    return(
      <ErrorMessage
        message="Eita parece que algo aconteceu 🤯 troque os filtros "
      />
    )
  }
}
export default Favorite