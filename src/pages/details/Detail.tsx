import MuiBox from "./styles";
import CharacterCardDetail from "../../components/CharacterCardDetail";
import getDataApi, { Character } from "../../service/Api";
import ListEpisodes from "../../components/ListEpisodes";
import BackdropLoading from "../../components/BackdropLoading";
import ErrorMessage from "../../components/errorMessage";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Detail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [card, setCard] = useState<Character>();
    const [IsError, setIsError] = useState<boolean>(false);
    const [IsLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        getDataApi({ "id": id })
            .then((res) => setCard(res.data))
            .catch((erro) => (
                setIsError(true), 
                console.log(erro)
            ))
        .finally(() => setIsLoading(false));
    }, [id]);

    if (IsLoading) {
        return <BackdropLoading loading={IsLoading} />;
    } else if (IsError === false && card) {
        return (
            <MuiBox>
                <a className="LinkVoltar" onClick={() => navigate(-1)}>
                    <ArrowBackIcon />
                    Voltar
                </a>

                <CharacterCardDetail
                    id={card.id}
                    name={card.name}
                    alt={card.name}
                    image={card.image}
                    status={card.status}
                    gender={card.gender}
                    species={card.species}
                    type={card.type ? card.type : "No type"}
                    origin={{ "name": card.origin.name }}
                    location={{ "name": card.location ? card.location.name : "" }}
                />
                <ListEpisodes episodes={card.episode ? card.episode : []} />
            </MuiBox>
        );
    } else if (IsError) {
        return (
            <ErrorMessage message="Eita parece que algo aconteceu 🤯 troque os filtros" />
        );
    }
};

export default Detail;
