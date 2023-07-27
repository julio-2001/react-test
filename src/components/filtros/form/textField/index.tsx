import MuiTextField from "./styles"
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import FormControl from "@mui/material/FormControl";


interface MuiTextFIeldProps{
    name:string;
    setName:(value:string) => void;
}
const Index = ({name, setName}:MuiTextFIeldProps) => {

    const { breakpoints } = useTheme()
    const matches = useMediaQuery(breakpoints.up("xs"));
    return (
        <FormControl sx={{ "width":matches?"168px":"100%"}}>
            <MuiTextField 
                value={name} 
                label="Nome" 
                type="search"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setName(event.target.value);
                }}
            /> 
        </FormControl>
    );
};
export default Index;
