import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#eeeeee',
  preta: '#111111',
  cinza: '#333333',
  verde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.preta};
    color: ${cores.branca};
    padding-top: 40px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
