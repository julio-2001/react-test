import StyledMuiBoxEpsisode from "./styles";
import {useEffect, useState} from "react";
import getDataApi, {Episodes} from "../../service/Api";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Typography from "@mui/material/Typography";
import  CircularProgress  from "@mui/material/CircularProgress";


interface ListEpisodesProps {
    episodes:Array<string>
}
const ListEpisodes = ({episodes = []}:ListEpisodesProps) => {
    const [listEpisodes, setListEpisodes] = useState<Array<Episodes>>([])
    const [IsError, setIsError] = useState<boolean>(false)
    const [IsLoading, setIsLoading] = useState<boolean>(false)
    
    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        const numerosId = episodes.map(url => {
            const match = url.match(/\d+$/);
            return match ? parseInt(match[0], 10) : null;
        })
        
        getDataApi({"path":"episode","id":String(numerosId)})
            .then(res => {
                if(Array.isArray(res.data)) {
                    setListEpisodes(res.data)
                }else{
                    setListEpisodes([res.data])
                }
            }) 
            .catch(erro => (
                setIsError(true),
                console.log(erro)
            ))
        .finally(() => setIsLoading(false))
    },[episodes])

    
  if(IsLoading) {
    return(
        <StyledMuiBoxEpsisode>
            <CircularProgress/>
        </StyledMuiBoxEpsisode>
    )

  }else if(IsError === false && episodes) {
    return (
        <StyledMuiBoxEpsisode
            component={"ul"}
        >
            {listEpisodes.map(({id, name, episode, air_date},index) => (
                <li key={`Episodes-id:${id}-name:${name}-index:${index}`}>
                    <Typography variant="h4">
                        <ArrowRightIcon/>
                        {episode} - "{name}"
                    </Typography>
                    <Typography variant="subtitle1">{air_date}</Typography>
                </li>
            ))}
        </StyledMuiBoxEpsisode>
    )

  }else if(IsError) {
    <StyledMuiBoxEpsisode>
        Não consegui encontrar-lo
    </StyledMuiBoxEpsisode>
  }
}
export default ListEpisodes