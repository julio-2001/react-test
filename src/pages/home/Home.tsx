import MuiBoxHome from "./styles";
import CharacterCard from "../../components/CharacterCard";
import MuiPagination from "../../components/Pagination";
import SelectQuantityOfCards from "../../components/SelectQuantityOfCards";
import getDataApi,{ Pagination, Character } from "../../service/Api";
import ErrorMessage from "../../components/errorMessage";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BackdropLoading from "../../components/BackdropLoading";
import { useParams } from "react-router-dom";

const Home = () => {
  const {filter} = useParams<string>();
  
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem("currentPage")
    return savedPage? Number(savedPage):1
  })
  const [listCards,setListCards] = useState<Pagination<Character>>()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [IsError, setIsError] = useState<boolean>(false)
  const [showCount, setShowCount] = useState<number>(20)
  const [cardsIndexOfset, setcardsIndexOfset] = useState<number>(0)

  useEffect(() => { 
    setIsLoading(true)
    setIsError(false)

    const lastFilter = sessionStorage.getItem("lastFilter") || "";
    if(filter && filter !== lastFilter) {
      setCurrentPage(1)
      getDataApi({"page":1, "filters":filter? filter:""})
        .then(res => setListCards(res.data))
        .catch((e) => (
          setIsError(true),
          console.log(e)
        ))
      .finally(() => setIsLoading(false))

    }else{
      getDataApi({"page":currentPage, "filters":filter? filter:""})
        .then(res => setListCards(res.data))
        .catch((e) => (
          setIsError(true),
          console.log(e)
        ))
      .finally(() => setIsLoading(false))
    }

    if(filter)  sessionStorage.setItem("lastFilter",filter)
  },[currentPage, filter])

  if(isLoading) {
    return <BackdropLoading loading={isLoading}/>

  }else if(IsError === false && listCards) {
    return(
      <MuiBoxHome
        component={"main"}
      >
        <Typography component={"h6"}>
          Prenda o cinto Morty, <br /> isso vai ser uma jornada selvagem
        </Typography>

        <Box component={"div"}>
          <SelectQuantityOfCards quantityOfCards={showCount} setQuantityOfCards={setShowCount} />
        </Box>

        <Box component="section">
          {listCards.results.slice(cardsIndexOfset, cardsIndexOfset + showCount).map(({ id, name, status, species, image, gender, type, origin },index) => (
            <CharacterCard
              key={`Home-MuiCard-id:${id}-name:${name}-index:${index}`}
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

        <MuiPagination
          pages={listCards.info.pages}
          changePage={(nextPage) =>  {
            if(showCount < 20) {
              setcardsIndexOfset((old) => old + showCount)
              if(cardsIndexOfset >= showCount) {
                setCurrentPage(nextPage)
                sessionStorage.setItem("currentPage", String(nextPage))
                setcardsIndexOfset(0)
              }
            }else{
              setCurrentPage(nextPage)
              sessionStorage.setItem("currentPage", String(nextPage))
              if(cardsIndexOfset !== 0) setcardsIndexOfset(0)
            }
          }}
          currentPage={currentPage}
        />
      </MuiBoxHome>
    )

  }else if(IsError) {
    return (
      <ErrorMessage
        message="Eita parece que algo aconteceu 🤯 troque os filtros"
      />
    )
  }
}
export default Home
