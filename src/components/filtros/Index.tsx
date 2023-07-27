import {useState} from "react";

import {
  StyledMuiDrawerContainer, 
  StyledMuiBoxContent
} from "./styles";

import Form from "./form/index";
import MuiButtonToogleStateDrawer from "./buttonToogleDrawer";
import MuiProgress from "./Progress/index";

export const FiltrosDrawer = () => {
  const [stateCurrentDrawer, setStateCurrentDrawer] = useState<boolean>(false);

  const toogleStateDrawer = () => {
    setStateCurrentDrawer(!stateCurrentDrawer)
  };

  return (
    <>
      <StyledMuiDrawerContainer 
        anchor="top" 
        variant="persistent" 
        open={stateCurrentDrawer} 
      >
        <Form/>

        <StyledMuiBoxContent>
          <MuiButtonToogleStateDrawer  onCLick={toogleStateDrawer} text="FILTROS"/>
          <MuiProgress/>
        </StyledMuiBoxContent>

      </StyledMuiDrawerContainer>
    </>
  );
};
