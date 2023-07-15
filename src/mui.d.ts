// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteOptions } from "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface Palette {
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

