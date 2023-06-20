import {useRouteError} from "react-router-dom"

const Page404 = () => {
    const erro = useRouteError()
    console.log(erro)
  return (
    <div>Page404</div>
  )
}
export default Page404