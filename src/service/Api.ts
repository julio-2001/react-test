import Axios from "axios";

const Api = Axios.create({
    "baseURL": "https://rickandmortyapi.com/api",
});

interface GetDataOptions {
    path?: "character" | "location" | "episode";
    filters?: string;
    page?:string | number;
    id?:string 
}

type Status = "ALIVE" | "DEAD" | "UNKNOWN";
type Gender = "Male" | "Female" | "Genderless" | "Unknown";

export interface Pagination<T>{
    info:{
        count:number
        pages:number
        next:string | null
        prev:string | null
    },
    results:Array<T>
}
export interface Character {
    id:number 
    name:string
    species:string
    type:string,
    status:Status
    gender:Gender
    origin:{
        name:string
        url?:string
    }
    location?:{
        name:string
        url?:string
    }
    image:string
    episode?:Array<string>
}

export interface Episodes {
    id:number
    name:string
    air_date:string
    episode:string
    type?:string
    dimension?:string
}

/**
 * `getDataApi` Função assincrona que realiza uma busca na API, fazendo uma 
 * busca de **character**, **location**, **episode**
 * 
 * As buscas podem ser usando **multiplos**, **unico** ou usando **filtros**
 * @async
 *
 * @param path Caminho da api para buscar dados.
 * O valor padrão é "**character**"
 * possui 3 valores
 * 
 * ```ts
 *  path?: "character" | "location" | "episode";
 * 
 * ```
 * 
 * @param filters - Parametro string para o filtro selecionado.
 * O valor padrão e "**vazio**"
 * 
 * @param page - Paramentro para indicar a pagina atual, Valor padrão é "**vazio**"
 * 
 * @param id - indica que ID de um personagem especifico deseja, Valor padrão é "**vazio**""
 * **OBS: Não surte efeito page e filter se for usado junto com ID**
 * 
 * @example
 * `MODO DE USO`
 * 
 * ```ts
 *useEffetc(() => {
 *     getDataApi({page:1}) // Retornará personagems da pagina 1 do caminho "character"
 * },[])
 * 
 * useEffect(() => {
 *      getDataApi({id:"78"}) // Retornará o personagem de id "78" do caminho "chracters"
 * },[])
 * 
 * useEffect(() => {
 *      getDataApi({path:"episode",id:"7"}) // Retornará o episodeo "7" do caminho "episodeo"
 * },[])
 * 
 * 
 * useEffect(() => {
 *      getDataApi({page:2, filters:"&status=Alive"}) // retorna uma lista de personagems vivos da pagina 2
 * },[])
 * 
 * 
 * ```
 *`OBS`: você pode importar a tipagem dos dados que deseja retornar 
 *
 *```tsx
 *  import getDataApi,{ Pagination, Chracter }  from "path";
 *  
 * const [cards, setCards] = useState<Pagination<Chracter>>()
 * // ou
 * const [card, setCards] = useState<Chracter>()
 *
 *```
 * 
 * @returns Retorna os dados recebidos da API
 */
const getDataApi = async ({
    path = "character",
    filters = "",
    page = "",
    id
}: GetDataOptions) => {
    try {
        const response = await Api.get(`/${path}/${id? id:`?page=${page}${filters? filters:""}`}`);
        return response;
    } catch (error) {
        throw new Error(`Erro na requesição a API:${error}`);
    }
};
export default getDataApi;
