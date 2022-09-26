import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
    line-height: 160%;
  }

  body, input, button, textarea {
    font-weight: 400;
    font-family: 'Nunito', sans-serif;
  }
`
