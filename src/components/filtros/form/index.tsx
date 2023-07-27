import MuiBoxForm from "./styles";
import MuiTextField from "./textField/index";
import MuiSelectField from "./select/index";
import MuiButtonSearch from "./buttonSearch/index";
import MuiButtonIconFavorite from "./buttonIconFavorite/index";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useState } from "react";




const Index = () => {
    const [name, setName] = useState<string>("")
    const [species, setEspecie] = useState<string>("")
    const [gender, setGender] = useState<string>("")
    const [status ,setStatus] = useState<string>("")

    const navigate = useNavigate();

    const buildQueryString = (params: Record<string, string | undefined>): string => {
        return Object.entries(params)
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          .filter(([key, value]) => value !== undefined && value !== "")
          .map(([key, value]) => `&${key}=${encodeURIComponent(value as string)}`)
          .join("");
    }

    const queryString = buildQueryString({ name, species, gender, status });

    const handleOnSubmit = (e:React.FormEvent) => { 
        e.preventDefault()
        if(name || species || gender || status) {
            navigate(`filter/${queryString}`)
        }else{
            navigate("/")
        }
    }

    return (
        <MuiBoxForm
            component={"form"}
            onSubmit={handleOnSubmit}
        >
            <Stack>
                <MuiTextField name={name} setName={setName}/>
                <MuiSelectField
                    nameField="Especies"
                    idFieldSelect="MuiSelect-field:species"
                    fieldValues={[
                        "Human", 
                        "Alien", 
                        "Humanoid",
                        "unknown",
                        "Poopybutthole",
                        "Mythological Creature",
                        "Animal",
                        "Robot",
                        "Cronenberg",
                        "Disease",
                    ]}
                    selected={species}
                    setSelected={setEspecie}
                />

                <MuiSelectField
                    nameField="Genero"
                    idFieldSelect="MuiSelect-field:gender"
                    fieldValues={[
                        "Male",
                        "Female",
                        "Genderless",
                        "Unknown",
                    ]}
                    selected={gender}
                    setSelected={setGender}
                />

                <MuiSelectField
                    nameField="Status"
                    idFieldSelect="MuiSelect-field:status"
                    fieldValues={[
                        "Alive", 
                        "Dead", 
                        "UNKNOWN"
                    ]}
                    selected={status}
                    setSelected={setStatus}
                />

                <Box>
                    <MuiButtonSearch/>
                    <MuiButtonIconFavorite/>
                </Box>
            </Stack>
        </MuiBoxForm>
    );
};
export default Index;
