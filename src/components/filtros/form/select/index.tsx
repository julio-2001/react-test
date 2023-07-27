import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import {SelectChangeEvent} from "@mui/material/Select";

import {
    MuiInputLabelSelect, 
    MuiSelect,
} from "./styles";

interface MuiSelectField {
    nameField: string;
    idFieldSelect: string;
    fieldValues: Array<string>;
    selected:string;
    setSelected:(value:string) => void;
}

const MuiSelectField = ({
    nameField = "",
    idFieldSelect = "",
    fieldValues = [],
    selected = "",
    setSelected
}: MuiSelectField) => {
    const { breakpoints } = useTheme();
    const matches = useMediaQuery(breakpoints.up("xs"));

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSelected(String(event.target.value));
    };

    return (
        <FormControl  sx={{ "width":matches?"168px":"100%" }}>
            <MuiInputLabelSelect  id={idFieldSelect}>
                {nameField}
            </MuiInputLabelSelect>
            <MuiSelect
                labelId={idFieldSelect}
                id={idFieldSelect}
                label={nameField}
                fullWidth
                autoWidth
                value={selected}
                onChange={handleChange}
            >
                <MenuItem value={""}>Nenhum</MenuItem>

                {fieldValues.map((item, index) => (
                    <MenuItem 
                        value={item}
                        key={`MuiSelectField--field:${nameField}-value:${item}-index:${index}`}
                    >
                        {item}
                    </MenuItem>
                ))}
            </MuiSelect>
        </FormControl>
    );
};
export default MuiSelectField;
