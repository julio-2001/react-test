import MuiButtonLoading from "./styles";

const MuiButtonSearch = () => {
    return (
        <MuiButtonLoading
            variant="contained"
            type="submit"
            onClick={() => sessionStorage.setItem("currentPage","1")}
        >
            PROCURAR
        </MuiButtonLoading>
    );
};
export default MuiButtonSearch;
 