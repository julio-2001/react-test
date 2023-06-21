import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface PaletteOptions {
    status: {
      statusAlive?: { background?: string; text?: string };
      statusDead?: { background?: string; text?: string };
      statusUnknown?: { background?: string; text?: string };
    };

    gender?:{
      male?:string
      female?:string
      genderless?:string
      unknown?:string
    }

    button?:string
    favorites?:string
  }
}
