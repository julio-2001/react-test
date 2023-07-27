import StyledMuiPagination from "./styles"


interface MuiPaginationProps{
  pages:number
  currentPage:number
  changePage:(nextPage:number) => void
  cardsPerVez?:number
}

const Pagination = ({
  pages = 1, 
  changePage,
  currentPage = 1,
  
}:MuiPaginationProps) => {

  return (
    <StyledMuiPagination 
      size="small"
      count={pages} 
      onChange={(_, nextPage) => changePage(nextPage)}
      page={currentPage}
      
    />
  )
}
export default Pagination