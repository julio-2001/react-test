import { useCallback } from "react"

/**
 * A `useFavorites` é um gancho personalizado que fornece métodos para gerenciar
 * uma lista de favoritos armazenados no `localStorage`
 * @returns A `useFavorites` função retorna um objeto com três propriedades:
 * `getFavorites`, `addFavorites` e `removeFavorites`
 * 
 */
const useFavorites = () => {
    /**
     * A função getFavorites é usada para obter os itens favoritos do localStorage.
     * Ela usa o hook useCallback do React para evitar recriações desnecessárias da função.
     * 
     * @callback getFavorites
     * @returns {Array<string>} Retorna um array de strings. Se não houver itens favoritos no localStorage, retorna um array vazio.
     */
    const getFavorites = useCallback(():Array<string> => {
        return JSON.parse(localStorage.getItem("favorites") as string) || []
    },[])

    /** 
     * A função `addFavorite` é uma função de retorno de chamada usada
     * para adicionar um item da lista de favoritos
     * 
     * @callback addFavorite
     * @param {string} id - o ID do item a ser adicionado
     * @param {boolean} checked - indicando se o item está marcado ou não
     */
    const addFavorite = useCallback((id:string, checked:boolean) => {
        const favorites = getFavorites()
        const index = favorites.indexOf(id)

        if(checked && index === -1) {
            favorites.push(id)
            localStorage.setItem("favorites",JSON.stringify(favorites))
        }
    },[getFavorites])

    /**
     * A função `removeFavorite` é uma função de retorno de chamada usada
     * para remover um item da lista de favoritos
     * 
     * @callback removeFavorite
     * @param {string} id - o ID do item a ser adicionado
     * @param {boolean} checked - indicando se o item está marcado ou não
     */
    const removeFavorite = useCallback((id:string, checked:boolean) => {
        const favorites = getFavorites()
        const index = favorites.indexOf(id)

        if(!checked && index !== -1) {
            favorites.splice(index, 1)
            localStorage.setItem("favorites", JSON.stringify(favorites))
        }
    },[getFavorites])

    return {getFavorites, addFavorite, removeFavorite}
}
export default useFavorites