import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    font-family: 'Spartan', sans-serif;
    --primary: hsl(180, 29%, 50%);
    --bg: hsl(180, 52%, 96%);
    --dgc: hsl(180, 8%, 52%);
    --vdgc: hsl(180, 14%, 20%);
  }
`;
