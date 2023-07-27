import StyledMuiProgress from "./styles";
import { useEffect, useState } from "react";

const MuiProgress = () => {
  const [scrollTop, setScrollTop] = useState<number>(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll/height) * 100

    setScrollTop(Math.ceil(scrolled))
  };
  useEffect(() => {
    window.addEventListener("scroll",onScroll);
    return () => window.removeEventListener("scroll",onScroll)
  },[])

  return (
    <StyledMuiProgress variant="determinate"  value={scrollTop}/>
  )
}
export default MuiProgress